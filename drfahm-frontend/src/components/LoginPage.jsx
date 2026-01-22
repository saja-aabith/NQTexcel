import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AuthLayout from './auth/AuthLayout';
import AuthInput from './auth/AuthInput';
import AuthButton from './auth/AuthButton';
import '../styles/variables.css';
import '../styles/components.css';

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
    if (serverError) {
      setServerError('');
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setServerError('');

    // Use AuthContext login function
    const result = await login(
      {
        email: formData.email,
        password: formData.password
      },
      formData.rememberMe
    );

    if (!result.success) {
      setServerError(result.error);
    }

    setIsLoading(false);
  };

  return (
    <AuthLayout 
      title="Welcome back" 
      subtitle="Sign in to continue your preparation"
    >
      {/* Server Error Alert */}
      {serverError && (
        <div style={{
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: 'var(--radius-md)',
          padding: '14px 16px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px'
        }}>
          <span style={{ color: '#EF4444', fontSize: '18px' }}>⚠</span>
          <p style={{
            fontSize: '14px',
            color: '#FCA5A5',
            margin: 0,
            lineHeight: '1.5'
          }}>
            {serverError}
          </p>
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        <AuthInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          error={errors.email}
          required
          autoComplete="email"
        />

        <AuthInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          error={errors.password}
          required
          autoComplete="current-password"
        />

        {/* Remember Me & Forgot Password */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px'
        }}>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            color: 'var(--text-secondary)'
          }}>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              style={{
                width: '16px',
                height: '16px',
                cursor: 'pointer',
                accentColor: 'var(--accent-primary)'
              }}
            />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            onClick={() => {
              alert('Forgot password functionality coming soon. Please contact support@drfahm.com for password reset.');
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent-primary)',
              fontSize: '14px',
              fontWeight: 'var(--font-weight-medium)',
              cursor: 'pointer',
              padding: 0
            }}
          >
            Forgot password?
          </button>
        </div>

        {/* Submit Button */}
        <AuthButton
          type="submit"
          variant="primary"
          loading={isLoading}
          disabled={isLoading}
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </AuthButton>
      </form>

      {/* Divider */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        margin: '32px 0'
      }}>
        <div style={{
          flex: 1,
          height: '1px',
          background: 'var(--border-subtle)'
        }} />
        <span style={{
          fontSize: '13px',
          color: 'var(--text-tertiary)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          New to Dr Fahm?
        </span>
        <div style={{
          flex: 1,
          height: '1px',
          background: 'var(--border-subtle)'
        }} />
      </div>

      {/* Register Link */}
      <AuthButton
        variant="secondary"
        onClick={() => navigate('/register')}
      >
        Create an account
      </AuthButton>

      {/* Footer Note */}
      <p style={{
        marginTop: '24px',
        fontSize: '13px',
        color: 'var(--text-tertiary)',
        textAlign: 'center',
        lineHeight: '1.6'
      }}>
        By signing in, you agree to our{' '}
        <span
          onClick={() => navigate('/terms')}
          style={{
            color: 'var(--accent-primary)',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
        >
          Terms of Service
        </span>
        {' '}and{' '}
        <span
          onClick={() => navigate('/privacy')}
          style={{
            color: 'var(--accent-primary)',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
        >
          Privacy Policy
        </span>
      </p>
    </AuthLayout>
  );
}

export default LoginPage;