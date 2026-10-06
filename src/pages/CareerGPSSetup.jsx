import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, Clock, BookOpen, Briefcase, ArrowRight } from 'lucide-react';

const CareerGPSSetup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { role, levels } = location.state || {};

  const [schedule, setSchedule] = useState({
    hoursPerDay: 2,
    targetDate: '2027-03-01',
    hasExams: true,
    examStart: '2026-12-10',
    examEnd: '2026-12-20',
    hasInternship: false
  });

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '20px' }}>
      <h1 className="page-title">What does your next few months actually look like?</h1>
      <p className="page-subtitle">We need to know your real-life schedule to build an adaptive roadmap that actually works for you.</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <span style={{ fontWeight: '600', color: 'var(--primary)' }}>Step 3 of 4</span>
        <div style={{ display: 'flex', gap: '4px' }}>
          <div style={{ width: '40px', height: '6px', borderRadius: '4px', background: 'var(--primary)' }}></div>
          <div style={{ width: '40px', height: '6px', borderRadius: '4px', background: 'var(--primary)' }}></div>
          <div style={{ width: '40px', height: '6px', borderRadius: '4px', background: 'var(--primary)' }}></div>
          <div style={{ width: '40px', height: '6px', borderRadius: '4px', background: 'var(--border-color)' }}></div>
        </div>
      </div>

      <div className="grid-2" style={{ marginBottom: '32px' }}>
        <div className="card">
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={18} color="var(--primary)" /> Learning Capacity
          </h3>
          
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>
              Available study time per day
            </label>
            <select 
              className="btn-secondary" 
              style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}
              value={schedule.hoursPerDay}
              onChange={(e) => setSchedule({...schedule, hoursPerDay: e.target.value})}
            >
              <option value="0.5">30 minutes</option>
              <option value="1">1 hour</option>
              <option value="1.5">1.5 hours</option>
              <option value="2">2 hours</option>
              <option value="3">3+ hours</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>
              Target Job-Ready Date
            </label>
            <input 
              type="date" 
              className="btn-secondary"
              style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}
              value={schedule.targetDate}
              onChange={(e) => setSchedule({...schedule, targetDate: e.target.value})}
            />
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={18} color="var(--primary)" /> Upcoming Exams
          </h3>
          
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontSize: '14px', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              checked={schedule.hasExams}
              onChange={(e) => setSchedule({...schedule, hasExams: e.target.checked})}
            />
            I have exams coming up
          </label>

          {schedule.hasExams && (
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Start</label>
                <input type="date" value={schedule.examStart} onChange={(e) => setSchedule({...schedule, examStart: e.target.value})} style={{ width: '100%', padding: '8px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>End</label>
                <input type="date" value={schedule.examEnd} onChange={(e) => setSchedule({...schedule, examEnd: e.target.value})} style={{ width: '100%', padding: '8px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>
        <button 
          className="btn btn-primary" 
          onClick={() => navigate('/dashboard', { state: { role, levels, schedule } })}
          style={{ padding: '12px 32px' }}
        >
          Generate Adaptive Roadmap <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default CareerGPSSetup;
