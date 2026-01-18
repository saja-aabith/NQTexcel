# DrFahm Frontend

React frontend for the DrFahm gamified test prep platform.

## About DrFahm

DrFahm is a comprehensive exam preparation platform designed specifically for Saudi Arabian students preparing for QUDURAT, NAFS, and TAHSILI exams. The platform uses gamification to make learning engaging and effective.

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

- **User Authentication** - Secure registration and login system
- **10 Worlds × 10 Levels** - Progressive difficulty across 100 levels
- **Gamified Learning** - Earn XP, unlock levels, compete on leaderboards
- **60-Second Timer** - Timed questions for real exam simulation
- **Multiple Choice** - QUDURAT-style A, B, C, D questions
- **100% Requirement** - Master each level before advancing
- **Global Leaderboard** - Compete with top 100 students
- **User Profile** - Track your progress and stats
- **Mobile Responsive** - Works seamlessly on all devices
- **Nordic Cool Design** - Apple-inspired, premium UI/UX

## Project Structure

```
src/
├── components/
│   ├── Login.jsx          - Authentication interface
│   ├── Dashboard.jsx      - World map & level selection
│   ├── WorldMap.jsx       - Interactive 3D progress map
│   ├── Level.jsx          - Question gameplay interface
│   ├── LevelComplete.jsx  - Results & XP screen
│   ├── Leaderboard.jsx    - Top 100 rankings
│   └── Profile.jsx        - User statistics
├── App.jsx                - Main app with routing
├── index.js               - React entry point
└── index.css              - All styling
```

## API Connection

The frontend connects to the backend at `http://localhost:5001`. Make sure the backend is running before starting the frontend.

## Design System

### Color Palette
- **Background:** #F8FAFC (Light gray)
- **Surface:** #FFFFFF (Pure white)
- **Primary:** #0F172A (Deep slate)
- **Secondary:** #0EA5E9 (Bright blue)
- **Success:** #14B8A6 (Teal)
- **Accent:** #8B5CF6 (Purple)

### Typography
- **Font Family:** SF Pro Display, -apple-system
- **Weights:** 500 (medium), 600 (semibold), 700 (bold), 900 (black)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Android Chrome 90+)

## Test Account

After starting both backend and frontend:
1. Register a new account
2. Or use: `ahmed@test.com` / `password123`

## Development Notes

- JWT tokens stored in localStorage
- Auto-logout on token expiration
- Real-time XP updates after level completion
- Responsive design optimized for mobile

## Production Deployment

When deploying to production (drfahm.com):

1. Update `API_URL` in `App.jsx` to your production backend URL
2. Update CORS settings in backend to allow drfahm.com
3. Build the production bundle: `npm run build`
4. Deploy the `build/` folder to your hosting provider

## License

Proprietary - All rights reserved © 2025 DrFahm