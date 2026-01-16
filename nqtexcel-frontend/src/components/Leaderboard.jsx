import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import axios from 'axios';

function Leaderboard() {
  const navigate = useNavigate();
  const { user, API_URL } = useAuth();
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const response = await axios.get(`${API_URL}/leaderboard`);
      setLeaderboard(response.data.leaderboard);
    } catch (err) {
      setError('Failed to load leaderboard');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getRankColor = (rank) => {
    if (rank === 1) return '#FFD700'; // Gold
    if (rank === 2) return '#C0C0C0'; // Silver
    if (rank === 3) return '#CD7F32'; // Bronze
    return '#FFFFFF'; // White
  };

  const getRankBadge = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return rank;
  };

  if (loading) {
    return (
      <div className="leaderboard-loading">
        <p>Loading leaderboard...</p>
      </div>
    );
  }

  return (
    <div className="leaderboard-container">
      <nav className="navbar">
        <div className="navbar-left">
          <h1>NQTexcel</h1>
        </div>
        <div className="navbar-right">
          <button onClick={() => navigate('/dashboard')} className="btn-nav">Dashboard</button>
          <button onClick={() => navigate('/profile')} className="btn-nav">Profile</button>
        </div>
      </nav>

      <div className="leaderboard-content">
        <div className="leaderboard-header">
          <h2>Global Leaderboard</h2>
          <p>Top 100 Students</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="leaderboard-table-container">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>XP</th>
                <th>Levels Completed</th>
                <th>Current World</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry) => (
                <tr 
                  key={entry.user_id} 
                  className={entry.user_id === user?.id ? 'current-user' : ''}
                >
                  <td>
                    <span 
                      className="rank-badge"
                      style={{ color: getRankColor(entry.rank) }}
                    >
                      {getRankBadge(entry.rank)}
                    </span>
                  </td>
                  <td className="username-cell">
                    {entry.username}
                    {entry.user_id === user?.id && <span className="you-badge">You</span>}
                  </td>
                  <td className="xp-cell">{entry.xp.toLocaleString()}</td>
                  <td>{entry.completed_levels}</td>
                  <td>World {entry.current_world}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {leaderboard.length === 0 && !loading && (
          <div className="no-data">
            <p>No leaderboard data available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Leaderboard;