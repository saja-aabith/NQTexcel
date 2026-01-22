import React from 'react';
import { useNavigate } from 'react-router-dom';
import './marketing.css';

function SchoolsPage() {
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
            <button onClick={() => navigate('/start')} className="btn-nav-secondary">
              For Students & Parents
            </button>
            <button onClick={() => navigate('/login')} className="btn-nav-primary">
              Login / Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero - System Problem */}
      <section className="page-hero" style={{ textAlign: 'center' }}>
        <div className="content-container-narrow">
          <div style={{ 
            display: 'inline-block',
            padding: '8px 16px',
            background: 'rgba(79, 70, 229, 0.1)',
            border: '1px solid rgba(79, 70, 229, 0.3)',
            borderRadius: '999px',
            fontSize: '13px',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--accent-primary)',
            marginBottom: '24px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            For Schools & Organizations
          </div>

          <h1 className="page-title">
            When readiness becomes visible, systems matter.
          </h1>
          
          <p className="page-subtitle">
            Consistent preparation across cohorts, not individual effort alone.
          </p>

          <p className="page-body">
            As national assessments like NAFS increase visibility into readiness, schools face growing 
            pressure from parents, leadership, and policymakers to demonstrate progress. Preparation 
            can no longer rely on students acting independently. It needs to be systematic.
          </p>

          <div className="hero-ctas">
            <button 
              onClick={() => window.location.href = 'mailto:schools@drfahm.com?subject=School Pilot Enquiry'} 
              className="btn-cta-primary"
            >
              <span>Request a Pilot</span>
              <span className="btn-microcopy">Talk to our schools team</span>
            </button>
          </div>
        </div>
      </section>

      {/* Why Schools Are Being Asked */}
      <section className="content-section">
        <div className="content-container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            Why schools are being asked
          </h2>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            <div className="feature-block">
              <div style={{ 
                fontSize: '32px',
                marginBottom: '16px'
              }}>👨‍👩‍👧‍👦</div>
              <h3>Parent pressure</h3>
              <p>
                Parents expect schools to prepare students systematically for Qudurat, Tahsili, 
                and NAFS — not leave it to individual family responsibility.
              </p>
            </div>

            <div className="feature-block">
              <div style={{ 
                fontSize: '32px',
                marginBottom: '16px'
              }}>📊</div>
              <h3>NAFS direction</h3>
              <p>
                National benchmarking measures readiness earlier and more transparently. 
                Schools need consistent systems to demonstrate progress over time.
              </p>
            </div>

            <div className="feature-block">
              <div style={{ 
                fontSize: '32px',
                marginBottom: '16px'
              }}>🎯</div>
              <h3>Accountability shift</h3>
              <p>
                Readiness is no longer just a student responsibility. Schools are increasingly 
                held accountable for preparing cohorts effectively.
              </p>
            </div>
          </div>

          <div style={{ 
            background: 'rgba(79, 70, 229, 0.08)',
            border: '1px solid rgba(79, 70, 229, 0.2)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            marginTop: '40px',
            textAlign: 'center'
          }}>
            <p className="section-body" style={{ margin: 0, fontSize: '17px' }}>
              Readiness has become a conversation schools are expected to lead, not avoid.
            </p>
          </div>
        </div>
      </section>

      {/* Cohort-Level Solution */}
      <section className="content-section bg-slate">
        <div className="content-container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            A cohort-level solution
          </h2>

          <div className="content-container-narrow">
            <p className="section-body" style={{ 
              textAlign: 'center', 
              fontSize: '18px',
              color: 'var(--text-secondary)',
              marginBottom: '48px'
            }}>
              Dr Fahm helps schools implement a consistent readiness framework across year groups 
              — from diagnostics to reporting — without adding significant operational burden.
            </p>

            <div className="steps-vertical">
              <div className="step-simple">
                <div className="step-number-small">1</div>
                <div className="step-content">
                  <h3>Cohort diagnostics</h3>
                  <p>
                    Diagnostic assessments run at cohort level to identify strengths, gaps, and 
                    readiness patterns across all students — not just those who seek help individually.
                  </p>
                </div>
              </div>

              <div className="step-simple">
                <div className="step-number-small">2</div>
                <div className="step-content">
                  <h3>Centralized dashboards</h3>
                  <p>
                    Leadership gains visibility into cohort-level readiness, progress over time, 
                    and areas requiring intervention — with reporting suitable for internal 
                    discussions and parent communication.
                  </p>
                </div>
              </div>

              <div className="step-simple">
                <div className="step-number-small">3</div>
                <div className="step-content">
                  <h3>Structured preparation pathways</h3>
                  <p>
                    Students follow personalized pathways aligned to diagnostic results. 
                    Schools ensure consistency without micromanaging individual practice.
                  </p>
                </div>
              </div>

              <div className="step-simple">
                <div className="step-number-small">4</div>
                <div className="step-content">
                  <h3>Parent-facing reporting</h3>
                  <p>
                    Parents receive readiness updates through the platform. Schools demonstrate 
                    transparency and reduce ad-hoc parent enquiries about preparation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Schools Gain */}
      <section className="content-section">
        <div className="content-container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            What schools gain
          </h2>

          <div className="two-col-grid">
            <div className="feature-block">
              <h3>Systematic preparation</h3>
              <p>
                Replace inconsistent, student-led preparation with a structured, school-managed 
                framework aligned to national assessments.
              </p>
            </div>

            <div className="feature-block">
              <h3>Reduced escalation</h3>
              <p>
                Early visibility and consistent communication reduce last-minute parent escalation 
                when results don't meet expectations.
              </p>
            </div>

            <div className="feature-block">
              <h3>Accountability alignment</h3>
              <p>
                Demonstrate to leadership, parents, and regulators that readiness is being managed 
                proactively, not reactively.
              </p>
            </div>

            <div className="feature-block">
              <h3>Minimal operational burden</h3>
              <p>
                Platform-based delivery minimizes teacher workload. Schools manage oversight 
                and reporting, not daily implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Model */}
      <section className="content-section bg-slate">
        <div className="content-container-narrow">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            Implementation model
          </h2>

          <div style={{ 
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px',
            marginBottom: '32px'
          }}>
            <h3 style={{ 
              fontSize: '22px',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: '16px'
            }}>
              Pilot first
            </h3>
            <p style={{ 
              fontSize: '16px',
              color: 'var(--text-tertiary)',
              lineHeight: '1.6',
              margin: 0
            }}>
              We recommend starting with a single year group or section. This allows schools to 
              validate fit, measure impact, and refine processes before scaling across cohorts.
            </p>
          </div>

          <div style={{ 
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px',
            marginBottom: '32px'
          }}>
            <h3 style={{ 
              fontSize: '22px',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: '16px'
            }}>
              Low operational burden
            </h3>
            <p style={{ 
              fontSize: '16px',
              color: 'var(--text-tertiary)',
              lineHeight: '1.6',
              margin: 0
            }}>
              Implementation does not require new teacher training, curriculum redesign, or 
              significant IT infrastructure. Students access the platform independently. 
              Schools manage oversight only.
            </p>
          </div>

          <div style={{ 
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px'
          }}>
            <h3 style={{ 
              fontSize: '22px',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: '16px'
            }}>
              Supported rollout
            </h3>
            <p style={{ 
              fontSize: '16px',
              color: 'var(--text-tertiary)',
              lineHeight: '1.6',
              margin: 0
            }}>
              Our schools team provides onboarding support, training for key stakeholders, 
              and ongoing technical assistance. Implementation is guided, not self-service.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="content-section">
        <div className="content-container-narrow text-content">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>
            Who this is for
          </h2>

          <p className="section-body" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Dr Fahm for Schools is designed for educational institutions that recognize readiness 
            preparation can no longer be left to individual students and families.
          </p>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '20px',
            marginTop: '40px'
          }}>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px'
            }}>
              <p style={{ 
                fontSize: '16px',
                color: 'var(--text-tertiary)',
                margin: 0,
                lineHeight: '1.6'
              }}>
                <strong style={{ color: 'var(--text-primary)' }}>Private schools</strong> seeking 
                to differentiate on readiness outcomes and systematic preparation.
              </p>
            </div>

            <div style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px'
            }}>
              <p style={{ 
                fontSize: '16px',
                color: 'var(--text-tertiary)',
                margin: 0,
                lineHeight: '1.6'
              }}>
                <strong style={{ color: 'var(--text-primary)' }}>Public schools</strong> navigating 
                NAFS implementation and needing cohort-level visibility.
              </p>
            </div>

            <div style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px'
            }}>
              <p style={{ 
                fontSize: '16px',
                color: 'var(--text-tertiary)',
                margin: 0,
                lineHeight: '1.6'
              }}>
                <strong style={{ color: 'var(--text-primary)' }}>School groups & districts</strong> requiring 
                standardized readiness frameworks across multiple sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="content-section bg-slate">
        <div className="content-container-narrow text-content">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>
            Pricing model
          </h2>

          <p className="section-body" style={{ 
            textAlign: 'center',
            fontSize: '18px',
            color: 'var(--text-secondary)' 
          }}>
            Pricing is cohort-based and scales with school size. We recommend starting with 
            a pilot to validate value before committing to full implementation.
          </p>

          <div style={{ 
            background: 'rgba(79, 70, 229, 0.08)',
            border: '1px solid rgba(79, 70, 229, 0.2)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px',
            marginTop: '40px',
            textAlign: 'center'
          }}>
            <p style={{ 
              fontSize: '17px',
              color: 'var(--text-secondary)',
              margin: 0
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>Contact required:</strong> School 
              pricing depends on cohort size, year groups, and implementation scope.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="content-container-narrow">
          <h2 className="cta-title">
            Ready to pilot Dr Fahm for your school?
          </h2>
          
          <p className="cta-body">
            Talk to our schools team about implementation, cohort sizing, and pilot options. 
            We'll help determine if Dr Fahm is the right fit for your institution.
          </p>

          <button 
            onClick={() => window.location.href = 'mailto:schools@drfahm.com?subject=School Pilot Enquiry'} 
            className="btn-final-large"
          >
            <span>Request a Pilot</span>
            <span className="btn-microcopy-inline">Talk to schools team</span>
          </button>

          <div style={{ marginTop: '24px' }}>
            <button 
              onClick={() => navigate('/contact')} 
              className="btn-cta-secondary-text"
            >
              General enquiries →
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

export default SchoolsPage;