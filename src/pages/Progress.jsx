import { CheckCircle2, Circle, RefreshCw, Trophy } from 'lucide-react';

const Progress = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="page-title">Your Progress</h1>
      <p className="page-subtitle">Track your learning journey and skill improvements.</p>
      
      <div className="grid-2">
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
          <div className="circular-progress" style={{ '--percentage': 42, width: '160px', height: '160px', marginBottom: '16px' }}>
            <div className="circular-progress-value" style={{ fontSize: '40px' }}>42%</div>
          </div>
          <h2 style={{ fontSize: '18px', fontWeight: '700' }}>Roadmap Completed</h2>
        </div>
        
        <div className="card">
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px' }}>Roadmap Modules</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CheckCircle2 size={20} color="var(--success)" />
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>JavaScript Fundamentals</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CheckCircle2 size={20} color="var(--success)" />
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>DOM Manipulation</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <RefreshCw size={20} color="var(--primary)" />
              <span style={{ fontWeight: '600' }}>React Fundamentals</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Circle size={20} color="var(--text-muted)" />
              <span>REST APIs</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Circle size={20} color="var(--text-muted)" />
              <span>Testing</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Circle size={20} color="var(--text-muted)" />
              <span>Portfolio Project</span>
            </div>
          </div>
        </div>
      </div>

      <h2 style={{ fontSize: '20px', fontWeight: '700', margin: '40px 0 20px' }}>Skill Improvement Chart</h2>
      <div className="card">
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontWeight: '600' }}>JavaScript</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Before: 40% &rarr; <strong style={{ color: 'var(--text-main)' }}>Now: 80%</strong></span>
          </div>
          <div className="progress-bar-container" style={{ height: '12px', background: 'var(--warning-bg)' }}>
            <div className="progress-bar-fill progress-success" style={{ width: '80%' }}></div>
          </div>
        </div>
        
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontWeight: '600' }}>React</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Before: 20% &rarr; <strong style={{ color: 'var(--text-main)' }}>Now: 45%</strong></span>
          </div>
          <div className="progress-bar-container" style={{ height: '12px', background: 'var(--danger-bg)' }}>
            <div className="progress-bar-fill progress-primary" style={{ width: '45%' }}></div>
          </div>
        </div>
      </div>

      <h2 style={{ fontSize: '20px', fontWeight: '700', margin: '40px 0 20px' }}>Recent Achievements</h2>
      <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'linear-gradient(to right, #FFFBEB, #FFFFFF)', borderColor: 'var(--warning-bg)' }}>
        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--warning-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Trophy size={32} color="var(--warning)" />
        </div>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px' }}>First Skill Completed</h3>
          <p style={{ color: 'var(--text-muted)' }}>You completed your first roadmap skill. Keep up the great work!</p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
