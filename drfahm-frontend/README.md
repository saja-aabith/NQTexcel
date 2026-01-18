# NQTexcel Frontend

React frontend for the NQTexcel gamified test prep platform.

## Setup Instructions

### 1. Install Dependencies

```bash
cd nqtexcel-frontend
npm install
```

### 2. Start Development Server

```bash
npm start
```

The app will open at `http://localhost:3000`

## Features

- User Authentication (Register/Login)
- Dashboard with 10 Worlds × 10 Levels
- Gamified Level System
- 60-second timer per question
- Multiple choice questions (A, B, C, D)
- 100% score requirement to unlock next level
- Global Leaderboard (Top 100)
- User Profile with stats
- Mobile-responsive design
- Bright, gamified color theme

## Structure

```
src/
├── components/
│   ├── Login.jsx          - Authentication
│   ├── Dashboard.jsx      - World map
│   ├── Level.jsx          - Question gameplay
│   ├── LevelComplete.jsx  - Results screen
│   ├── Leaderboard.jsx    - Top 100 rankings
│   └── Profile.jsx        - User stats
├── App.jsx                - Main app with routing
├── index.js               - React entry point
└── index.css              - All styling
```

## API Connection

The frontend connects to the backend at `http://localhost:5000`. Make sure the backend is running before starting the frontend.

## Color Theme

- Background: Dark blue (#0A0E27)
- Primary: Lime green (#00FF00)
- Secondary: Electric blue (#0099FF)
- Accent: Gold (#FFD700)
- Text: White (#FFFFFF)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Android Chrome 90+)

## Test Account

After starting both backend and frontend:
1. Register a new account
2. Or use: `ahmed@test.com` / `password123`

## Notes

- JWT token stored in localStorage
- Auto-logout on token expiration
- Real-time XP updates
- Responsive design for mobile