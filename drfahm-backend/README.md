# DrFahm Backend

Flask backend API for the DrFahm gamified test prep platform.

## About

DrFahm provides a comprehensive REST API for managing users, questions, progress tracking, and leaderboards for QUDURAT, NAFS, and TAHSILI exam preparation.

## Setup Instructions

### 1. Create Virtual Environment

```bash
cd drfahm-backend
python -m venv venv
```

### 2. Activate Virtual Environment

**On Windows:**
```bash
venv\Scripts\activate
```

**On macOS/Linux:**
```bash
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Server

```bash
python app.py
```

The server will start on `http://localhost:5001`

## API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user (returns JWT)

### User Management
- `GET /user/profile` - Get user profile (requires JWT)

### Worlds & Levels
- `GET /worlds` - Get all worlds with unlock status (requires JWT)
- `GET /level/<world>/<level>` - Get questions for specific level (requires JWT)
- `POST /level/<world>/<level>/submit` - Submit answers (requires JWT)

### Leaderboard
- `GET /leaderboard` - Get top 100 users (public)

### Health Check
- `GET /health` - Server health status

## Database Schema

### Users Table
- `id` - Primary key
- `email` - Unique email address
- `username` - Unique username (3-20 chars)
- `password_hash` - Bcrypt hashed password
- `xp` - Total experience points
- `created_at` - Account creation timestamp

### Questions Table
- `id` - Primary key
- `world` - World number (1-10)
- `level` - Level number (1-10)
- `section` - 'verbal' or 'math'
- `question_text` - Question content
- `option_a`, `option_b`, `option_c`, `option_d` - Answer choices
- `correct_answer` - Correct option ('A', 'B', 'C', or 'D')

### Attempts Table
- `id` - Primary key
- `user_id` - Foreign key to users
- `world` - World number
- `level` - Level number
- `score` - Percentage score (0-100)
- `correct_count` - Number of correct answers
- `total_questions` - Total questions in level
- `timestamp` - Submission time

## Question Distribution

**Total:** 2,000 questions

### Verbal Section (Worlds 1-5)
- World 1: 100 questions (Sentence Completion)
- World 2: 150 questions (Grammar)
- World 3: 200 questions (Critical Reading)
- World 4: 250 questions (Advanced Vocabulary)
- World 5: 300 questions (Complex Comprehension)

**Subtotal:** 1,000 verbal questions

### Math Section (Worlds 6-10)
- World 6: 100 questions (Basic Algebra)
- World 7: 150 questions (Geometry)
- World 8: 200 questions (Advanced Algebra)
- World 9: 250 questions (Quantitative Comparison)
- World 10: 300 questions (Advanced Problem Solving)

**Subtotal:** 1,000 math questions

## XP System

XP is earned based on world difficulty:

### Verbal Worlds (1-5)
- World 1: 100 XP per level
- World 2: 120 XP per level
- World 3: 140 XP per level
- World 4: 160 XP per level
- World 5: 180 XP per level

### Math Worlds (6-10)
- World 6: 200 XP per level
- World 7: 220 XP per level
- World 8: 240 XP per level
- World 9: 260 XP per level
- World 10: 280 XP per level

## Test Credentials

Pre-seeded test accounts:
- `ahmed@test.com` / `password123` (15,000 XP)
- `sara@test.com` / `password123` (14,500 XP)
- `mohammed@test.com` / `password123` (13,800 XP)

Or register a new account!

## Security Features

- JWT authentication with 7-day expiration
- Bcrypt password hashing
- CORS protection
- Request validation
- SQL injection prevention (SQLAlchemy ORM)

## Database Management

The SQLite database (`database.db`) is automatically created on first run with:
- All 2,000 questions seeded
- 10 dummy users for leaderboard testing

To reset the database:
```bash
# Delete the database file
rm database.db

# Restart the server to recreate
python app.py
```

## Production Deployment

When deploying to production:

1. Change `SECRET_KEY` and `JWT_SECRET_KEY` to secure random values
2. Update CORS origins to include drfahm.com
3. Use PostgreSQL or MySQL instead of SQLite
4. Set `debug=False` in app.run()
5. Use a production WSGI server (Gunicorn, uWSGI)
6. Enable HTTPS/SSL
7. Set up proper logging

## Environment Variables (Recommended)

Create a `.env` file:
```
FLASK_ENV=production
SECRET_KEY=your-secret-key-here
JWT_SECRET_KEY=your-jwt-secret-here
DATABASE_URL=postgresql://user:pass@host/db
FRONTEND_URL=https://drfahm.com
```

## API Response Formats

### Success Response
```json
{
  "message": "Operation successful",
  "data": { ... }
}
```

### Error Response
```json
{
  "error": "Error description"
}
```

## License

Proprietary - All rights reserved © 2025 DrFahm