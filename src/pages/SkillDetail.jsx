import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, PlayCircle, Code } from 'lucide-react';

const SkillDetail = () => {
  const { skillName } = useParams();
  const navigate = useNavigate();

  const formattedSkillName = skillName === 'rest_api' ? 'REST APIs' : skillName.charAt(0).toUpperCase() + skillName.slice(1);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <button 
        className="btn" 
        style={{ padding: 0, color: 'var(--text-muted)', marginBottom: '24px' }} 
        onClick={() => navigate('/dashboard')}
      >
        <ArrowLeft size={16} /> Back to Dashboard
      </button>

      <div className="card" style={{ marginBottom: '32px' }}>
        <h1 className="page-title">{formattedSkillName}</h1>
        
        <div className="grid-3" style={{ marginTop: '24px' }}>
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '4px' }}>Current level</p>
            <p style={{ fontWeight: '600', fontSize: '16px' }}>Beginner</p>
          </div>
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '4px' }}>Required level</p>
            <p style={{ fontWeight: '600', fontSize: '16px' }}>Advanced</p>
          </div>
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '4px' }}>Gap</p>
            <span className="badge badge-danger">High</span>
          </div>
        </div>
      </div>

      <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>What You Need to Learn</h2>
      
      <div className="grid-3" style={{ marginBottom: '40px' }}>
        <div className="card">
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Fundamentals</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></div>JSX</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></div>Components</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></div>Props</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></div>State</li>
          </ul>
        </div>
        <div className="card">
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Intermediate</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-muted)' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--border-color)' }}></div>Hooks</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-muted)' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--border-color)' }}></div>Routing</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-muted)' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--border-color)' }}></div>API Integration</li>
          </ul>
        </div>
        <div className="card">
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Advanced</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-muted)' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--border-color)' }}></div>State Management</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-muted)' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--border-color)' }}></div>Performance</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-muted)' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--border-color)' }}></div>Testing</li>
          </ul>
        </div>
      </div>

      <div className="grid-2">
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>Recommended Learning</h2>
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <PlayCircle size={32} color="var(--primary)" />
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '600' }}>{formattedSkillName} Fundamentals</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Beginner → Intermediate &bull; 8 hours</p>
              </div>
            </div>
            <button className="btn btn-primary" style={{ width: '100%' }}>Start Learning →</button>
          </div>
        </div>
        
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>Practice Project</h2>
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Code size={32} color="var(--primary)" />
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Build a Todo Application</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Difficulty: 2/5</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span className="badge badge-neutral">{formattedSkillName}</span>
              <span className="badge badge-neutral">Components</span>
              <span className="badge badge-neutral">State</span>
            </div>
            <button className="btn btn-secondary" style={{ width: '100%' }}>Start Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;
