import React from 'react';
import { useNavigate } from 'react-router-dom';
import './marketing.css';

function NAFSPage() {
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

      {/* Hero - NAFS Reality */}
      <section className="page-hero" style={{ textAlign: 'center' }}>
        <div className="content-container-narrow">
          <div style={{ 
            display: 'inline-block',
            padding: '8px 16px',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '999px',
            fontSize: '13px',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--readiness-green)',
            marginBottom: '24px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            NAFS Assessment
          </div>

          <h1 className="page-title">
            NAFS measures readiness earlier.
          </h1>
          
          <p className="page-subtitle">
            Benchmarking, not test gaming.
          </p>

          <p className="page-body">
            NAFS (National Assessment of Foundational Skills) represents a directional shift in Saudi 
            education — measuring readiness earlier, more consistently, and more transparently than 
            previous systems. This changes how families and institutions should think about preparation.
          </p>

          <div className="hero-ctas">
            <button 
              onClick={() => navigate('/start')} 
              className="btn-cta-primary"
              style={{
                background: 'var(--readiness-green)',
                boxShadow: '0 4px 16px rgba(16, 185, 129, 0.3)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'var(--readiness-dark)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'var(--readiness-green)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(16, 185, 129, 0.3)';
              }}
            >
              <span>Check Readiness (Parents)</span>
              <span className="btn-microcopy">Free diagnostic · 10 minutes</span>
            </button>

            <button 
              onClick={() => navigate('/schools')} 
              className="btn-cta-secondary-text"
            >
              Explore School Access →
            </button>
          </div>
        </div>
      </section>

      {/* Why Early Readiness Matters */}
      <section className="content-section">
        <div className="content-container-narrow text-content">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>
            Why early readiness matters
          </h2>

          <p className="section-body" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            For years, Saudi students faced high-stakes assessments (Qudurat, Tahsili) late in their 
            academic journey — often with limited time to address gaps once identified.
          </p>

          <p className="section-body" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            NAFS changes this by measuring foundational skills earlier in the education system. 
            This creates visibility sooner, which means families and schools can act before 
            readiness gaps become urgent.
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
              fontSize: '18px',
              color: 'var(--text-secondary)',
              textAlign: 'center'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>The shift:</strong> From reactive 
              intervention to proactive readiness tracking.
            </p>
          </div>
        </div>
      </section>

      {/* National Assessment Direction */}
      <section className="content-section bg-slate">
        <div className="content-container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            National assessment direction
          </h2>

          <div className="two-col-grid">
            <div className="feature-block">
              <h3>What's changing</h3>
              <ul className="check-list">
                <li>Earlier measurement of foundational skills</li>
                <li>More consistent national benchmarking</li>
                <li>Greater transparency in readiness signals</li>
                <li>Longitudinal tracking over time</li>
              </ul>
            </div>

            <div className="feature-block">
              <h3>What this means</h3>
              <ul className="check-list">
                <li>Readiness becomes visible sooner</li>
                <li>Gaps can be addressed earlier</li>
                <li>Schools face accountability pressure</li>
                <li>Parents expect clarity on progress</li>
              </ul>
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
              Families who understand this shift early keep options open. 
              Families who delay often face rushed decisions later.
            </p>
          </div>
        </div>
      </section>

      {/* Risk of Delayed Clarity */}
      <section className="content-section">
        <div className="content-container-narrow text-content">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>
            The risk of delayed clarity
          </h2>

          <p className="section-body" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Many families treat early assessments like NAFS as "practice" rather than signals. 
            They wait for Qudurat and Tahsili to take readiness seriously.
          </p>

          <p className="section-body" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            But by the time those assessments arrive, gaps that could have been addressed over 
            years become urgent problems that require rushed intervention.
          </p>

          <div style={{ 
            background: 'rgba(200, 90, 84, 0.08)',
            border: '1px solid rgba(200, 90, 84, 0.2)',
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
              <strong style={{ color: 'var(--text-primary)' }}>The cost of delay:</strong> Delaying clarity 
              rarely reduces stress. It compounds it.
            </p>
          </div>
        </div>
      </section>

      {/* Parents vs Schools */}
      <section className="content-section bg-slate">
        <div className="content-container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            Parents vs. schools perspective
          </h2>

          <div className="two-col-grid">
            <div className="feature-block">
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>👨‍👩‍👧‍👦</div>
              <h3>For Parents</h3>
              <p style={{ marginBottom: '16px' }}>
                NAFS gives early visibility into foundational skills — literacy, numeracy, reasoning. 
                This is your opportunity to act before gaps become urgent.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--text-tertiary)' }}>
                Dr Fahm helps you understand what readiness signals mean and what to do about them 
                — privately, without pressure.
              </p>
              <button 
                onClick={() => navigate('/start')} 
                className="btn-cta-primary"
                style={{
                  marginTop: '20px',
                  background: 'var(--readiness-green)',
                  boxShadow: '0 4px 16px rgba(16, 185, 129, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--readiness-dark)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'var(--readiness-green)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(16, 185, 129, 0.3)';
                }}
              >
                <span>Check Readiness</span>
              </button>
            </div>

            <div className="feature-block">
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🏫</div>
              <h3>For Schools</h3>
              <p style={{ marginBottom: '16px' }}>
                NAFS creates accountability pressure. Parents expect schools to demonstrate readiness 
                at cohort level. Preparation can no longer rely on individual student effort alone.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--text-tertiary)' }}>
                Dr Fahm provides schools with diagnostic tools, dashboards, and reporting to manage 
                readiness systematically across cohorts.
              </p>
              <button 
                onClick={() => navigate('/schools')} 
                className="btn-cta-primary"
                style={{ marginTop: '20px' }}
              >
                <span>Explore School Access</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How Dr Fahm Supports NAFS */}
      <section className="content-section">
        <div className="content-container-narrow">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            How Dr Fahm supports NAFS readiness
          </h2>

          <div className="steps-vertical">
            <div className="step-simple">
              <div className="step-number-small">1</div>
              <div className="step-content">
                <h3>Diagnostic-first logic</h3>
                <p>
                  Understand foundational skills baselines before intervention begins. 
                  No guessing. No assumptions.
                </p>
              </div>
            </div>

            <div className="step-simple">
              <div className="step-number-small">2</div>
              <div className="step-content">
                <h3>Longitudinal tracking</h3>
                <p>
                  Track readiness development over time as foundational skills are built. 
                  Readiness doesn't improve overnight.
                </p>
              </div>
            </div>

            <div className="step-simple">
              <div className="step-number-small">3</div>
              <div className="step-content">
                <h3>Non-gaming approach</h3>
                <p>
                  Dr Fahm doesn't "teach to the test." We build genuine foundational skills that 
                  transfer to any assessment or academic context.
                </p>
              </div>
            </div>

            <div className="step-simple">
              <div className="step-number-small">4</div>
              <div className="step-content">
                <h3>For individuals and institutions</h3>
                <p>
                  Parents gain private visibility. Schools gain cohort-level dashboards. 
                  Both approaches prioritize readiness over rankings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="content-section bg-slate">
        <div className="content-container-narrow text-content">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>
            Why act now
          </h2>

          <p className="section-body" style={{ 
            fontSize: '18px', 
            color: 'var(--text-secondary)',
            textAlign: 'center' 
          }}>
            NAFS represents a system-level shift. Families and schools that recognize this early 
            gain time to build readiness proactively.
          </p>

          <p className="section-body" style={{ 
            fontSize: '18px', 
            color: 'var(--text-secondary)',
            textAlign: 'center' 
          }}>
            Those who wait are often forced into reactive intervention when gaps become visible 
            later — with fewer options and more pressure.
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
              fontSize: '18px',
              color: 'var(--text-secondary)',
              textAlign: 'center'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>The opportunity:</strong> Early clarity 
              allows gradual improvement. Delayed clarity forces rushed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="content-container-narrow">
          <h2 className="cta-title">
            Understand NAFS readiness before it becomes urgent.
          </h2>
          
          <p className="cta-body">
            Whether you're a parent seeking early clarity or a school preparing for system-level 
            accountability, Dr Fahm provides diagnostic tools aligned to national direction.
          </p>

          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center',
            marginTop: '40px'
          }}>
            <button 
              onClick={() => navigate('/start')} 
              className="btn-final-large"
              style={{
                background: 'var(--readiness-green)',
                boxShadow: '0 4px 16px rgba(16, 185, 129, 0.3)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'var(--readiness-dark)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'var(--readiness-green)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(16, 185, 129, 0.3)';
              }}
            >
              <span>Parents: Check Readiness</span>
              <span className="btn-microcopy-inline">Free diagnostic · 10 minutes</span>
            </button>

            <button 
              onClick={() => navigate('/schools')} 
              className="btn-cta-secondary-text"
              style={{ fontSize: '17px' }}
            >
              Schools: Explore School Access →
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

export default NAFSPage;