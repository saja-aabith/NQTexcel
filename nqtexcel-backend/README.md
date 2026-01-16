# NQTexcel Backend

Flask backend API for the NQTexcel gamified test prep platform.

## Setup Instructions

### 1. Create Virtual Environment

```bash
cd nqtexcel-backend
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

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user

### User
- `GET /user/profile` - Get user profile (requires JWT)

### Worlds & Levels
- `GET /worlds` - Get all worlds and levels (requires JWT)
- `GET /level/<world>/<level>` - Get questions for specific level (requires JWT)
- `POST /level/<world>/<level>/submit` - Submit level attempt (requires JWT)

### Leaderboard
- `GET /leaderboard` - Get top 100 users

### Admin
- `GET /admin/questions` - Get all questions
- `GET /health` - Health check

## Database

SQLite database is automatically created as `database.db` with:
- 2,000 questions (1,000 verbal + 1,000 math)
- 10 dummy users for testing

## Test Credentials

Use these accounts to test:
- Email: `ahmed@test.com`, Password: `password123`
- Email: `sara@test.com`, Password: `password123`

Or register a new account!

## Notes

- JWT tokens expire after 7 days
- CORS is enabled for `http://localhost:3000`
- Database resets on server restart (unless you comment out the seeding logic)