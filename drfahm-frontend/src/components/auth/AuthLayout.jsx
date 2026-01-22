import React from 'react';
import { useNavigate } from 'react-router-dom';

function AuthLayout({ children, title, subtitle }) {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, var(--navy-950) 0%, var(--navy-900) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px'
    }}>
      {/* Back to Home Link */}
      <div style={{
        position: 'absolute',
        top: '32px',
        left: '32px'
      }}>
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-tertiary)',
            fontSize: '15px',
            fontWeight: 'var(--font-weight-medium)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            borderRadius: 'var(--radius-md)',
            transition: 'var(--transition)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.color = 'var(--text-primary)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--text-tertiary)';
          }}
        >
          <span>←</span>
          <span>Back to Home</span>
        </button>
      </div>

      {/* Auth Card */}
      <div style={{
        width: '100%',
        maxWidth: '480px',
        background: 'var(--navy-900)',
        border: '1px solid var(--border-medium)',
        borderRadius: 'var(--radius-xl)',
        padding: '48px',
        boxShadow: 'var(--shadow-2xl)'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <div 
            onClick={() => navigate('/')}
            style={{ 
              cursor: 'pointer',
              marginBottom: '24px'
            }}
          >
            <h1 style={{
              fontSize: '32px',
              fontWeight: 'var(--font-weight-black)',
              color: 'var(--text-primary)',
              margin: '0 0 8px 0'
            }}>
              Dr Fahm
            </h1>
            <p style={{
              fontSize: '13px',
              color: 'var(--text-tertiary)',
              margin: 0,
              letterSpacing: '0.3px'
            }}>
              National Assessment & Readiness Platform
            </p>
          </div>

          {title && (
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              margin: '32px 0 8px 0'
            }}>
              {title}
            </h2>
          )}
          
          {subtitle && (
            <p style={{
              fontSize: '15px',
              color: 'var(--text-tertiary)',
              margin: 0
            }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Content */}
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;