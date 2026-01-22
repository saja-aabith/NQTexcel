import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './marketing.css';

function FAQPage() {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState('parents');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section);
  };

  const FAQItem = ({ question, answer }) => (
    <div style={{ 
      background: 'var(--glass-bg)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '24px',
      marginBottom: '16px'
    }}>
      <h3 style={{ 
        fontSize: '18px',
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--text-primary)',
        marginBottom: '12px'
      }}>
        {question}
      </h3>
      <p style={{ 
        fontSize: '16px',
        color: 'var(--text-tertiary)',
        margin: 0,
        lineHeight: '1.6'
      }}>
        {answer}
      </p>
    </div>
  );

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
            Frequently asked questions
          </h1>
          
          <p className="page-subtitle">
            Common questions about Dr Fahm, diagnostics, and readiness preparation.
          </p>

          <p className="page-body">
            Can't find what you're looking for? <span 
              onClick={() => navigate('/contact')}
              style={{ 
                color: 'var(--accent-primary)', 
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Contact us
            </span> and we'll help.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="content-section">
        <div className="content-container-narrow">
          {/* Section Tabs */}
          <div style={{ 
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            marginBottom: '48px',
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={() => setOpenSection('parents')}
              className={openSection === 'parents' ? 'btn-cta-primary' : 'btn-nav-secondary'}
              style={{ padding: '12px 24px' }}
            >
              For Parents
            </button>
            <button 
              onClick={() => setOpenSection('students')}
              className={openSection === 'students' ? 'btn-cta-primary' : 'btn-nav-secondary'}
              style={{ padding: '12px 24px' }}
            >
              For Students
            </button>
            <button 
              onClick={() => setOpenSection('schools')}
              className={openSection === 'schools' ? 'btn-cta-primary' : 'btn-nav-secondary'}
              style={{ padding: '12px 24px' }}
            >
              For Schools
            </button>
          </div>

          {/* Parents FAQs */}
          {openSection === 'parents' && (
            <div>
              <h2 className="section-title" style={{ marginBottom: '32px' }}>
                For Parents
              </h2>

              <FAQItem 
                question="How do I know if my child needs Dr Fahm?"
                answer="If you're unsure where your child stands in preparation for Qudurat, Tahsili, or NAFS, a diagnostic gives clarity. It's particularly useful if your child is studying but you're not confident effort is translating to readiness."
              />

              <FAQItem 
                question="Will my child's results be visible to others?"
                answer="No. Dr Fahm operates on private readiness tracking. There are no public leaderboards, no rankings, and no comparison with other students. Readiness data stays private unless you choose to share it."
              />

              <FAQItem 
                question="Is this a replacement for tutoring?"
                answer="No. Dr Fahm is a diagnostic and preparation platform, not a tutoring service. It helps identify gaps and provides structured practice, but it doesn't replace personalized instruction where needed."
              />

              <FAQItem 
                question="How much time does my child need to spend on the platform?"
                answer="This depends on diagnostic results and how much readiness needs to improve. Most students use Dr Fahm for 30-60 minutes per session, 3-4 times per week. The platform adapts to your child's schedule."
              />

              <FAQItem 
                question="What if my child is already scoring well on practice tests?"
                answer="High practice scores don't always indicate readiness under real exam conditions. Diagnostics reveal whether performance comes from genuine understanding or pattern recognition from repeated practice."
              />

              <FAQItem 
                question="Can I track my child's progress?"
                answer="Yes. Parents have visibility into readiness signals, completed practice, and progress over time. You'll understand whether preparation is on track or needs adjustment."
              />

              <FAQItem 
                question="Is Dr Fahm aligned with the Saudi curriculum?"
                answer="Yes. Dr Fahm is specifically designed for Saudi national assessments — Qudurat, Tahsili, and NAFS. All content, diagnostics, and pathways are aligned to what these assessments measure."
              />

              <FAQItem 
                question="What if my child gets frustrated or discouraged?"
                answer="Dr Fahm is designed to reduce pressure, not create it. There are no comparisons with others, no public rankings, and no performance pressure. Progress is measured against readiness, not against peers."
              />
            </div>
          )}

          {/* Students FAQs */}
          {openSection === 'students' && (
            <div>
              <h2 className="section-title" style={{ marginBottom: '32px' }}>
                For Students
              </h2>

              <FAQItem 
                question="Why should I do a diagnostic?"
                answer="A diagnostic shows where you actually stand before you start practicing. It prevents wasting time on topics you already know and helps you focus on what will meaningfully improve your readiness."
              />

              <FAQItem 
                question="Is the diagnostic timed?"
                answer="Yes. The diagnostic simulates real exam conditions to assess not just knowledge but also time control and decision-making under pressure. This reveals readiness more accurately than untimed practice."
              />

              <FAQItem 
                question="What if I don't do well on the diagnostic?"
                answer="That's the point. The diagnostic is meant to reveal gaps before they matter. Low diagnostic results aren't a failure — they're information you can act on before the real exam."
              />

              <FAQItem 
                question="Can I retake the diagnostic?"
                answer="Yes, but we recommend waiting until you've completed some focused practice. Retaking immediately doesn't improve readiness — it just familiarizes you with the diagnostic questions."
              />

              <FAQItem 
                question="Will my scores be shown to anyone?"
                answer="No. Your readiness data is private. Dr Fahm doesn't have public leaderboards or rankings. Progress is measured against your own baseline, not against other students."
              />

              <FAQItem 
                question="How is this different from just practicing old exams?"
                answer="Old exams show you what questions look like but don't diagnose why you get things wrong. Dr Fahm identifies whether errors come from knowledge gaps, time pressure, or misunderstanding question types."
              />

              <FAQItem 
                question="What if I'm already confident about my preparation?"
                answer="Confidence and readiness aren't the same. Many students feel prepared but struggle under real exam conditions. A diagnostic reveals whether confidence is backed by actual readiness."
              />

              <FAQItem 
                question="Can I use this on my phone?"
                answer="Yes. Dr Fahm works on mobile, tablet, and desktop. You can practice anywhere, though we recommend using a larger screen for the diagnostic to simulate exam conditions."
              />
            </div>
          )}

          {/* Schools FAQs */}
          {openSection === 'schools' && (
            <div>
              <h2 className="section-title" style={{ marginBottom: '32px' }}>
                For Schools
              </h2>

              <FAQItem 
                question="Why do schools need a readiness platform?"
                answer="Parents increasingly expect schools to prepare students systematically for Qudurat, Tahsili, and NAFS. Without a consistent framework, preparation is inconsistent and accountability becomes difficult."
              />

              <FAQItem 
                question="How does Dr Fahm integrate with existing curriculum?"
                answer="Dr Fahm operates outside regular classroom hours. Students access the platform independently for diagnostics and practice. Schools manage oversight through dashboards without restructuring curriculum."
              />

              <FAQItem 
                question="What does implementation require from teachers?"
                answer="Minimal involvement. Teachers don't deliver content or manage daily practice. Implementation requires initial setup, occasional check-ins, and reviewing cohort progress reports."
              />

              <FAQItem 
                question="Can we pilot Dr Fahm with one year group first?"
                answer="Yes. We recommend starting with a pilot cohort to validate fit and measure impact before scaling. Most schools begin with a single year group or section."
              />

              <FAQItem 
                question="What visibility do school leaders get?"
                answer="School leaders receive cohort-level dashboards showing readiness trends, progress over time, and areas requiring intervention. Individual student data is also accessible for targeted support."
              />

              <FAQItem 
                question="How is school pricing structured?"
                answer="Pricing is cohort-based and scales with student numbers. We provide custom quotes based on school size, year groups, and implementation scope. Contact our schools team for details."
              />

              <FAQItem 
                question="What support do schools receive during implementation?"
                answer="Schools receive onboarding support, training for key stakeholders, technical setup assistance, and ongoing support from our schools team. Implementation is guided, not self-service."
              />

              <FAQItem 
                question="Can parents see their child's progress?"
                answer="Yes. Parents receive readiness updates through the platform. This reduces ad-hoc parent enquiries and demonstrates that the school is managing readiness proactively."
              />

              <FAQItem 
                question="Is Dr Fahm suitable for both private and public schools?"
                answer="Yes. Dr Fahm is designed to work in any school setting — private, public, international, or national curriculum. Implementation adapts to institutional context and resources."
              />
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="content-section bg-slate">
        <div className="content-container-narrow text-content">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>
            Still have questions?
          </h2>

          <p className="section-body" style={{ 
            fontSize: '18px', 
            color: 'var(--text-secondary)',
            textAlign: 'center'
          }}>
            If your question isn't answered here, reach out. We respond to all enquiries, 
            typically within 24 hours.
          </p>

          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '40px',
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={() => navigate('/contact')} 
              className="btn-cta-primary"
            >
              Contact Us
            </button>

            <button 
              onClick={() => navigate('/start')} 
              className="btn-nav-secondary"
              style={{ padding: '16px 32px' }}
            >
              Try the Platform
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="content-container-narrow">
          <h2 className="cta-title">
            Ready to start?
          </h2>
          
          <p className="cta-body">
            Experience Dr Fahm through the diagnostic. See how readiness assessment works. 
            Decide if it's right for you.
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

export default FAQPage;