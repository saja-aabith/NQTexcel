import React from 'react';
import { useNavigate } from 'react-router-dom';
import './marketing.css';

function AboutPage() {
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

      {/* Hero */}
      <section className="page-hero" style={{ textAlign: 'center' }}>
        <div className="content-container-narrow">
          <h1 className="page-title">
            About Dr Fahm
          </h1>
          
          <p className="page-subtitle">
            A diagnostic-led platform for national assessment readiness.
          </p>

          <p className="page-body">
            Dr Fahm exists to bring clarity to assessment preparation in Saudi Arabia. 
            We believe readiness should be measured before effort is expended — not discovered 
            after results arrive.
          </p>
        </div>
      </section>

      {/* Why Dr Fahm Exists */}
      <section className="content-section">
        <div className="content-container-narrow text-content">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>
            Why Dr Fahm exists
          </h2>

          <p className="section-body" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            For years, students in Saudi Arabia prepared for Qudurat and Tahsili by practicing 
            large volumes of questions, often without understanding whether that practice was 
            addressing actual gaps.
          </p>

          <p className="section-body" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Results arrived. Some students did well. Others didn't. The question "was I ready?" 
            was only answered after the exam — when it was too late to act.
          </p>

          <p className="section-body" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            With the introduction of NAFS and the shift toward national benchmarking, this approach 
            is no longer sufficient. Readiness needs to be understood early, tracked over time, and 
            acted on systematically.
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
              <strong style={{ color: 'var(--text-primary)' }}>Dr Fahm's purpose:</strong> Move clarity 
              forward. Make readiness visible before it becomes urgent.
            </p>
          </div>
        </div>
      </section>

      {/* Readiness Philosophy */}
      <section className="content-section bg-slate">
        <div className="content-container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            Our approach to readiness
          </h2>

          <div className="content-container-narrow">
            <div className="steps-vertical">
              <div className="step-simple">
                <div className="step-number-small">1</div>
                <div className="step-content">
                  <h3>Diagnostics before practice</h3>
                  <p>
                    We don't begin with practice questions. We begin with assessment. Understanding 
                    where readiness stands allows preparation to be focused, not scattered.
                  </p>
                </div>
              </div>

              <div className="step-simple">
                <div className="step-number-small">2</div>
                <div className="step-content">
                  <h3>Personalized, not generic</h3>
                  <p>
                    Every student starts from a different baseline. Pathways adapt to diagnostic 
                    results rather than assuming all students need the same preparation.
                  </p>
                </div>
              </div>

              <div className="step-simple">
                <div className="step-number-small">3</div>
                <div className="step-content">
                  <h3>Readiness, not rankings</h3>
                  <p>
                    Dr Fahm measures progress against readiness baselines, not against other students. 
                    No public leaderboards. No performance pressure. Just clarity.
                  </p>
                </div>
              </div>

              <div className="step-simple">
                <div className="step-number-small">4</div>
                <div className="step-content">
                  <h3>Gradual improvement</h3>
                  <p>
                    Readiness doesn't improve overnight. Dr Fahm tracks progress over time and 
                    adjusts pathways as understanding develops.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saudi Context */}
      <section className="content-section">
        <div className="content-container-narrow text-content">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>
            Built for the Saudi context
          </h2>

          <p className="section-body" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Dr Fahm is designed specifically for Saudi Arabia's national assessments — Qudurat, 
            Tahsili, and NAFS. These assessments are not generic aptitude tests. They measure 
            readiness within a specific educational and cultural context.
          </p>

          <p className="section-body" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Dr Fahm aligns to that context. Our diagnostics, pathways, and practice are built 
            around what these assessments measure, how they're structured, and what readiness 
            looks like within the Saudi education system.
          </p>

          <div style={{ 
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px',
            marginTop: '40px'
          }}>
            <p className="section-body" style={{ 
              margin: 0, 
              fontSize: '17px',
              textAlign: 'center'
            }}>
              We don't import generic test prep models. We build for the assessments that 
              matter in Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* What We're Not */}
      <section className="content-section bg-slate">
        <div className="content-container-narrow">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            What Dr Fahm is not
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
                fontSize: '20px',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                Not a question bank
              </h3>
              <p style={{ 
                fontSize: '16px',
                color: 'var(--text-tertiary)',
                margin: 0,
                lineHeight: '1.6'
              }}>
                We don't just give you thousands of questions and hope volume translates to readiness. 
                Practice follows diagnostics and adapts to what you need.
              </p>
            </div>

            <div style={{ 
              background: 'var(--glass-bg)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px'
            }}>
              <h3 style={{ 
                fontSize: '20px',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                Not a tutoring center
              </h3>
              <p style={{ 
                fontSize: '16px',
                color: 'var(--text-tertiary)',
                margin: 0,
                lineHeight: '1.6'
              }}>
                Dr Fahm is a platform, not a service. We provide diagnostics, pathways, and practice — 
                not one-on-one tutoring or live instruction.
              </p>
            </div>

            <div style={{ 
              background: 'var(--glass-bg)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px'
            }}>
              <h3 style={{ 
                fontSize: '20px',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                Not gamified for engagement
              </h3>
              <p style={{ 
                fontSize: '16px',
                color: 'var(--text-tertiary)',
                margin: 0,
                lineHeight: '1.6'
              }}>
                We don't use streaks, badges, or points to keep users engaged. Readiness is serious. 
                The interface reflects that.
              </p>
            </div>

            <div style={{ 
              background: 'var(--glass-bg)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px'
            }}>
              <h3 style={{ 
                fontSize: '20px',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                Not focused on rankings
              </h3>
              <p style={{ 
                fontSize: '16px',
                color: 'var(--text-tertiary)',
                margin: 0,
                lineHeight: '1.6'
              }}>
                There are no leaderboards, no public scores, no comparison with others. Progress 
                is measured against your own readiness, not against peers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Dr Fahm Is For */}
      <section className="content-section">
        <div className="content-container-narrow text-content">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>
            Who Dr Fahm is for
          </h2>

          <p className="section-body" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Dr Fahm is for anyone seeking clarity on national assessment readiness:
          </p>

          <ul className="check-list" style={{ fontSize: '17px', marginTop: '32px' }}>
            <li>Students who are practicing but unsure if effort is translating to readiness</li>
            <li>Parents who want visibility into where their child stands before results arrive</li>
            <li>Schools managing cohort-level preparation for Qudurat, Tahsili, and NAFS</li>
            <li>Families navigating NAFS and seeking early clarity on foundational skills</li>
            <li>Students preparing independently without access to expensive tutoring</li>
          </ul>

          <p className="section-body" style={{ 
            fontSize: '18px', 
            color: 'var(--text-secondary)',
            marginTop: '32px'
          }}>
            If you need clarity before results, Dr Fahm is for you.
          </p>
        </div>
      </section>

      {/* Approach to Assessment */}
      <section className="content-section bg-slate">
        <div className="content-container-narrow text-content">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>
            Our approach to assessment
          </h2>

          <p className="section-body" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Dr Fahm doesn't "teach to the test." We build foundational understanding that transfers 
            to any assessment format or question type.
          </p>

          <p className="section-body" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Our diagnostics measure reasoning, understanding, and application — not memorization 
            of specific question patterns. This ensures that readiness is genuine, not surface-level.
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
              fontSize: '17px',
              textAlign: 'center'
            }}>
              We prepare students for assessments by building the skills assessments measure, 
              not by gaming the format.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="content-container-narrow">
          <h2 className="cta-title">
            Experience the Dr Fahm approach.
          </h2>
          
          <p className="cta-body">
            Start with a diagnostic assessment and see how readiness clarity changes preparation.
          </p>

          <button 
            onClick={() => navigate('/start')} 
            className="btn-final-large"
          >
            <span>Start Free Trial</span>
            <span className="btn-microcopy-inline">No payment required</span>
          </button>

          <div style={{ marginTop: '24px' }}>
            <button 
              onClick={() => navigate('/how-it-works')} 
              className="btn-cta-secondary-text"
            >
              How it works →
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

export default AboutPage;