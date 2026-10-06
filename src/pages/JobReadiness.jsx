import { ArrowRight, AlertTriangle, Target, MessageCircle, FileText, ShieldCheck, CheckCircle2 } from 'lucide-react';

const JobReadiness = () => {
  const scores = [
    { label: 'Technical Skills', score: 82, icon: <Target size={20} color="var(--primary)" /> },
    { label: 'Projects', score: 70, icon: <Target size={20} color="var(--primary)" /> },
    { label: 'Problem Solving', score: 65, icon: <AlertTriangle size={20} color="var(--warning)" /> },
    { label: 'Communication', score: 85, icon: <MessageCircle size={20} color="var(--success)" /> },
    { label: 'Resume', score: 90, icon: <FileText size={20} color="var(--success)" /> },
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="page-title">Are you job ready?</h1>
      <p className="page-subtitle">Your comprehensive readiness score based on skills, projects, and interview prep.</p>
      
      <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '40px', padding: '40px', marginBottom: '32px' }}>
        <div className="circular-progress" style={{ '--percentage': 78, width: '160px', height: '160px' }}>
          <div className="circular-progress-value" style={{ fontSize: '40px' }}>78%</div>
        </div>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>Job Readiness</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>
            You have a solid foundation. Focus on bridging the remaining gaps to become highly competitive.
          </p>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Readiness Breakdown</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {scores.map(s => (
              <div key={s.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500' }}>
                    {s.icon} {s.label}
                  </div>
                  <span style={{ fontWeight: '600' }}>{s.score}%</span>
                </div>
                <div className="progress-bar-container">
                  <div className={`progress-bar-fill ${
                      s.score >= 80 ? 'progress-success' : s.score >= 60 ? 'progress-primary' : 'progress-warning'
                    }`} style={{ width: `${s.score}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ background: 'var(--secondary)', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: 'var(--primary)' }}>
            You're getting close!
          </h3>
          <p style={{ color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '32px', flex: 1 }}>
            Complete one more React project, improve DSA problem-solving, and practice technical interviews.
          </p>
          <button className="btn btn-primary" style={{ width: '100%' }}>
            View Recommended Actions <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid-2" style={{ marginTop: '32px' }}>
        {/* Proof of Skill */}
        <div className="card">
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={18} color="var(--success)" /> Can you prove it?
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
            Completing a course is not enough. Employers need proof.
          </p>
          
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontWeight: '600', fontSize: '14px' }}>JavaScript Confidence: 40%</span>
              <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--primary)' }}>Proof: 2/5</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill progress-primary" style={{ width: '40%' }}></div>
            </div>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success)' }}><CheckCircle2 size={16} /> Completed course</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success)' }}><CheckCircle2 size={16} /> Passed skill assessment</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}><span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', border: '2px solid var(--border-color)', margin: '0 2px' }}></span> Built a project</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}><span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', border: '2px solid var(--border-color)', margin: '0 2px' }}></span> GitHub repository</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}><span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', border: '2px solid var(--border-color)', margin: '0 2px' }}></span> Explained the project</li>
          </ul>
        </div>
        
        {/* Roadmap Rescue */}
        <div className="card" style={{ borderColor: 'var(--danger)', borderLeft: '4px solid var(--danger)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px', color: 'var(--danger)' }}>
            Your roadmap needs adjustment
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--text-main)', marginBottom: '16px' }}>
            You are currently 5 hours behind schedule.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button className="btn btn-secondary" style={{ fontSize: '12px', justifyContent: 'flex-start', padding: '10px' }}>
              ⚡ <strong>Catch Up:</strong> Add 1 hr/day for a week
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '12px', justifyContent: 'flex-start', padding: '10px' }}>
              🧘 <strong>Reduce Load:</strong> Extend roadmap by 1 week
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '12px', justifyContent: 'flex-start', padding: '10px' }}>
              🎯 <strong>Prioritize:</strong> Skip low-impact tasks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobReadiness;
