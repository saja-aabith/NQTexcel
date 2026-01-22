import React from 'react';
import { useNavigate } from 'react-router-dom';
import './marketing.css';

function HowItWorksPage() {
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

      {/* Hero - The System */}
      <section className="page-hero" style={{ textAlign: 'center' }}>
        <div className="content-container-narrow">
          <h1 className="page-title">
            A system designed around readiness.
          </h1>
          
          <p className="page-subtitle">
            Not more practice. Better clarity.
          </p>

          <div className="hero-ctas">
            <button 
              onClick={() => navigate('/start')} 
              className="btn-cta-primary"
            >
              <span>Start Diagnostic</span>
              <span className="btn-microcopy">See how it works firsthand</span>
            </button>
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section className="content-section">
        <div className="content-container-narrow text-content">
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            How Dr Fahm works
          </h2>
          
          <p className="section-body" style={{ textAlign: 'center' }}>
            Most preparation platforms start with content. Dr Fahm starts with understanding. 
            Before you practice, we need to know what practice will actually improve readiness.
          </p>
        </div>
      </section>

      {/* 1. Diagnostic First */}
      <section className="content-section bg-slate">
        <div className="content-container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ 
              display: 'flex', 
              gap: '32px', 
              alignItems: 'flex-start',
              marginBottom: '32px'
            }}>
              <div style={{ 
                width: '80px',
                height: '80px',
                borderRadius: '16px',
                background: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                fontWeight: 'var(--font-weight-black)',
                color: '#FFFFFF',
                flexShrink: 0,
                boxShadow: '0 4px 16px rgba(79, 70, 229, 0.3)'
              }}>
                1
              </div>
              
              <div>
                <h2 className="section-title" style={{ marginTop: '8px', marginBottom: '20px' }}>
                  Diagnostic first
                </h2>
                
                <p className="section-body">
                  Every learner begins with a diagnostic assessment. We don't start with practice 
                  questions or generic content. We start by understanding:
                </p>

                <ul className="check-list" style={{ marginTop: '24px' }}>
                  <li>What question types reveal confusion vs. carelessness</li>
                  <li>Where time is lost (reading, reasoning, or answering)</li>
                  <li>Which patterns indicate understanding vs. guessing</li>
                  <li>How accuracy changes under pressure</li>
                </ul>

                <p className="section-body" style={{ marginTop: '24px' }}>
                  This isn't about getting a score. It's about seeing what readiness actually looks like 
                  before time and confidence are wasted.
                </p>

                <div style={{ marginTop: '32px' }}>
                  <button 
                    onClick={() => navigate('/start')} 
                    className="btn-cta-secondary-text"
                  >
                    Take the diagnostic →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Personalised Pathways */}
      <section className="content-section">
        <div className="content-container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ 
              display: 'flex', 
              gap: '32px', 
              alignItems: 'flex-start',
              marginBottom: '32px'
            }}>
              <div style={{ 
                width: '80px',
                height: '80px',
                borderRadius: '16px',
                background: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                fontWeight: 'var(--font-weight-black)',
                color: '#FFFFFF',
                flexShrink: 0,
                boxShadow: '0 4px 16px rgba(79, 70, 229, 0.3)'
              }}>
                2
              </div>
              
              <div>
                <h2 className="section-title" style={{ marginTop: '8px', marginBottom: '20px' }}>
                  Personalised pathways
                </h2>
                
                <p className="section-body">
                  Based on the diagnostic, Dr Fahm builds a focused preparation pathway. Not a 
                  generic course. Not every possible question. Just what will meaningfully improve 
                  your readiness for Qudurat, Tahsili, or NAFS.
                </p>

                <div className="two-col-grid" style={{ marginTop: '32px' }}>
                  <div className="feature-block">
                    <h3>What personalised means</h3>
                    <p>
                      Your pathway focuses only on question types, topics, and skills where 
                      improvement will change outcomes.
                    </p>
                  </div>

                  <div className="feature-block">
                    <h3>What it doesn't mean</h3>
                    <p>
                      We don't adjust difficulty to make you feel comfortable. We adjust focus 
                      to make preparation efficient.
                    </p>
                  </div>
                </div>

                <p className="section-body" style={{ marginTop: '24px' }}>
                  Personalised preparation means doing less, but doing what matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Purposeful Practice */}
      <section className="content-section bg-slate">
        <div className="content-container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ 
              display: 'flex', 
              gap: '32px', 
              alignItems: 'flex-start',
              marginBottom: '32px'
            }}>
              <div style={{ 
                width: '80px',
                height: '80px',
                borderRadius: '16px',
                background: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                fontWeight: 'var(--font-weight-black)',
                color: '#FFFFFF',
                flexShrink: 0,
                boxShadow: '0 4px 16px rgba(79, 70, 229, 0.3)'
              }}>
                3
              </div>
              
              <div>
                <h2 className="section-title" style={{ marginTop: '8px', marginBottom: '20px' }}>
                  Purposeful practice
                </h2>
                
                <p className="section-body">
                  Practice is not repetition. Dr Fahm designs practice aligned to how assessments 
                  actually decide outcomes:
                </p>

                <ul className="check-list" style={{ marginTop: '24px' }}>
                  <li>Time-aware — practicing under realistic conditions</li>
                  <li>Pattern-focused — understanding why answers are correct, not just what they are</li>
                  <li>Feedback-driven — immediate correction when reasoning breaks down</li>
                  <li>Exam-aligned — prioritising question types that appear most frequently</li>
                </ul>

                <div style={{ 
                  background: 'rgba(79, 70, 229, 0.08)',
                  border: '1px solid rgba(79, 70, 229, 0.2)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px',
                  marginTop: '32px'
                }}>
                  <p className="section-body" style={{ margin: 0 }}>
                    <strong style={{ color: 'var(--text-primary)' }}>The goal isn't volume.</strong> The goal is improving 
                    accuracy, speed, and confidence on the question types that decide progression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Over Time */}
      <section className="content-section">
        <div className="content-container-narrow text-content">
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Progress over time
          </h2>
          
          <p className="section-body">
            Readiness doesn't improve overnight. Dr Fahm tracks progress as it actually develops — gradually, 
            through focused effort on what matters.
          </p>

          <p className="section-body">
            You'll see readiness signals update as practice translates into understanding. Not just completion 
            percentages. Not just right or wrong counts. Real indicators of whether preparation is working.
          </p>

          <div style={{ 
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            marginTop: '32px'
          }}>
            <p className="section-body" style={{ margin: 0 }}>
              Progress is measured against readiness benchmarks, not against other students.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy and Calm Design */}
      <section className="content-section bg-slate">
        <div className="content-container-narrow text-content">
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Privacy and calm design
          </h2>
          
          <p className="section-body">
            Dr Fahm is built for clarity, not competition. There are no public leaderboards. 
            No rankings. No comparison with other students.
          </p>

          <p className="section-body">
            Your diagnostic results, practice performance, and readiness signals remain private. 
            Progress is yours to track, share, or keep to yourself.
          </p>

          <div className="two-col-grid" style={{ marginTop: '40px' }}>
            <div className="feature-block">
              <h3>What you control</h3>
              <p>Who sees your results, when you practice, and how you share progress.</p>
            </div>

            <div className="feature-block">
              <h3>What stays private</h3>
              <p>All diagnostic data, practice performance, and readiness indicators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This System Works */}
      <section className="content-section">
        <div className="content-container-narrow text-content">
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Why this system works
          </h2>
          
          <p className="section-body" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Most students appear busy but remain unprepared. They practice without direction. 
            They repeat what they're already good at. They avoid diagnostics because clarity feels exposing.
          </p>

          <p className="section-body" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Dr Fahm replaces activity with insight. Effort produces progress when preparation is 
            aligned to what assessments actually measure.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="content-container-narrow">
          <h2 className="cta-title">
            Ready to see how it works?
          </h2>
          
          <p className="cta-body">
            Start with a diagnostic and understand where readiness stands before preparation begins.
          </p>

          <button 
            onClick={() => navigate('/start')} 
            className="btn-final-large"
          >
            <span>Start Diagnostic</span>
            <span className="btn-microcopy-inline">10 minutes · No payment required</span>
          </button>

          <div style={{ marginTop: '24px' }}>
            <button 
              onClick={() => navigate('/pricing')} 
              className="btn-cta-secondary-text"
            >
              View pricing →
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

export default HowItWorksPage;