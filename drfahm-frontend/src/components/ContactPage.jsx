import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './marketing.css';

function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="marketing-page">
      {/* Navigation */}
      <nav className="nav-institutional">
        <div className="nav-container">
          <div className="nav-brand" onClick={() => navigate('/')}>
            <h1>Dr Fahm</h1>
            <span className="nav-subtitle">National Assessment & Readiness Platform</span>
          </div>
          
          <div className="nav-actions">
            <button onClick={() => navigate('/schools')} className="btn-nav-secondary">
              For Schools
            </button>
            <button onClick={() => navigate('/login')} className="btn-nav-primary">
              Login / Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="page-hero" style={{ textAlign: 'center' }}>
        <div className="content-container-narrow">
          <h1 className="page-title">
            Get in touch
          </h1>
          
          <p className="page-subtitle">
            We're here to help with questions about Dr Fahm, diagnostics, and readiness preparation.
          </p>

          <p className="page-body">
            Whether you're a parent, student, or school, reach out and we'll respond typically 
            within 24 hours.
          </p>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="content-section">
        <div className="content-container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            Quick contact options
          </h2>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            <div className="feature-block">
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>👨‍👩‍👧‍👦</div>
              <h3>General Enquiries</h3>
              <p style={{ marginBottom: '16px' }}>
                Questions about the platform, diagnostics, pricing, or how Dr Fahm works.
              </p>
              <a 
                href="mailto:info@drfahm.com"
                style={{ 
                  color: 'var(--accent-primary)',
                  textDecoration: 'none',
                  fontWeight: 'var(--font-weight-semibold)'
                }}
              >
                info@drfahm.com →
              </a>
            </div>

            <div className="feature-block">
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🏫</div>
              <h3>Schools & Organizations</h3>
              <p style={{ marginBottom: '16px' }}>
                Pilot enquiries, cohort pricing, implementation support, and school-specific questions.
              </p>
              <a 
                href="mailto:schools@drfahm.com"
                style={{ 
                  color: 'var(--accent-primary)',
                  textDecoration: 'none',
                  fontWeight: 'var(--font-weight-semibold)'
                }}
              >
                schools@drfahm.com →
              </a>
            </div>

            <div className="feature-block">
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🛠️</div>
              <h3>Technical Support</h3>
              <p style={{ marginBottom: '16px' }}>
                Account issues, login problems, technical errors, or platform bugs.
              </p>
              <a 
                href="mailto:support@drfahm.com"
                style={{ 
                  color: 'var(--accent-primary)',
                  textDecoration: 'none',
                  fontWeight: 'var(--font-weight-semibold)'
                }}
              >
                support@drfahm.com →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="content-section bg-slate">
        <div className="content-container-narrow">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            Send us a message
          </h2>

          {submitted && (
            <div style={{ 
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: 'var(--radius-lg)',
              padding: '16px 24px',
              marginBottom: '32px',
              textAlign: 'center',
              color: 'var(--readiness-green)',
              fontWeight: 'var(--font-weight-semibold)'
            }}>
              ✓ Message sent! We'll respond within 24 hours.
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ 
            background: 'var(--navy-800)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px'
          }}>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block',
                marginBottom: '8px',
                color: 'var(--text-primary)',
                fontSize: '14px',
                fontWeight: 'var(--font-weight-semibold)'
              }}>
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ 
                  width: '100%',
                  padding: '14px 16px',
                  background: 'var(--navy-900)',
                  border: '1.5px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: '15px',
                  fontFamily: 'inherit',
                  transition: 'var(--transition)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--accent-primary)';
                  e.target.style.outline = 'none';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border)';
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block',
                marginBottom: '8px',
                color: 'var(--text-primary)',
                fontSize: '14px',
                fontWeight: 'var(--font-weight-semibold)'
              }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ 
                  width: '100%',
                  padding: '14px 16px',
                  background: 'var(--navy-900)',
                  border: '1.5px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: '15px',
                  fontFamily: 'inherit',
                  transition: 'var(--transition)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--accent-primary)';
                  e.target.style.outline = 'none';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border)';
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block',
                marginBottom: '8px',
                color: 'var(--text-primary)',
                fontSize: '14px',
                fontWeight: 'var(--font-weight-semibold)'
              }}>
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                style={{ 
                  width: '100%',
                  padding: '14px 16px',
                  background: 'var(--navy-900)',
                  border: '1.5px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: '15px',
                  fontFamily: 'inherit',
                  cursor: 'pointer'
                }}
              >
                <option value="general">General Enquiry</option>
                <option value="school">School / Organization</option>
                <option value="support">Technical Support</option>
                <option value="feedback">Feedback</option>
                <option value="partnership">Partnership Opportunity</option>
              </select>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block',
                marginBottom: '8px',
                color: 'var(--text-primary)',
                fontSize: '14px',
                fontWeight: 'var(--font-weight-semibold)'
              }}>
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{ 
                  width: '100%',
                  padding: '14px 16px',
                  background: 'var(--navy-900)',
                  border: '1.5px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: '15px',
                  fontFamily: 'inherit',
                  transition: 'var(--transition)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--accent-primary)';
                  e.target.style.outline = 'none';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border)';
                }}
              />
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{ 
                display: 'block',
                marginBottom: '8px',
                color: 'var(--text-primary)',
                fontSize: '14px',
                fontWeight: 'var(--font-weight-semibold)'
              }}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                style={{ 
                  width: '100%',
                  padding: '14px 16px',
                  background: 'var(--navy-900)',
                  border: '1.5px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: '15px',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  transition: 'var(--transition)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--accent-primary)';
                  e.target.style.outline = 'none';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border)';
                }}
              />
            </div>

            <button 
              type="submit"
              className="btn-cta-primary"
              style={{ width: '100%' }}
            >
              Send Message
            </button>

            <p style={{ 
              fontSize: '13px',
              color: 'var(--text-tertiary)',
              textAlign: 'center',
              margin: '16px 0 0 0'
            }}>
              We typically respond within 24 hours during business days.
            </p>
          </form>
        </div>
      </section>

      {/* Response Expectations */}
      <section className="content-section">
        <div className="content-container-narrow text-content">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>
            What to expect
          </h2>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '20px'
          }}>
            <div style={{ 
              background: 'var(--glass-bg)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px'
            }}>
              <h3 style={{ 
                fontSize: '18px',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                Response time
              </h3>
              <p style={{ 
                fontSize: '16px',
                color: 'var(--text-tertiary)',
                margin: 0,
                lineHeight: '1.6'
              }}>
                General enquiries: Within 24 hours during business days (Sunday-Thursday).
                School enquiries: Within 48 hours. Technical support: Within 12 hours for urgent issues.
              </p>
            </div>

            <div style={{ 
              background: 'var(--glass-bg)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px'
            }}>
              <h3 style={{ 
                fontSize: '18px',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                What we need
              </h3>
              <p style={{ 
                fontSize: '16px',
                color: 'var(--text-tertiary)',
                margin: 0,
                lineHeight: '1.6'
              }}>
                To help you quickly, please include: your account email (if applicable), specific 
                details about your question or issue, and any error messages you've encountered.
              </p>
            </div>

            <div style={{ 
              background: 'var(--glass-bg)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px'
            }}>
              <h3 style={{ 
                fontSize: '18px',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                Before you contact us
              </h3>
              <p style={{ 
                fontSize: '16px',
                color: 'var(--text-tertiary)',
                margin: 0,
                lineHeight: '1.6'
              }}>
                Check our <span 
                  onClick={() => navigate('/faq')}
                  style={{ 
                    color: 'var(--accent-primary)', 
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  FAQ page
                </span> first. Many common questions are answered there. For account issues, 
                try logging out and back in, or resetting your password.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours (Optional) */}
      <section className="content-section bg-slate">
        <div className="content-container-narrow text-content">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>
            Support hours
          </h2>

          <p className="section-body" style={{ 
            fontSize: '18px', 
            color: 'var(--text-secondary)',
            textAlign: 'center' 
          }}>
            Our support team operates during Saudi Arabian business hours:
          </p>

          <div style={{ 
            background: 'var(--navy-800)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px',
            marginTop: '32px',
            textAlign: 'center'
          }}>
            <p style={{ 
              fontSize: '20px',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              margin: '0 0 12px 0'
            }}>
              Sunday – Thursday
            </p>
            <p style={{ 
              fontSize: '18px',
              color: 'var(--text-tertiary)',
              margin: 0
            }}>
              9:00 AM – 6:00 PM (Riyadh Time)
            </p>
          </div>

          <p className="section-body" style={{ 
            fontSize: '15px', 
            color: 'var(--text-tertiary)',
            textAlign: 'center',
            marginTop: '24px'
          }}>
            Messages received outside business hours will be responded to on the next business day.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="content-container-narrow">
          <h2 className="cta-title">
            Ready to start?
          </h2>
          
          <p className="cta-body">
            Don't wait for answers. Experience Dr Fahm through the diagnostic and see how 
            readiness clarity works.
          </p>

          <button 
            onClick={() => navigate('/start')} 
            className="btn-final-large"
          >
            <span>Start Free Trial</span>
            <span className="btn-microcopy-inline">No payment required</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-institutional">
        <div className="footer-container">
          <div className="footer-simple">
            <div className="footer-brand">
              <h3>Dr Fahm</h3>
              <p>National Assessment & Readiness Platform</p>
            </div>

            <nav className="footer-links-inline">
              <a href="#qudurat" onClick={() => navigate('/qudurat')}>Qudurat</a>
              <a href="#tahsili" onClick={() => navigate('/tahsili')}>Tahsili</a>
              <a href="#nafs" onClick={() => navigate('/nafs')}>NAFS</a>
              <a href="#schools" onClick={() => navigate('/schools')}>For Schools</a>
              <a href="#about" onClick={() => navigate('/about')}>About</a>
              <a href="#contact" onClick={() => navigate('/contact')}>Contact</a>
            </nav>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Dr Fahm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;