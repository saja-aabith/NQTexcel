import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();
  const [currentExam, setCurrentExam] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  const [percentage, setPercentage] = useState(0);
  const [showExams, setShowExams] = useState(false);
  const exams = ['NAFS', 'Qudurat', 'Tahsili'];

  // Animated percentage counter - races to 100%
  useEffect(() => {
    const duration = 1500; // 1.5 seconds to reach 100%
    const steps = 100;
    const increment = 100 / steps;
    const stepDuration = duration / steps;

    let currentValue = 0;
    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= 100) {
        setPercentage(100);
        clearInterval(timer);
        // Wait a moment then start showing exams
        setTimeout(() => {
          setShowExams(true);
        }, 300);
      } else {
        setPercentage(Math.floor(currentValue));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  // Rotating exam text effect - starts after percentage animation
  useEffect(() => {
    if (showExams) {
      const interval = setInterval(() => {
        setCurrentExam((prev) => (prev + 1) % exams.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [showExams, exams.length]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="homepage-new">
      {/* ==================== NAVIGATION ==================== */}
      <nav className="nav-institutional">
        <div className="nav-container">
          <div className="nav-brand">
            <h1 onClick={() => navigate('/')}>Dr Fahm</h1>
            <span className="nav-subtitle">National Assessment & Readiness Platform</span>
          </div>
          
          <div className="nav-actions">
            <button 
              onClick={() => scrollToSection('for-schools')} 
              className="btn-nav-secondary"
            >
              For Schools
            </button>
            <button 
              onClick={() => navigate('/login')} 
              className="btn-nav-primary"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section className="hero-institutional">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-headline-wrapper">
              <h1 className="hero-headline-main">
                Making <span className="percentage-animated">{percentage}%</span> for
              </h1>
              
              <div className="rotating-exams-wrapper">
                {showExams && exams.map((exam, index) => (
                  <h1 
                    key={exam}
                    className={`exam-text-animated ${currentExam === index ? 'active' : ''}`}
                  >
                    {exam} <span className="possible-text">possible</span>
                  </h1>
                ))}
              </div>
            </div>

            <p className="hero-subheadline">
              Saudi national assessments now measure readiness over time, 
              not just performance on a single day.
            </p>

            <p className="hero-body">
              Dr Fahm is a diagnostic-led assessment and preparation platform designed 
              for the Saudi education system. We help students, families, and institutions 
              gain early clarity on readiness, so preparation becomes intentional rather 
              than reactive.
            </p>

            <div className="hero-ctas">
              <button 
                onClick={() => navigate('/login')} 
                className="btn-cta-primary"
              >
                Start Free Trial
                <span className="btn-microcopy">No payment details required</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('for-schools')} 
                className="btn-cta-secondary"
              >
                For Schools & Organisations
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="student-journey-sketch">
              <svg viewBox="0 0 500 400" className="journey-svg">
                {/* Background gradient circle */}
                <defs>
                  <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(79, 70, 229, 0.1)" />
                    <stop offset="100%" stopColor="rgba(16, 185, 129, 0.05)" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Journey path - elegant curve */}
                <path 
                  d="M 100 320 Q 150 200 250 200 T 400 320" 
                  stroke="rgba(79, 70, 229, 0.3)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8 8"
                />

                {/* NAFS Circle */}
                <g className="exam-node">
                  <circle cx="100" cy="320" r="45" fill="var(--navy-850)" stroke="#4F46E5" strokeWidth="3" />
                  <circle cx="100" cy="320" r="38" fill="rgba(79, 70, 229, 0.15)" />
                  <text x="100" y="315" fontSize="14" fontWeight="700" fill="#9CA3AF" textAnchor="middle">NAFS</text>
                  <circle cx="100" cy="332" r="8" fill="#10B981" />
                  <path d="M 97 332 L 99 334 L 103 328" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* Qudurat Circle */}
                <g className="exam-node">
                  <circle cx="250" cy="200" r="50" fill="var(--navy-850)" stroke="#4F46E5" strokeWidth="3" />
                  <circle cx="250" cy="200" r="42" fill="rgba(79, 70, 229, 0.15)" />
                  <text x="250" y="195" fontSize="14" fontWeight="700" fill="#9CA3AF" textAnchor="middle">Qudurat</text>
                  <circle cx="250" cy="212" r="8" fill="#10B981" />
                  <path d="M 247 212 L 249 214 L 253 208" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* Tahsili Circle */}
                <g className="exam-node">
                  <circle cx="400" cy="320" r="45" fill="var(--navy-850)" stroke="#4F46E5" strokeWidth="3" />
                  <circle cx="400" cy="320" r="38" fill="rgba(79, 70, 229, 0.15)" />
                  <text x="400" y="315" fontSize="14" fontWeight="700" fill="#9CA3AF" textAnchor="middle">Tahsili</text>
                  <circle cx="400" cy="332" r="8" fill="#10B981" />
                  <path d="M 397 332 L 399 334 L 403 328" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* Student figure at center */}
                <g className="student-figure">
                  {/* Head */}
                  <circle cx="250" cy="280" r="20" fill="#4F46E5" />
                  
                  {/* Body */}
                  <rect x="235" y="300" width="30" height="45" rx="8" fill="#6366F1" />
                  
                  {/* Arms */}
                  <rect x="220" y="305" width="12" height="28" rx="6" fill="#6366F1" />
                  <rect x="268" y="305" width="12" height="28" rx="6" fill="#6366F1" />
                  
                  {/* Legs */}
                  <rect x="238" y="345" width="10" height="30" rx="5" fill="#6366F1" />
                  <rect x="252" y="345" width="10" height="30" rx="5" fill="#6366F1" />
                  
                  {/* Book/Document */}
                  <rect x="232" y="320" width="16" height="12" rx="2" fill="#10B981" />
                  <line x1="240" y1="322" x2="240" y2="330" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                </g>

                {/* Progress indicator */}
                <g className="progress-badge">
                  <rect x="200" y="120" width="100" height="40" rx="20" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="2" />
                  <text x="250" y="145" fontSize="16" fontWeight="700" fill="#10B981" textAnchor="middle">Ready</text>
                </g>

                {/* Connecting lines from student to exams */}
                <line x1="250" y1="300" x2="130" y2="310" stroke="rgba(79, 70, 229, 0.2)" strokeWidth="2" />
                <line x1="250" y1="300" x2="250" y2="240" stroke="rgba(79, 70, 229, 0.2)" strokeWidth="2" />
                <line x1="250" y1="300" x2="370" y2="310" stroke="rgba(79, 70, 229, 0.2)" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SYSTEM SHIFT ==================== */}
      <section className="system-shift">
        <div className="content-container">
          <h2>The cost of guessing has increased.</h2>
          
          <div className="shift-content">
            <p className="shift-paragraph">
              Qudurat and Tahsili are no longer isolated milestones.
            </p>
            
            <p className="shift-paragraph">
              With the introduction of NAFS, readiness is now assessed earlier, 
              benchmarked more consistently, and discussed more openly.
            </p>
            
            <p className="shift-paragraph">
              Families who gain clarity early keep their options open. 
              Families who delay are often forced into rushed decisions later.
            </p>
            
            <p className="shift-conclusion">
              Dr Fahm exists to move clarity forward.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== PATH SELECTION ==================== */}
      <section className="path-selection">
        <div className="content-container">
          <h2>One platform. Different decisions.</h2>

          <div className="audience-grid">
            {/* Students Card */}
            <div 
              className={`audience-card ${expandedCard === 'students' ? 'expanded' : ''}`}
              onMouseEnter={() => setExpandedCard('students')}
              onMouseLeave={() => setExpandedCard(null)}
            >
              <div className="card-icon">🎓</div>
              <h3>Students</h3>
              <p className="card-primary">
                If you're practising but still unsure whether it's the right practice, 
                that's the problem diagnostics solve.
              </p>
              
              <div className="card-expanded-content">
                <ul className="card-benefits">
                  <li>Understand what actually matters before time runs out</li>
                  <li>Practice with purpose, not just volume</li>
                  <li>Private clarity without public comparison</li>
                </ul>
              </div>
              
              <button 
                onClick={() => navigate('/login')} 
                className="btn-card-action"
              >
                Take the Diagnostic
              </button>
            </div>

            {/* Parents Card */}
            <div 
              className={`audience-card ${expandedCard === 'parents' ? 'expanded' : ''}`}
              onMouseEnter={() => setExpandedCard('parents')}
              onMouseLeave={() => setExpandedCard(null)}
            >
              <div className="card-icon">👨‍👩‍👧‍👦</div>
              <h3>Parents</h3>
              <p className="card-primary">
                If you're unsure where your child truly stands, delaying clarity 
                rarely reduces stress.
              </p>
              
              <div className="card-expanded-content">
                <ul className="card-benefits">
                  <li>Early visibility without pressure or rankings</li>
                  <li>Understand readiness before decisions become urgent</li>
                  <li>Support preparation with actual insight</li>
                </ul>
              </div>
              
              <button 
                onClick={() => navigate('/login')} 
                className="btn-card-action"
              >
                Start Free Trial
              </button>
            </div>

            {/* Schools Card */}
            <div 
              className={`audience-card ${expandedCard === 'schools' ? 'expanded' : ''}`}
              onMouseEnter={() => setExpandedCard('schools')}
              onMouseLeave={() => setExpandedCard(null)}
            >
              <div className="card-icon">🏫</div>
              <h3>Schools & Organisations</h3>
              <p className="card-primary">
                If readiness is becoming a parent conversation, it needs to become a system.
              </p>
              
              <div className="card-expanded-content">
                <ul className="card-benefits">
                  <li>Cohort-level diagnostic insight and reporting</li>
                  <li>Consistent preparation framework across year groups</li>
                  <li>Minimal operational burden, maximum visibility</li>
                </ul>
              </div>
              
              <button 
                onClick={() => scrollToSection('for-schools')} 
                className="btn-card-action"
              >
                Explore School Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW DR FAHM WORKS ==================== */}
      <section className="how-it-works">
        <div className="content-container">
          <h2>Clarity before effort.</h2>

          <div className="steps-horizontal">
            <div className="step-item">
              <div className="step-number">1</div>
              <h3>Diagnostic Assessment</h3>
              <p>
                We identify not just what students get wrong, but why — before time 
                and confidence are lost.
              </p>
            </div>

            <div className="step-connector"></div>

            <div className="step-item">
              <div className="step-number">2</div>
              <h3>Personalised Pathway</h3>
              <p>
                Preparation focuses only on what will meaningfully improve readiness.
              </p>
            </div>

            <div className="step-connector"></div>

            <div className="step-item">
              <div className="step-number">3</div>
              <h3>Purposeful Practice</h3>
              <p>
                Less volume. More intent. Practice aligned to how assessments 
                actually decide outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DIFFERENTIATION ==================== */}
      <section className="differentiation">
        <div className="content-container-narrow">
          <h2>Activity can hide confusion. Readiness exposes it.</h2>
          
          <div className="differentiation-body">
            <p>Many students appear busy but remain unprepared.</p>
            <p>More questions do not always lead to more readiness.</p>
            <p className="differentiation-conclusion">
              Dr Fahm replaces activity with insight, so effort produces progress.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== EXAMS SECTION ==================== */}
      <section className="exams-section">
        <div className="content-container">
          <h2>Built for the assessments shaping progression in Saudi Arabia.</h2>

          <div className="exams-grid">
            <div className="exam-card">
              <div className="exam-header">
                <h3>Qudurat</h3>
                <span className="exam-badge">Reasoning</span>
              </div>
              <p>
                Reasoning accuracy and time control, measured diagnostically. 
                Not repetition, but understanding of question patterns and 
                efficient problem-solving under pressure.
              </p>
              <button onClick={() => navigate('/login')} className="btn-exam">
                Check Qudurat Readiness →
              </button>
            </div>

            <div className="exam-card">
              <div className="exam-header">
                <h3>Tahsili</h3>
                <span className="exam-badge">Knowledge</span>
              </div>
              <p>
                Structured subject preparation aligned to assessment design, not repetition. 
                Focused revision that addresses actual gaps in understanding across 
                curriculum areas.
              </p>
              <button onClick={() => navigate('/login')} className="btn-exam">
                Check Tahsili Readiness →
              </button>
            </div>

            <div className="exam-card exam-card-featured">
              <div className="exam-header">
                <h3>NAFS</h3>
                <span className="exam-badge exam-badge-featured">Benchmarking</span>
              </div>
              <p>
                Early readiness signals for a benchmarking-led system. Understanding 
                where students stand before high-stakes decisions need to be made.
              </p>
              <button onClick={() => navigate('/login')} className="btn-exam btn-exam-featured">
                Check NAFS Readiness →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STUDENT MIRROR ==================== */}
      <section className="student-mirror">
        <div className="content-container-narrow">
          <h2>If you're avoiding diagnostics, that's understandable. It's also the risk.</h2>
          
          <div className="mirror-content">
            <p>
              Most capable students delay diagnostics because clarity feels exposing.
            </p>
            <p>
              But uncertainty rarely disappears on its own.
            </p>
            <p className="mirror-conclusion">
              Dr Fahm gives clarity early, privately, and constructively.
            </p>
            
            <button onClick={() => navigate('/login')} className="btn-mirror">
              Start Diagnostic Assessment
            </button>
          </div>
        </div>
      </section>

      {/* ==================== FOR SCHOOLS ==================== */}
      <section className="for-schools" id="for-schools">
        <div className="content-container">
          <div className="schools-content">
            <div className="schools-text">
              <h2>When readiness becomes visible, systems matter.</h2>
              
              <p className="schools-intro">
                As national benchmarking increases, readiness can no longer rely 
                on individual effort alone.
              </p>
              
              <p>
                Dr Fahm helps schools implement a consistent readiness framework that 
                supports students, reassures parents, and reduces last-minute escalation.
              </p>

              <div className="schools-features">
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <span>Cohort-level diagnostic insight</span>
                </div>
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <span>Consistent preparation across year groups</span>
                </div>
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <span>Clear reporting for leadership and parents</span>
                </div>
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <span>Minimal operational burden</span>
                </div>
              </div>

              <button 
                onClick={() => window.location.href = 'mailto:schools@drfahm.com'} 
                className="btn-schools"
              >
                Talk to us about school access
              </button>
            </div>

            <div className="schools-visual">
              <div className="dashboard-mockup">
                <div className="mockup-title">School Dashboard</div>
                <div className="mockup-stats">
                  <div className="stat-item">
                    <span className="stat-number">156</span>
                    <span className="stat-label">Students Assessed</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">78%</span>
                    <span className="stat-label">Average Readiness</span>
                  </div>
                </div>
                <div className="mockup-chart">
                  <div className="chart-bar" style={{ height: '45%' }}></div>
                  <div className="chart-bar" style={{ height: '68%' }}></div>
                  <div className="chart-bar" style={{ height: '82%' }}></div>
                  <div className="chart-bar" style={{ height: '78%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="final-cta">
        <div className="content-container">
          <h2>Clarity earlier. Fewer compromises later.</h2>
          <p className="final-cta-body">
            Start with a diagnostic assessment and understand readiness before 
            decisions become urgent.
          </p>

          <div className="final-cta-actions">
            <button 
              onClick={() => navigate('/login')} 
              className="btn-final-primary"
            >
              Start Free Trial
              <span className="btn-microcopy-inline">No payment details required</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('for-schools')} 
              className="btn-final-secondary"
            >
              For Schools & Organisations
            </button>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer-institutional">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>Dr Fahm</h3>
              <p>National Assessment & Readiness Platform</p>
              <p className="footer-tagline">
                Designed for the Saudi education system. Built for clarity and readiness.
              </p>
            </div>

            <div className="footer-links">
              <h4>Assessments</h4>
              <ul>
                <li>
                  <a
                    href="/qudurat"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/qudurat');
                    }}
                  >
                    Qudurat
                  </a>
                </li>
                <li>
                  <a
                    href="/tahsili"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/tahsili');
                    }}
                  >
                    Tahsili
                  </a>
                </li>
                <li>
                  <a
                    href="/nafs"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/nafs');
                    }}
                  >
                    NAFS
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Platform</h4>
              <ul>
                <li>
                  <a
                    href="#for-schools"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('for-schools');
                    }}
                  >
                    For Schools
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/about');
                    }}
                  >
                    About Dr Fahm
                  </a>
                </li>
                <li><a href="mailto:info@drfahm.com">Contact</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a
                    href="/privacy"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/privacy');
                    }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/terms');
                    }}
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Dr Fahm. All rights reserved.</p>
            <div className="footer-meta">
              <span>Built for Saudi Arabia</span>
              <span className="footer-separator">•</span>
              <span>Aligned with Vision 2030</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;