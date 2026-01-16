from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timedelta
from models import db, User, Question, Attempt
from questions_data import QUESTIONS_DATA
import os

app = Flask(__name__)

# Configuration
app.config['SECRET_KEY'] = 'nqtexcel-super-secret-key-2025'
app.config['JWT_SECRET_KEY'] = 'jwt-nqtexcel-secret-2025'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(days=7)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
CORS(app)
jwt = JWTManager(app)
db.init_app(app)

# Database initialization
with app.app_context():
    db.create_all()
    
    # Seed questions if not already seeded
    if Question.query.count() == 0:
        print("Seeding questions...")
        for question_data in QUESTIONS_DATA:
            question = Question(
                world=question_data['world'],
                level=question_data['level'],
                section=question_data['section'],
                question_text=question_data['question_text'],
                option_a=question_data['option_a'],
                option_b=question_data['option_b'],
                option_c=question_data['option_c'],
                option_d=question_data['option_d'],
                correct_answer=question_data['correct_answer']
            )
            db.session.add(question)
        db.session.commit()
        print(f"Seeded {len(QUESTIONS_DATA)} questions successfully!")
    
    # Create some dummy users for leaderboard
    if User.query.count() == 0:
        print("Creating dummy users...")
        dummy_users = [
            {'username': 'ahmed_ali', 'email': 'ahmed@test.com', 'xp': 15000},
            {'username': 'sara_khan', 'email': 'sara@test.com', 'xp': 14500},
            {'username': 'mohammed_93', 'email': 'mohammed@test.com', 'xp': 13800},
            {'username': 'layla_star', 'email': 'layla@test.com', 'xp': 12900},
            {'username': 'omar_pro', 'email': 'omar@test.com', 'xp': 11200},
            {'username': 'fatima_ace', 'email': 'fatima@test.com', 'xp': 10500},
            {'username': 'khalid_98', 'email': 'khalid@test.com', 'xp': 9800},
            {'username': 'noor_scholar', 'email': 'noor@test.com', 'xp': 8900},
            {'username': 'yusuf_king', 'email': 'yusuf@test.com', 'xp': 7500},
            {'username': 'aisha_smart', 'email': 'aisha@test.com', 'xp': 6200},
        ]
        
        for dummy in dummy_users:
            user = User(
                username=dummy['username'],
                email=dummy['email'],
                password_hash=generate_password_hash('password123'),
                xp=dummy['xp']
            )
            db.session.add(user)
        db.session.commit()
        print("Dummy users created!")

# Helper function to get difficulty multiplier
def get_difficulty_multiplier(world):
    # Worlds 1-5 (Verbal): 1.0, 1.2, 1.4, 1.6, 1.8
    # Worlds 6-10 (Math): 2.0, 2.2, 2.4, 2.6, 2.8
    if world <= 5:
        return 1.0 + (world - 1) * 0.2
    else:
        return 2.0 + (world - 6) * 0.2

# Helper function to get questions per level
def get_questions_per_level(world):
    # World 1: 10, World 2: 15, World 3: 20, World 4: 25, World 5: 30
    # Same for worlds 6-10
    world_adjusted = world if world <= 5 else world - 5
    return 10 + (world_adjusted - 1) * 5

# AUTH ROUTES
@app.route('/auth/register', methods=['POST'])
def register():
    try:
        data = request.json
        email = data.get('email', '').strip()
        username = data.get('username', '').strip()
        password = data.get('password', '')
        
        # Validation
        if not email or not username or not password:
            return jsonify({'error': 'All fields are required'}), 400
        
        if len(username) < 3 or len(username) > 20:
            return jsonify({'error': 'Username must be 3-20 characters'}), 400
        
        if len(password) < 6:
            return jsonify({'error': 'Password must be at least 6 characters'}), 400
        
        # Check if user exists
        if User.query.filter_by(email=email).first():
            return jsonify({'error': 'Email already registered'}), 400
        
        if User.query.filter_by(username=username).first():
            return jsonify({'error': 'Username already taken'}), 400
        
        # Create new user
        user = User(
            email=email,
            username=username,
            password_hash=generate_password_hash(password),
            xp=0
        )
        db.session.add(user)
        db.session.commit()
        
        # Create access token
        access_token = create_access_token(identity=user.id)
        
        return jsonify({
            'message': 'Registration successful',
            'access_token': access_token,
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'xp': user.xp
            }
        }), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/auth/login', methods=['POST'])
