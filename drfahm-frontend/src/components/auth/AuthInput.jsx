import React from 'react';

function AuthInput({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder, 
  error, 
  required = false,
  autoComplete,
  minLength,
  maxLength,
  disabled = false
}) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{
        display: 'block',
        marginBottom: '8px',
        color: 'var(--text-primary)',
        fontSize: '14px',
        fontWeight: 'var(--font-weight-semibold)'
      }}>
        {label} {required && <span style={{ color: '#EF4444' }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
        style={{
          width: '100%',
          padding: '14px 16px',
          background: disabled ? 'var(--slate-800)' : 'var(--navy-950)',
          border: `1.5px solid ${error ? '#EF4444' : 'var(--border)'}`,
          borderRadius: 'var(--radius-md)',
          color: disabled ? 'var(--text-tertiary)' : 'var(--text-primary)',
          fontSize: '15px',
          fontFamily: 'inherit',
          transition: 'var(--transition)',
          outline: 'none',
          cursor: disabled ? 'not-allowed' : 'text'
        }}
        onFocus={(e) => {
          if (!error && !disabled) {
            e.target.style.borderColor = 'var(--accent-primary)';
          }
        }}
        onBlur={(e) => {
          if (!error) {
            e.target.style.borderColor = 'var(--border)';
          }
        }}
      />
      {error && (
        <p style={{
          fontSize: '13px',
          color: '#EF4444',
          margin: '6px 0 0 0'
        }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default AuthInput;