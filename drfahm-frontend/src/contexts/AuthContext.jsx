import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

// API URL - Use environment variable or default to localhost
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Initialize auth state from storage on mount
  useEffect(() => {
    const initAuth = () => {
      try {
        // Check for token in localStorage or sessionStorage
        const storedToken = localStorage.getItem('token') || sessionStorage.getItem('token');
        const storedUser = localStorage.getItem('user');

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        // Clear invalid data
        logout();
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  // Login function
  const login = async (credentials, rememberMe = false) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Login failed');
      }

      // Store token and user data
      const authToken = data.access_token || data.token;
      const userData = data.user;

      if (!authToken || !userData) {
        throw new Error('Invalid response from server');
      }

      // Store based on rememberMe preference
      if (rememberMe) {
        localStorage.setItem('token', authToken);
        localStorage.setItem('user', JSON.stringify(userData));
      } else {
        sessionStorage.setItem('token', authToken);
        localStorage.setItem('user', JSON.stringify(userData));
      }

      // Update state
      setToken(authToken);
      setUser(userData);

      // Navigate to dashboard
      navigate('/dashboard');

      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        error: error.message || 'Login failed. Please try again.' 
      };
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userData.email,
          username: userData.name, // Backend uses 'username' field
          password: userData.password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Registration failed');
      }

      // Store token and user data
      const authToken = data.access_token || data.token;
      const user = data.user;

      if (!authToken || !user) {
        throw new Error('Invalid response from server');
      }

      // Always use localStorage for new registrations
      localStorage.setItem('token', authToken);
      localStorage.setItem('user', JSON.stringify(user));

      // Update state
      setToken(authToken);
      setUser(user);

      // Navigate to dashboard
      navigate('/dashboard');

      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
      return { 
        success: false, 
        error: error.message || 'Registration failed. Please try again.' 
      };
    }
  };

  // Logout function
  const logout = () => {
    // Clear storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('token');

    // Clear state
    setToken(null);
    setUser(null);

    // Navigate to home
    navigate('/');
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return !!token && !!user;
  };

  // Get auth header for API requests
  const getAuthHeader = () => {
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  };

  // Update user data
  const updateUser = (updatedUserData) => {
    const newUserData = { ...user, ...updatedUserData };
    setUser(newUserData);
    localStorage.setItem('user', JSON.stringify(newUserData));
  };

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    isAuthenticated,
    getAuthHeader,
    updateUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}

export default AuthContext;