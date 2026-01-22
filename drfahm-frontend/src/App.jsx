import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

// Public / Marketing pages
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import FAQPage from './components/FAQPage';
import HowItWorksPage from './components/HowItWorksPage';
import PricingPage from './components/PricingPage';
import SchoolsPage from './components/SchoolsPage';
import NAFSPage from './components/NAFSPage';
import QuduratPage from './components/QuduratPage';
import TahsiliPage from './components/TahsiliPage';
import WorldMap from './components/WorldMap';

// Auth + App pages
import Login from './components/Login';
import StartPage from './components/StartPage';
import Dashboard from './components/Dashboard';
import Level from './components/Level';
import LevelComplete from './components/LevelComplete';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';

import './index.css';

// API Base URL
const API_URL = 'http://localhost:5001';

// Auth Context
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// Configure axios defaults (base URL)
axios.defaults.baseURL = API_URL;

// Axios interceptor to add JWT token
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Axios response interceptor to handle 401 errors
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Simple route guards
function ProtectedRoute({ user, children }) {
  return user ? children : <Navigate to="/" replace />;
}

function PublicOnlyRoute({ user, children, redirectTo = '/dashboard' }) {
  return !user ? children : <Navigate to={redirectTo} replace />;
}

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('/user/profile');
      const updatedUser = response.data;
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error) {
      console.error('Error fetching profile:', error);
      if (error?.response?.status === 401) logout();
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (token && storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setUser(parsed);
        fetchUserProfile();
      } catch (e) {
        console.error('Error parsing stored user:', e);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }

    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = (userData, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <h1>Loading DrFahm...</h1>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, fetchUserProfile, API_URL }}>
      <Router>
        <Routes>
          {/* =========================
              Public / Marketing Routes
              ========================= */}
          <Route
            path="/"
            element={!user ? <HomePage /> : <Navigate to="/dashboard" replace />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/schools" element={<SchoolsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Exam info / marketing pages (public) */}
          <Route path="/nafs" element={<NAFSPage />} />
          <Route path="/qudurat" element={<QuduratPage />} />
          <Route path="/tahsili" element={<TahsiliPage />} />

          {/* Map page (public unless you want to lock it) */}
          <Route path="/world-map" element={<WorldMap />} />

          {/* Auth */}
          <Route
            path="/login"
            element={
              <PublicOnlyRoute user={user}>
                <Login />
              </PublicOnlyRoute>
            }
          />

          {/* Optional start page (public) */}
          <Route path="/start" element={<StartPage />} />

          {/* =========================
              Protected / App Routes
              ========================= */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/level/:world/:level"
            element={
              <ProtectedRoute user={user}>
                <Level />
              </ProtectedRoute>
            }
          />

          <Route
            path="/level-complete"
            element={
              <ProtectedRoute user={user}>
                <LevelComplete />
              </ProtectedRoute>
            }
          />

          <Route
            path="/leaderboard"
            element={
              <ProtectedRoute user={user}>
                <Leaderboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
