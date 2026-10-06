import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Code, Edit3, ArrowRight, CheckCircle2, ChevronRight, Info, Trophy, Server, Database, BarChart, LineChart, Brain, Cloud, PenTool, Compass, Calendar, Zap, AlertTriangle, ShieldCheck, Map, Clock, MessageCircle } from 'lucide-react';

const iconMap = {
  'frontend developer': <Code size={24} />,
  'backend developer': <Server size={24} />,
  'software developer': <Database size={24} />,
  'data analyst': <BarChart size={24} />,
  'data scientist': <LineChart size={24} />,
  'ai/ml engineer': <Brain size={24} />,
  'cloud engineer': <Cloud size={24} />,
  'ui/ux designer': <PenTool size={24} />,
};

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const defaultRole = {
    title: 'Frontend Developer',
    desc: 'Build and maintain responsive and interactive web applications.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git']
  };

  const role = location.state?.role || defaultRole;
  const userLevels = location.state?.levels || {};
  const schedule = location.state?.schedule || {
    hoursPerDay: 1.5,
    targetDate: '2027-03-01',
    hasExams: true,
    examStart: '2026-12-10',
    examEnd: '2026-12-20'
  };

  const [simulatorHours, setSimulatorHours] = useState(schedule.hoursPerDay);

  const skillsData = role.skills.map((skillName, index) => {
    const reqLevels = ['Intermediate', 'Advanced', 'Intermediate', 'Advanced', 'Beginner'];
    const reqLevel = reqLevels[index % reqLevels.length];
    const myLevel = userLevels[skillName] || 'Beginner';

    let score = 1;
    let status = 'Major Gap';
    let bg = 'var(--danger-bg)';
    let color = 'var(--danger)';

    if (myLevel === reqLevel || myLevel === 'Advanced' || (myLevel === 'Intermediate' && reqLevel === 'Beginner')) {
      score = 5; status = 'Ready'; bg = 'var(--success-bg)'; color = 'var(--success)';
    } else if ((myLevel === 'Intermediate' && reqLevel === 'Advanced') || (myLevel === 'Beginner' && reqLevel === 'Intermediate')) {
      score = 3; status = 'Improve'; bg = 'var(--warning-bg)'; color = 'var(--warning)';
    } else if (myLevel === 'Beginner' && reqLevel === 'Beginner') {
      score = 5; status = 'Ready'; bg = 'var(--success-bg)'; color = 'var(--success)';
    }

    return { id: skillName.toLowerCase().replace(/\s+/g, '_'), name: skillName, myLevel, reqLevel, status, score, bg, color };
  });

  const skillROI = skillsData
    .filter(s => s.score < 5)
    .sort((a, b) => a.score - b.score)
    .map((s, index) => ({
      ...s,
      roi: s.score <= 2 ? `+${10 + (index * 2)}%` : `+${4 + index}%`,
      time: s.score <= 2 ? '~30 hours' : '~15 hours',
      unlocks: s.score <= 2 ? 'Projects, Interviews, APIs' : 'Basic tasks, Workflow',
      prereq: index === 0 ? 'None' : skillsData[index-1]?.name || 'None'
    }));

  const readyCount = skillsData.filter(s => s.status === 'Ready').length;
  const improveCount = skillsData.filter(s => s.status === 'Improve').length;
  const gapCount = skillsData.filter(s => s.status === 'Major Gap').length;

  const totalScore = skillsData.reduce((acc, curr) => acc + curr.score, 0);
  const maxScore = skillsData.length * 5;
  const matchPercentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

  const roleIcon = iconMap[role.title.toLowerCase()] || <Code size={24} />;

  const baselineDate = new Date('2027-05-18');
  if (simulatorHours == 1) baselineDate.setMonth(baselineDate.getMonth() - 2);
  if (simulatorHours >= 1.5) baselineDate.setMonth(baselineDate.getMonth() - 3);
  if (simulatorHours >= 2) baselineDate.setMonth(baselineDate.getMonth() - 4);
  if (simulatorHours >= 3) baselineDate.setMonth(baselineDate.getMonth() - 5);
  const formattedDate = baselineDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="dashboard-layout">
      {/* Left Column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Header Card */}
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{ background: 'var(--secondary)', color: 'var(--primary)', padding: '12px', borderRadius: 'var(--radius-md)' }}>
                {roleIcon}
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: '700' }}>{role.title}</h2>
            </div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px', marginLeft: '60px' }}>
              {role.desc}
            </p>
            <div style={{ display: 'flex', gap: '8px', marginLeft: '60px', flexWrap: 'wrap' }}>
              {role.skills.map(skill => (
                <span key={skill} className="badge badge-neutral">{skill}</span>
              ))}
            </div>
          </div>
          <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }} onClick={() => navigate('/explore')}>
            <Edit3 size={14} /> Change Role
          </button>
        </div>

        {/* Adaptive Roadmap */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Map size={18} color="var(--primary)" /> Adaptive Learning Roadmap
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Generated based on your schedule of {schedule.hoursPerDay} hrs/day.</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
            <div style={{ display: 'flex', gap: '16px', paddingLeft: '8px', borderLeft: '2px solid var(--primary)' }}>
              <div>
                <h4 style={{ fontWeight: '700' }}>Current Focus</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{skillROI[0]?.name || 'Portfolio Projects'}</p>
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <span className="badge badge-primary">Load: {schedule.hoursPerDay * 5} hrs/week</span>
                </div>
              </div>
            </div>

            {schedule.hasExams && (
              <div style={{ display: 'flex', gap: '16px', paddingLeft: '8px', borderLeft: '2px solid var(--warning)' }}>
                <div>
                  <h4 style={{ fontWeight: '700', color: 'var(--warning)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AlertTriangle size={16} /> {new Date(schedule.examStart).toLocaleDateString()} – {new Date(schedule.examEnd).toLocaleDateString()}
                  </h4>
                  <p style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>EXAM MODE</p>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>We've reduced your learning intensity. Only short revision tasks assigned.</p>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: '16px', paddingLeft: '8px', borderLeft: '2px solid var(--border-color)' }}>
              <div>
                <h4 style={{ fontWeight: '700' }}>Next Phase</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{skillROI[1]?.name || 'Interview Prep'}</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '16px', paddingLeft: '8px', borderLeft: '2px solid var(--success)' }}>
              <div>
                <h4 style={{ fontWeight: '700', color: 'var(--success)' }}><Trophy size={16} style={{ display: 'inline', marginRight: '4px' }} /> JOB READY</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Forecasted: {formattedDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skill ROI */}
        <div className="card">
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px' }}>Skill ROI — What Should I Learn First?</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
            Skills ranked by readiness improvement vs learning time.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {skillROI.map((skill, index) => (
              <div key={skill.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: skill.bg, color: skill.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', flexShrink: 0 }}>
                  {index + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h4 style={{ fontWeight: '700', fontSize: '16px' }}>{skill.name}</h4>
                    <span className="badge badge-success" style={{ fontSize: '12px', display: 'flex', gap: '4px' }}>
                      <Zap size={14} /> ROI: {skill.roi} readiness
                    </span>
                  </div>
                  <div className="grid-2" style={{ gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                    <div style={{ display: 'flex', gap: '4px' }}><strong>Time:</strong> {skill.time}</div>
                    <div style={{ display: 'flex', gap: '4px' }}><strong>Prerequisite:</strong> {skill.prereq}</div>
                    <div style={{ gridColumn: 'span 2', display: 'flex', gap: '4px' }}><strong>Unlocks:</strong> {skill.unlocks}</div>
                  </div>
                </div>
              </div>
            ))}
            
            {skillROI.length === 0 && (
              <div style={{ padding: '24px', textAlign: 'center', color: 'var(--success)', fontWeight: '600' }}>
                You have mastered all core skills! Time to build a portfolio.
              </div>
            )}
          </div>
        </div>
        
        {/* What If Simulator */}
        <div className="card">
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
             <Compass size={18} color="var(--primary)" /> What if I change my goal?
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-md)' }}>
             <div>
               <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Current Career</p>
               <h4 style={{ fontWeight: '600' }}>{role.title} &bull; {matchPercentage}%</h4>
             </div>
             <ArrowRight size={20} color="var(--text-muted)" />
             <div style={{ textAlign: 'right' }}>
               <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Alternative Option</p>
               <select className="btn-secondary" style={{ padding: '6px', fontSize: '13px', fontWeight: '600' }}>
                 <option>Data Analyst</option>
                 <option>Backend Developer</option>
               </select>
             </div>
          </div>
          <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Transferable skills: <strong style={{ color: 'var(--text-main)' }}>JavaScript, Git</strong></p>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Estimated transition: <strong style={{ color: 'var(--text-main)' }}>12–16 weeks</strong></p>
             </div>
             <button className="btn btn-outline-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>Compare Careers</button>
          </div>
        </div>

      </div>

      {/* Right Column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Career GPS Forecast */}
        <div className="card" style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #4338CA 100%)', color: 'white' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Compass size={18} /> Career Readiness Forecast
          </h3>
          
          <div style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '4px' }}>Current Readiness</p>
            <div style={{ fontSize: '32px', fontWeight: '800' }}>{matchPercentage}%</div>
          </div>

          <div style={{ marginBottom: '24px', padding: '16px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)' }}>
            <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '4px' }}>Current Trajectory ({simulatorHours} hrs/day)</p>
            <div style={{ fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
               <Calendar size={18} /> {formattedDate}
            </div>
            <p style={{ fontSize: '12px', marginTop: '12px', color: '#818CF8' }}>
              Increase your weekly learning by 1 hour to become job-ready approximately 4 weeks earlier.
            </p>
          </div>
          
          <div>
            <p style={{ fontSize: '12px', opacity: 0.8, marginBottom: '8px' }}>Simulate Learning Commitment:</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
               <button className="btn" style={{ padding: '6px 12px', fontSize: '12px', backgroundColor: simulatorHours == 0.5 ? 'white' : 'transparent', color: simulatorHours == 0.5 ? '#1E1B4B' : 'white', border: '1px solid rgba(255,255,255,0.3)' }} onClick={() => setSimulatorHours(0.5)}>30 min</button>
               <button className="btn" style={{ padding: '6px 12px', fontSize: '12px', backgroundColor: simulatorHours == 1 ? 'white' : 'transparent', color: simulatorHours == 1 ? '#1E1B4B' : 'white', border: '1px solid rgba(255,255,255,0.3)' }} onClick={() => setSimulatorHours(1)}>1 hr</button>
               <button className="btn" style={{ padding: '6px 12px', fontSize: '12px', backgroundColor: simulatorHours == 1.5 ? 'white' : 'transparent', color: simulatorHours == 1.5 ? '#1E1B4B' : 'white', border: '1px solid rgba(255,255,255,0.3)' }} onClick={() => setSimulatorHours(1.5)}>1.5 hrs</button>
               <button className="btn" style={{ padding: '6px 12px', fontSize: '12px', backgroundColor: simulatorHours >= 2 ? 'white' : 'transparent', color: simulatorHours >= 2 ? '#1E1B4B' : 'white', border: '1px solid rgba(255,255,255,0.3)' }} onClick={() => setSimulatorHours(2)}>2+ hrs</button>
            </div>
          </div>
        </div>

        {/* Best Use of 5 Hours */}
        {skillROI.length > 0 && (
          <div className="card" style={{ borderColor: 'var(--warning)', backgroundColor: 'var(--warning-bg)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', color: '#B45309' }}>
              <Zap size={18} /> Best use of your next 5 hours
            </h3>
            
            <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>{skillROI[0].name} Fundamentals</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '16px', color: '#92400E' }}>
              <span>Expected improvement: <strong>{skillROI[0].roi}</strong></span>
              <span>Time: <strong>5 hours</strong></span>
            </div>
            
            <button className="btn btn-primary" style={{ width: '100%', backgroundColor: '#D97706' }} onClick={() => navigate(`/skill/${skillROI[0].id}`)}>
              Start Learning <ArrowRight size={16} />
            </button>
          </div>
        )}


        {/* WhatsApp Reminders */}
        <button 
          className="btn"
          style={{ 
            backgroundColor: '#25D366', 
            color: 'white', 
            width: '100%', 
            padding: '16px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '12px',
            fontSize: '14px',
            fontWeight: '700',
            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
            borderRadius: 'var(--radius-md)'
          }}
          onClick={() => alert("WhatsApp Reminders Enabled!")}
        >
          <MessageCircle size={20} />
          GET REMINDERS
        </button>

      </div>
    </div>
  );
};

export default Dashboard;
