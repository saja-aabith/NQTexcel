import React from 'react';
import { useNavigate } from 'react-router-dom';
import './marketing.css';

function PricingPage() {
  const navigate = useNavigate();

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

      {/* Hero - Pricing Philosophy */}
      <section className="page-hero" style={{ textAlign: 'center' }}>
        <div className="content-container-narrow">
          <h1 className="page-title">
            Clear pricing. No lock-in.
          </h1>
          
          <p className="page-subtitle">
            Try the platform first. Decide if it's right for you. Subscribe only when you're certain.
          </p>

          <p className="page-body">
            Dr Fahm operates on a simple principle: clarity before commitment. You shouldn't pay 
            for something until you've confirmed it works for you.
          </p>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="content-section">
        <div className="content-container-narrow text-content">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>
            Our pricing philosophy
          </h2>

          <p className="section-body" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Most platforms ask for payment upfront. We don't. You should experience the diagnostic, 
            see how the system works, and confirm value before deciding whether to subscribe.
          </p>

          <p className="section-body" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            This means our pricing is simple, transparent, and built around what users actually need — 
            not what maximizes revenue.
          </p>

          <div style={{ 
            background: 'rgba(79, 70, 229, 0.08)',
            border: '1px solid rgba(79, 70, 229, 0.2)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px',
            marginTop: '40px'
          }}>
            <p className="section-body" style={{ 
              margin: 0, 
              fontSize: '18px',
              color: 'var(--text-secondary)',
              textAlign: 'center'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>Trial first, always.</strong> No payment 
              details required. No automatic charges. No pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Access */}
      <section className="content-section bg-slate">
        <div className="content-container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            Individual access
          </h2>

          <div style={{ 
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div style={{ 
              background: 'var(--navy-800)',
              border: '2px solid var(--accent-primary)',
              borderRadius: 'var(--radius-xl)',
              padding: '48px',
              boxShadow: 'var(--shadow-xl)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <div style={{ 
                  display: 'inline-block',
                  padding: '8px 16px',
                  background: 'rgba(79, 70, 229, 0.1)',
                  border: '1px solid rgba(79, 70, 229, 0.3)',
                  borderRadius: '999px',
                  fontSize: '13px',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--accent-primary)',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  For Students & Parents
                </div>
                <h3 style={{ 
                  fontSize: '42px',
                  fontWeight: 'var(--font-weight-black)',
                  color: 'var(--text-primary)',
                  margin: '0 0 8px 0'
                }}>
                  Free Trial
                </h3>
                <p style={{ 
                  fontSize: '18px',
                  color: 'var(--text-tertiary)',
                  margin: 0
                }}>
                  Then SAR 99/month
                </p>
              </div>

              <div style={{ 
                borderTop: '1px solid var(--border-subtle)',
                borderBottom: '1px solid var(--border-subtle)',
                padding: '32px 0',
                margin: '32px 0'
              }}>
                <ul className="check-list" style={{ fontSize: '16px' }}>
                  <li>Full diagnostic assessment</li>
                  <li>Personalized readiness pathway</li>
                  <li>Practice questions for Qudurat, Tahsili, NAFS</li>
                  <li>Progress tracking & readiness signals</li>
                  <li>Private profile (no public rankings)</li>
                  <li>Mobile & desktop access</li>
                  <li>Cancel anytime, no lock-in</li>
                </ul>
              </div>

              <button 
                onClick={() => navigate('/start')} 
                className="btn-cta-primary"
                style={{ width: '100%' }}
              >
                <span>Start Free Trial</span>
                <span className="btn-microcopy">No payment details required</span>
              </button>

              <p style={{ 
                fontSize: '13px',
                color: 'var(--text-tertiary)',
                textAlign: 'center',
                margin: '16px 0 0 0'
              }}>
                After trial, you'll be prompted to subscribe. No automatic charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="content-section">
        <div className="content-container-narrow">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            What's included
          </h2>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '20px'
          }}>
            <div className="feature-block">
              <h3>Diagnostic-first approach</h3>
              <p>
                Every subscription includes a comprehensive diagnostic assessment to identify 
                strengths, gaps, and readiness baselines before practice begins.
              </p>
            </div>

            <div className="feature-block">
              <h3>Personalized pathways</h3>
              <p>
                Preparation adapts to diagnostic results. You practice what matters most for 
                your readiness, not random questions.
              </p>
            </div>

            <div className="feature-block">
              <h3>Multi-assessment coverage</h3>
              <p>
                Access to Qudurat (verbal & quantitative), Tahsili (all subjects), and NAFS 
                (foundational skills) — all in one platform.
              </p>
            </div>

            <div className="feature-block">
              <h3>Progress visibility</h3>
              <p>
                Track readiness over time with clear signals, not just scores. Understand 
                whether effort is translating to improvement.
              </p>
            </div>

            <div className="feature-block">
              <h3>Privacy by default</h3>
              <p>
                No public leaderboards. No comparison with others. Your readiness data stays 
                private unless you choose to share it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Pricing */}
      <section className="content-section bg-slate">
        <div className="content-container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            Schools & organizations
          </h2>

          <div className="content-container-narrow">
            <div style={{ 
              background: 'var(--navy-800)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-xl)',
              padding: '48px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '24px' }}>🏫</div>
              
              <h3 style={{ 
                fontSize: '32px',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                margin: '0 0 16px 0'
              }}>
                Cohort-based pricing
              </h3>
              
              <p style={{ 
                fontSize: '17px',
                color: 'var(--text-tertiary)',
                marginBottom: '32px',
                lineHeight: '1.6'
              }}>
                Schools and organizations receive cohort-level access with dashboards, 
                reporting, and implementation support. Pricing scales with cohort size.
              </p>

              <ul className="check-list" style={{ 
                textAlign: 'left',
                maxWidth: '480px',
                margin: '0 auto 40px'
              }}>
                <li>Diagnostic assessments for all students</li>
                <li>Centralized cohort dashboards</li>
                <li>Progress tracking & reporting</li>
                <li>Parent-facing visibility</li>
                <li>Implementation & training support</li>
                <li>Pilot options available</li>
              </ul>

              <button 
                onClick={() => window.location.href = 'mailto:schools@drfahm.com?subject=School Pricing Enquiry'} 
                className="btn-cta-primary"
              >
                <span>Contact Schools Team</span>
                <span className="btn-microcopy">Discuss cohort pricing</span>
              </button>

              <p style={{ 
                fontSize: '13px',
                color: 'var(--text-tertiary)',
                margin: '16px 0 0 0'
              }}>
                We recommend starting with a pilot cohort to validate value before scaling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="content-section">
        <div className="content-container-narrow">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            Pricing questions
          </h2>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px'
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
                How long is the free trial?
              </h3>
              <p style={{ 
                fontSize: '16px',
                color: 'var(--text-tertiary)',
                margin: 0,
                lineHeight: '1.6'
              }}>
                The trial includes the full diagnostic assessment and initial pathway generation. 
                You can explore the platform and confirm value before subscribing. There's no 
                time limit on the trial.
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
                Do I need to provide payment details for the trial?
              </h3>
              <p style={{ 
                fontSize: '16px',
                color: 'var(--text-tertiary)',
                margin: 0,
                lineHeight: '1.6'
              }}>
                No. You can complete the diagnostic and explore the platform without providing 
                any payment information. You'll only be asked to subscribe when you decide to 
                continue.
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
                Can I cancel anytime?
              </h3>
              <p style={{ 
                fontSize: '16px',
                color: 'var(--text-tertiary)',
                margin: 0,
                lineHeight: '1.6'
              }}>
                Yes. There are no contracts or lock-in periods. Cancel from your account settings 
                at any time. Your access continues until the end of your current billing period.
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
                What payment methods do you accept?
              </h3>
              <p style={{ 
                fontSize: '16px',
                color: 'var(--text-tertiary)',
                margin: 0,
                lineHeight: '1.6'
              }}>
                We accept all major credit cards (Visa, Mastercard, Amex) and local payment 
                methods common in Saudi Arabia. Payment is processed securely through Stripe.
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
                Is there a discount for annual subscriptions?
              </h3>
              <p style={{ 
                fontSize: '16px',
                color: 'var(--text-tertiary)',
                margin: 0,
                lineHeight: '1.6'
              }}>
                We currently offer monthly subscriptions only. This gives users maximum flexibility 
                to pause or cancel without long-term commitment. Annual options may be introduced 
                based on demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="content-container-narrow">
          <h2 className="cta-title">
            Try Dr Fahm with no commitment.
          </h2>
          
          <p className="cta-body">
            Start with the free trial. Explore diagnostics. Confirm the platform works for you. 
            Subscribe only when you're certain it's right.
          </p>

          <button 
            onClick={() => navigate('/start')} 
            className="btn-final-large"
          >
            <span>Start Free Trial</span>
            <span className="btn-microcopy-inline">No payment details required</span>
          </button>

          <div style={{ marginTop: '24px' }}>
            <button 
              onClick={() => navigate('/schools')} 
              className="btn-cta-secondary-text"
            >
              Schools: Contact us for pricing →
            </button>
          </div>
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

export default PricingPage;