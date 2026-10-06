import { useNavigate } from 'react-router-dom';
import { Target, ArrowRight } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-color)' }}>
      {/* Simple Header */}
      <header style={{ padding: '12px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--card-bg)', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/logo.jpg" alt="SkillMap Logo" style={{ width: '36px', height: '36px', borderRadius: '8px', objectFit: 'contain' }} />
          SkillMap
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button className="btn btn-secondary" onClick={() => navigate('/login')}>Log In</button>
          <button className="btn btn-primary" onClick={() => navigate('/signup')}>Get Started</button>
        </div>
      </header>

      {/* Hero Section */}
      <main style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        paddingTop: '80px',
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 0 }}></div>
        
        <div className="hero" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>Know Your Gap. Build Your Career.</h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
            Discover the skills you need for your dream career, identify what you're missing, 
            and follow a personalized roadmap to become job-ready.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={() => navigate('/signup')} style={{ padding: '12px 32px', fontSize: '16px' }}>
              Find My Skill Gap <ArrowRight size={20} />
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/signup')} style={{ padding: '12px 32px', fontSize: '16px' }}>
              Explore Career Roles
            </button>
          </div>
        </div>

        {/* Visual Journey */}
        <div style={{ position: 'relative', zIndex: 1, marginTop: '40px', display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.7)', fontWeight: '500' }}>
          <span style={{ color: 'white' }}>Current Skills</span> <ArrowRight size={16} />
          <span>Skill Analysis</span> <ArrowRight size={16} />
          <span>Skill Gaps</span> <ArrowRight size={16} />
          <span>Learning Roadmap</span> <ArrowRight size={16} />
          <span style={{ color: '#4ade80' }}>Job Ready</span>
        </div>

        {/* How it works */}
        <div style={{ position: 'relative', zIndex: 1, marginTop: '100px', maxWidth: '1000px', width: '100%', padding: '0 24px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '28px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>How SkillMap Works</h2>
          <div className="grid-4">
            <div className="card">
              <h3 style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '12px' }}>01</h3>
              <h4 style={{ marginBottom: '8px' }}>Choose Your Goal</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>Select the career or job role you want.</p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '12px' }}>02</h3>
              <h4 style={{ marginBottom: '8px' }}>Assess Your Skills</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>Tell us what you already know or take skill assessments.</p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '12px' }}>03</h3>
              <h4 style={{ marginBottom: '8px' }}>Discover Your Gaps</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>See exactly which skills you're missing.</p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '12px' }}>04</h3>
              <h4 style={{ marginBottom: '8px' }}>Follow Your Roadmap</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>Learn, practice, build projects, and become job-ready.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
