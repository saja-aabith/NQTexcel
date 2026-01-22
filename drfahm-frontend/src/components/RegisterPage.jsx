import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AuthLayout from './auth/AuthLayout';
import AuthInput from './auth/AuthInput';
import AuthButton from './auth/AuthButton';
import '../styles/variables.css';
import '../styles/components.css';

function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must include uppercase, lowercase, and number';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Terms validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms to continue';
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

    // Use AuthContext register function
    const result = await register({
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password
    });

    if (!result.success) {
      setServerError(result.error);
    }

    setIsLoading(false);
  };

  const getPasswordStrength = () => {
    const password = formData.password;
    if (!password) return { strength: 0, label: '', color: '' };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    if (strength <= 2) return { strength, label: 'Weak', color: '#EF4444' };
    if (strength <= 3) return { strength, label: 'Fair', color: '#F59E0B' };
    if (strength <= 4) return { strength, label: 'Good', color: '#10B981' };
    return { strength, label: 'Strong', color: '#10B981' };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <AuthLayout 
      title="Create your account" 
      subtitle="Start your readiness journey today"
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

      {/* Register Form */}
      <form onSubmit={handleSubmit}>
        <AuthInput
          label="Full Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          error={errors.name}
          required
          autoComplete="name"
        />

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

        {/* Password Field with Show/Hide Toggle */}
        <div style={{ marginBottom: '12px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: 'var(--text-primary)',
            fontSize: '14px',
            fontWeight: 'var(--font-weight-semibold)'
          }}>
            Password <span style={{ color: '#EF4444' }}>*</span>
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a strong password"
              required
              autoComplete="new-password"
              style={{
                width: '100%',
                padding: '14px 16px',
                paddingRight: '48px',
                background: 'var(--navy-950)',
                border: `1.5px solid ${errors.password ? '#EF4444' : 'var(--border)'}`,
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontSize: '15px',
                fontFamily: 'inherit',
                transition: 'var(--transition)',
                outline: 'none'
              }}
              onFocus={(e) => {
                if (!errors.password) {
                  e.target.style.borderColor = 'var(--accent-primary)';
                }
              }}
              onBlur={(e) => {
                if (!errors.password) {
                  e.target.style.borderColor = 'var(--border)';
                }
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: 'var(--text-tertiary)',
                cursor: 'pointer',
                padding: '4px',
                fontSize: '14px'
              }}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
          {errors.password && (
            <p style={{
              fontSize: '13px',
              color: '#EF4444',
              margin: '6px 0 0 0'
            }}>
              {errors.password}
            </p>
          )}
        </div>

        {/* Password Strength Indicator */}
        {formData.password && (
          <div style={{ marginBottom: '20px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '6px'
            }}>
              <span style={{
                fontSize: '12px',
                color: 'var(--text-tertiary)'
              }}>
                Password strength
              </span>
              <span style={{
                fontSize: '12px',
                fontWeight: 'var(--font-weight-semibold)',
                color: passwordStrength.color
              }}>
                {passwordStrength.label}
              </span>
            </div>
            <div style={{
              height: '4px',
              background: 'var(--navy-950)',
              borderRadius: 'var(--radius-full)',
              overflow: 'hidden'
            }}>
              <div style={{
                height: '100%',
                width: `${(passwordStrength.strength / 5) * 100}%`,
                background: passwordStrength.color,
                transition: 'var(--transition)'
              }} />
            </div>
          </div>
        )}

        <AuthInput
          label="Confirm Password"
          type={showPassword ? 'text' : 'password'}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Re-enter your password"
          error={errors.confirmPassword}
          required
          autoComplete="new-password"
        />

        {/* Terms Agreement */}
        <div style={{ marginBottom: '28px' }}>
          <label style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            cursor: 'pointer',
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: '1.6'
          }}>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              style={{
                width: '18px',
                height: '18px',
                marginTop: '2px',
                cursor: 'pointer',
                accentColor: 'var(--accent-primary)'
              }}
            />
            <span>
              I agree to the{' '}
              <span
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/terms');
                }}
                style={{
                  color: 'var(--accent-primary)',
                  textDecoration: 'underline'
                }}
              >
                Terms of Service
              </span>
              {' '}and{' '}
              <span
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/privacy');
                }}
                style={{
                  color: 'var(--accent-primary)',
                  textDecoration: 'underline'
                }}
              >
                Privacy Policy
              </span>
            </span>
          </label>
          {errors.agreeToTerms && (
            <p style={{
              fontSize: '13px',
              color: '#EF4444',
              margin: '6px 0 0 26px'
            }}>
              {errors.agreeToTerms}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <AuthButton
          type="submit"
          variant="primary"
          loading={isLoading}
          disabled={isLoading}
        >
          {isLoading ? 'Creating account...' : 'Create Account'}
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
          Already have an account?
        </span>
        <div style={{
          flex: 1,
          height: '1px',
          background: 'var(--border-subtle)'
        }} />
      </div>

      {/* Login Link */}
      <AuthButton
        variant="secondary"
        onClick={() => navigate('/login')}
      >
        Sign in instead
      </AuthButton>
    </AuthLayout>
  );
}

export default RegisterPage;