import React from 'react';

function AuthButton({ 
  type = 'button',
  onClick,
  children,
  variant = 'primary', // 'primary' or 'secondary'
  disabled = false,
  loading = false,
  fullWidth = true
}) {
  const isPrimary = variant === 'primary';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      style={{
        width: fullWidth ? '100%' : 'auto',
        padding: isPrimary ? '16px' : '14px',
        background: loading || disabled 
          ? 'var(--slate-700)' 
          : isPrimary 
            ? 'var(--accent-primary)' 
            : 'transparent',
        border: isPrimary ? 'none' : '1.5px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        color: isPrimary ? '#FFFFFF' : 'var(--text-primary)',
        fontSize: isPrimary ? '16px' : '15px',
        fontWeight: 'var(--font-weight-semibold)',
        cursor: loading || disabled ? 'not-allowed' : 'pointer',
        transition: 'var(--transition)',
        opacity: loading || disabled ? 0.6 : 1
      }}
      onMouseOver={(e) => {
        if (!loading && !disabled) {
          if (isPrimary) {
            e.currentTarget.style.background = 'var(--accent-hover)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          } else {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.borderColor = 'var(--border-medium)';
          }
        }
      }}
      onMouseOut={(e) => {
        if (!loading && !disabled) {
          if (isPrimary) {
            e.currentTarget.style.background = 'var(--accent-primary)';
            e.currentTarget.style.transform = 'translateY(0)';
          } else {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'var(--border)';
          }
        }
      }}
    >
      {children}
    </button>
  );
}

export default AuthButton;