def login():
    try:
        data = request.json
        email = data.get('email', '').strip()
        password = data.get('password', '')
        
        if not email or not password:
            return jsonify({'error': 'Email and password are required'}), 400
        
        # Find user
        user = User.query.filter_by(email=email).first()
        
        if not user or not check_password_hash(user.password_hash, password):
            return jsonify({'error': 'Invalid email or password'}), 401
        
        # Create access token
        access_token = create_access_token(identity=user.id)
        
        return jsonify({
            'message': 'Login successful',
            'access_token': access_token,
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'xp': user.xp
            }
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# USER ROUTES
@app.route('/user/profile', methods=['GET'])
@jwt_required()
def get_profile():
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        # Get completed levels
        attempts = Attempt.query.filter_by(user_id=user_id, score=100).all()
        completed_levels = len(attempts)
        
        # Calculate current world and level
        current_world = 1
        current_level = 1
        
        if attempts:
            max_world = max(a.world for a in attempts)
            levels_in_max_world = [a for a in attempts if a.world == max_world]
            max_level = max(a.level for a in levels_in_max_world) if levels_in_max_world else 0
            
            if max_level == 10:
                current_world = max_world + 1 if max_world < 10 else 10
                current_level = 1 if max_world < 10 else 10
            else:
                current_world = max_world
                current_level = max_level + 1
        
        return jsonify({
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'xp': user.xp,
            'completed_levels': completed_levels,
            'current_world': current_world,
            'current_level': current_level,
            'created_at': user.created_at.isoformat()
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# WORLD/LEVEL ROUTES
@app.route('/worlds', methods=['GET'])
@jwt_required()
def get_worlds():
    try:
        user_id = get_jwt_identity()
        
        # Get all completed levels for this user
        completed_attempts = Attempt.query.filter_by(user_id=user_id, score=100).all()
        completed_set = {(a.world, a.level) for a in completed_attempts}
        
        worlds = []
        for world_num in range(1, 11):
            section = 'verbal' if world_num <= 5 else 'math'
            levels = []
            
            for level_num in range(1, 11):
                is_completed = (world_num, level_num) in completed_set
                
                # Check if level is unlocked
                if level_num == 1 and world_num == 1:
                    is_unlocked = True
                elif level_num == 1:
                    # First level of world unlocked if previous world completed
                    is_unlocked = (world_num - 1, 10) in completed_set
                else:
                    # Level unlocked if previous level in same world completed
                    is_unlocked = (world_num, level_num - 1) in completed_set
                
                levels.append({
                    'level': level_num,
                    'is_unlocked': is_unlocked,
                    'is_completed': is_completed
                })
            
            worlds.append({
                'world': world_num,
                'section': section,
                'levels': levels
            })
        
        return jsonify({'worlds': worlds}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/level/<int:world>/<int:level>', methods=['GET'])
@jwt_required()
def get_level(world, level):
    try:
        user_id = get_jwt_identity()
        
        # Validate world and level
        if world < 1 or world > 10 or level < 1 or level > 10:
            return jsonify({'error': 'Invalid world or level'}), 400
        
        # Check if level is unlocked
        if level == 1 and world == 1:
            is_unlocked = True
        elif level == 1:
            prev_world_completed = Attempt.query.filter_by(
                user_id=user_id, world=world-1, level=10, score=100
            ).first()
            is_unlocked = prev_world_completed is not None
        else:
            prev_level_completed = Attempt.query.filter_by(
                user_id=user_id, world=world, level=level-1, score=100
            ).first()
            is_unlocked = prev_level_completed is not None
        
        if not is_unlocked:
            return jsonify({'error': 'Level is locked'}), 403
        
        # Get questions for this level
        section = 'verbal' if world <= 5 else 'math'
        
        # Get cumulative questions for this level
        questions_per_level = get_questions_per_level(world)
        total_questions = level * questions_per_level
        
        questions = Question.query.filter_by(
            world=world,
            section=section
        ).limit(total_questions).all()
        
        # Format questions (don't include correct answer)
        formatted_questions = []
        for q in questions:
            formatted_questions.append({
                'id': q.id,
                'question_text': q.question_text,
                'option_a': q.option_a,
                'option_b': q.option_b,
                'option_c': q.option_c,
                'option_d': q.option_d
            })
        
        return jsonify({
            'world': world,
            'level': level,
            'section': section,
            'questions': formatted_questions,
            'total_questions': len(formatted_questions)
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/level/<int:world>/<int:level>/submit', methods=['POST'])
@jwt_required()
def submit_level(world, level):
    try:
        user_id = get_jwt_identity()
        data = request.json
        user_answers = data.get('user_answers', [])
        
        # Validate world and level
        if world < 1 or world > 10 or level < 1 or level > 10:
            return jsonify({'error': 'Invalid world or level'}), 400
        
        # Get questions for this level
        section = 'verbal' if world <= 5 else 'math'
        questions_per_level = get_questions_per_level(world)
        total_questions = level * questions_per_level
        
        questions = Question.query.filter_by(
            world=world,
            section=section
        ).limit(total_questions).all()
        
        if len(user_answers) != len(questions):
            return jsonify({'error': 'Answer count mismatch'}), 400
        
        # Calculate score
        correct_count = 0
        for i, question in enumerate(questions):
            if i < len(user_answers) and user_answers[i] == question.correct_answer:
                correct_count += 1
        
        score = (correct_count / len(questions)) * 100 if questions else 0
        
        # Save attempt
        attempt = Attempt(
            user_id=user_id,
            world=world,
            level=level,
            score=score,
            correct_count=correct_count,
            total_questions=len(questions)
        )
        db.session.add(attempt)
        
        # If 100%, add XP and unlock next level
        if score == 100:
            user = User.query.get(user_id)
            multiplier = get_difficulty_multiplier(world)
            xp_earned = int(100 * multiplier)
            user.xp += xp_earned
            db.session.commit()
            
            return jsonify({
                'success': True,
                'score': score,
                'correct_count': correct_count,
                'total_questions': len(questions),
                'xp_earned': xp_earned,
                'message': 'Level Complete! Next level unlocked!'
            }), 200
        else:
            db.session.commit()
            return jsonify({
                'success': False,
                'score': score,
                'correct_count': correct_count,
                'total_questions': len(questions),
                'xp_earned': 0,
                'message': f'You got {correct_count}/{len(questions)}. You need 100% to advance.'
            }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# LEADERBOARD ROUTES
@app.route('/leaderboard', methods=['GET'])
def get_leaderboard():
    try:
        # Get top 100 users by XP
        users = User.query.order_by(User.xp.desc()).limit(100).all()
        
        leaderboard = []
        for rank, user in enumerate(users, start=1):
            # Get completed levels count
            completed_levels = Attempt.query.filter_by(
                user_id=user.id, 
                score=100
            ).count()
            
            # Calculate current world
            attempts = Attempt.query.filter_by(user_id=user.id, score=100).all()
            current_world = 1
            if attempts:
                current_world = max(a.world for a in attempts)
            
            leaderboard.append({
                'rank': rank,
                'user_id': user.id,
                'username': user.username,
                'xp': user.xp,
                'completed_levels': completed_levels,
                'current_world': current_world
            })
        
        return jsonify({'leaderboard': leaderboard}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# ADMIN ROUTES (optional)
@app.route('/admin/questions', methods=['GET'])
def get_all_questions():
    try:
        questions = Question.query.all()
        return jsonify({
            'total': len(questions),
            'questions': [{
                'id': q.id,
                'world': q.world,
                'level': q.level,
                'section': q.section,
                'question_text': q.question_text[:50] + '...'
            } for q in questions]
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Health check
@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok'}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)