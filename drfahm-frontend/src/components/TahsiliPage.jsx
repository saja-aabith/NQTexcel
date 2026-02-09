import React from 'react';
import { useNavigate } from 'react-router-dom';
import './marketing.css';

function TahsiliPage() {
  const navigate = useNavigate();

  return (
    <div className="marketing-page">
      {/* Navigation */}
      <nav className="nav-institutional">
        <div className="nav-container">
          <div className="nav-brand" onClick={() => navigate('/')}>
            <h1>Dr Fahm</h1>
            <span className="nav-subtitle">The Blueprint for 100%</span>
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

      {/* Hero - Tahsili Reality */}
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
            Tahsili Preparation
          </div>

          <h1 className="page-title">
            Tahsili measures subject knowledge, not rote revision.
          </h1>
          
          <p className="page-subtitle">
            Structured preparation aligned to assessment design, without over-practice.
          </p>

          <p className="page-body">
            Tahsili covers breadth across multiple subjects — chemistry, biology, physics, 
            mathematics, English, and Arabic. Students who practice without prioritization 
            often waste time on low-impact topics while gaps remain in high-frequency areas.
          </p>

          <div className="hero-ctas">
            <button 
              onClick={() => navigate('/start')} 
              className="btn-cta-primary"
            >
              <span>Check Tahsili Readiness</span>
              <span className="btn-microcopy">Free diagnostic · 10 minutes</span>
            </button>

            <button 
              onClick={() => navigate('/how-it-works')} 
              className="btn-cta-secondary-text"
            >
              How diagnostics work →
            </button>
          </div>
        </div>
      </section>

      {/* Common Failure Modes */}
      <section className="content-section">
        <div className="content-container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            Common failure modes
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
              }}>📚</div>
              <h3>Unfocused revision</h3>
              <p>
                Students try to revise "everything," treating all subjects and topics equally. 
                This creates surface-level familiarity without depth in areas that matter most.
              </p>
            </div>

            <div className="feature-block">
              <div style={{ 
                fontSize: '32px',
                marginBottom: '16px'
              }}>🔄</div>
              <h3>Repetition without understanding</h3>
              <p>
                Memorising facts and formulas feels productive, but Tahsili tests application 
                and reasoning. Students mistake recognition for understanding.
              </p>
            </div>

            <div className="feature-block">
              <div style={{ 
                fontSize: '32px',
                marginBottom: '16px'
              }}>⚠️</div>
              <h3>Weak subject prioritization</h3>
              <p>
                Not all subjects carry equal weight in progression decisions. Students spend 
                equal time on all areas instead of focusing where readiness needs improvement.
              </p>
            </div>
          </div>

          <div style={{ 
            background: 'rgba(200, 90, 84, 0.08)',
            border: '1px solid rgba(200, 90, 84, 0.2)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            marginTop: '40px',
            textAlign: 'center'
          }}>
            <p className="section-body" style={{ margin: 0, fontSize: '17px' }}>
              Curriculum breadth becomes overwhelming without focus.
            </p>
          </div>
        </div>
      </section>

      {/* How Diagnostics Help */}
      <section className="content-section bg-slate">
        <div className="content-container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            How diagnostics help
          </h2>

          <div className="content-container-narrow">
            <p className="section-body" style={{ 
              textAlign: 'center', 
              fontSize: '18px',
              color: 'var(--text-secondary)',
              marginBottom: '48px'
            }}>
              Before revision begins, Dr Fahm's diagnostic identifies which subjects and topics 
              require focused attention:
            </p>

            <div className="steps-vertical">
              <div className="step-simple">
                <div className="step-number-small">1</div>
                <div className="step-content">
                  <h3>Subject-level baseline</h3>
                  <p>
                    Understand where readiness stands across all subjects — chemistry, biology, 
                    physics, math, English, and Arabic — before deciding where to focus effort.
                  </p>
                </div>
              </div>

              <div className="step-simple">
                <div className="step-number-small">2</div>
                <div className="step-content">
                  <h3>Topic prioritization</h3>
                  <p>
                    Not all topics appear equally on Tahsili. Focus on high-frequency concepts 
                    and recurring question patterns that decide outcomes.
                  </p>
                </div>
              </div>

              <div className="step-simple">
                <div className="step-number-small">3</div>
                <div className="step-content">
                  <h3>Understanding vs. memorization</h3>
                  <p>
                    Identify whether gaps come from missing foundational knowledge or surface-level 
                    memorization that doesn't transfer to application questions.
                  </p>
                </div>
              </div>

              <div className="step-simple">
                <div className="step-number-small">4</div>
                <div className="step-content">
                  <h3>Focused revision plan</h3>
                  <p>
                    Build a structured revision pathway that addresses the most important gaps first, 
                    rather than trying to cover everything equally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Readiness Looks Like */}
      <section className="content-section">
        <div className="content-container-narrow">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>
            What Tahsili readiness looks like
          </h2>

          <p className="section-body" style={{ textAlign: 'center', marginBottom: '48px' }}>
            Tahsili readiness isn't about perfect recall across every topic. It's about 
            understanding core concepts and applying them accurately under exam conditions.
          </p>

          <div className="two-col-grid">
            <div className="feature-block">
              <h3>Structured, not exhaustive</h3>
              <p>
                Revision follows a clear plan aligned to assessment frequency and difficulty, 
                not arbitrary coverage of every textbook chapter.
              </p>
            </div>

            <div className="feature-block">
              <h3>Application, not recall</h3>
              <p>
                Tahsili tests whether you can apply concepts to new problems, not whether you've 
                memorised definitions or formulas.
              </p>
            </div>
          </div>

          <div style={{ 
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
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
              <strong style={{ color: 'var(--text-primary)' }}>Tahsili readiness means:</strong> answering 
              subject-based questions accurately because you understand concepts and how they connect — 
              not because you've memorised isolated facts.
            </p>
          </div>
        </div>
      </section>

      {/* Subject Coverage */}
      <section className="content-section bg-slate">
        <div className="content-container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            Subject coverage
          </h2>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            <div className="feature-block">
              <h3>Sciences</h3>
              <p style={{ marginBottom: '12px', color: 'var(--text-secondary)' }}>
                Chemistry, Biology, Physics
              </p>
              <ul className="check-list">
                <li>Conceptual understanding</li>
                <li>Application to problems</li>
                <li>Formula usage in context</li>
              </ul>
            </div>

            <div className="feature-block">
              <h3>Mathematics</h3>
              <p style={{ marginBottom: '12px', color: 'var(--text-secondary)' }}>
                Algebra, Geometry, Statistics
              </p>
              <ul className="check-list">
                <li>Problem-solving strategies</li>
                <li>Multi-step reasoning</li>
                <li>Pattern recognition</li>
              </ul>
            </div>

            <div className="feature-block">
              <h3>Languages</h3>
              <p style={{ marginBottom: '12px', color: 'var(--text-secondary)' }}>
                English, Arabic
              </p>
              <ul className="check-list">
                <li>Grammar & structure</li>
                <li>Reading comprehension</li>
                <li>Contextual vocabulary</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Breadth vs Depth */}
      <section className="content-section">
        <div className="content-container-narrow text-content">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>
            Breadth vs. depth
          </h2>

          <p className="section-body" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Tahsili's breadth makes it feel overwhelming. The instinct is to cover everything equally. 
            The result is surface-level familiarity without depth anywhere.
          </p>

          <p className="section-body" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Diagnostics reveal where depth is needed and where current knowledge is sufficient. 
            This prevents wasted effort on areas where readiness is already strong.
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
              Focused revision on high-impact topics produces better outcomes than 
              unfocused coverage of everything.
            </p>
          </div>
        </div>
      </section>

      {/* For Students vs Parents */}
      <section className="content-section bg-slate">
        <div className="content-container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            Different perspectives
          </h2>

          <div className="two-col-grid">
            <div className="feature-block">
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🎓</div>
              <h3>For Students</h3>
              <p>
                If revision feels overwhelming or directionless, the issue isn't effort — it's focus. 
                A diagnostic reveals which subjects and topics will meaningfully improve Tahsili readiness.
              </p>
            </div>

            <div className="feature-block">
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>👨‍👩‍👧‍👦</div>
              <h3>For Parents</h3>
              <p>
                If your child is "studying everything" but scores aren't improving, breadth without 
                structure rarely translates to results. Diagnostics bring clarity and direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="content-container-narrow">
          <h2 className="cta-title">
            Check Tahsili readiness before revision begins.
          </h2>
          
          <p className="cta-body">
            Start with a diagnostic assessment and understand where readiness stands across all 
            Tahsili subjects before deciding where to focus effort.
          </p>

          <button 
            onClick={() => navigate('/start')} 
            className="btn-final-large"
          >
            <span>Check Tahsili Readiness</span>
            <span className="btn-microcopy-inline">Free diagnostic · 10 minutes</span>
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

export default TahsiliPage;