import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';

function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  if (!user) {
    navigate('/login');
    return null;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="profile-container">
      <nav className="navbar">
        <div className="navbar-left">
          <h1>DrFahm</h1>
        </div>
        <div className="navbar-right">
          <button onClick={() => navigate('/dashboard')} className="btn-nav">Dashboard</button>
          <button onClick={() => navigate('/leaderboard')} className="btn-nav">Leaderboard</button>
          <button onClick={logout} className="btn-logout">Logout</button>
        </div>
      </nav>

      <div className="profile-content">
        <div className="profile-header">
          <div className="profile-avatar">
            {user.username.charAt(0).toUpperCase()}
          </div>
          <h2>{user.username}</h2>
          <p className="profile-email">{user.email}</p>
        </div>

        <div className="profile-stats">
          <div className="stat-card">
            <div className="stat-info">
              <span className="stat-value">{user.xp || 0}</span>
              <span className="stat-label">Total XP</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-info">
              <span className="stat-value">{user.completed_levels || 0}</span>
              <span className="stat-label">Levels Completed</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-info">
              <span className="stat-value">World {user.current_world || 1}</span>
              <span className="stat-label">Current World</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-info">
              <span className="stat-value">Level {user.current_level || 1}</span>
              <span className="stat-label">Current Level</span>
            </div>
          </div>
        </div>

        <div className="profile-details">
          <h3>Account Information</h3>
          <div className="detail-row">
            <span className="detail-label">User ID:</span>
            <span className="detail-value">#{user.id}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Member Since:</span>
            <span className="detail-value">{formatDate(user.created_at)}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Account Status:</span>
            <span className="detail-value status-active">Active</span>
          </div>
        </div>

        <div className="profile-actions">
          <button onClick={() => navigate('/dashboard')} className="btn-primary">
            Continue Learning
          </button>
          <button onClick={() => navigate('/leaderboard')} className="btn-secondary">
            View Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;