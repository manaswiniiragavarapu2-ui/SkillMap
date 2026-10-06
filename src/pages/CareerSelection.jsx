import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Server, Database, BarChart, LineChart, Brain, Cloud, PenTool, Search, ArrowRight } from 'lucide-react';

const careers = [
  { id: 'frontend', title: 'Frontend Developer', desc: 'Build and maintain responsive and interactive web applications.', icon: <Code size={24} />, skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'] },
  { id: 'backend', title: 'Backend Developer', desc: 'Develop server-side logic, APIs, and manage databases.', icon: <Server size={24} />, skills: ['Java', 'Node.js', 'APIs', 'Databases', 'Git'] },
  { id: 'software', title: 'Software Developer', desc: 'Design, build, and maintain general software systems.', icon: <Database size={24} />, skills: ['Programming', 'DSA', 'OOP', 'DBMS', 'Git'] },
  { id: 'data-analyst', title: 'Data Analyst', desc: 'Analyze data and create visualizations to help businesses.', icon: <BarChart size={24} />, skills: ['Python', 'SQL', 'Excel', 'Power BI', 'Statistics'] },
  { id: 'data-scientist', title: 'Data Scientist', desc: 'Extract insights from data using statistical methods.', icon: <LineChart size={24} />, skills: ['Python', 'Statistics', 'Machine Learning', 'SQL'] },
  { id: 'ai-ml', title: 'AI/ML Engineer', desc: 'Build machine learning models and AI systems.', icon: <Brain size={24} />, skills: ['Python', 'Machine Learning', 'Deep Learning', 'Mathematics'] },
  { id: 'cloud', title: 'Cloud Engineer', desc: 'Manage and maintain cloud infrastructure and services.', icon: <Cloud size={24} />, skills: ['AWS', 'Linux', 'Networking', 'Docker'] },
  { id: 'ui-ux', title: 'UI/UX Designer', desc: 'Design user interfaces and improve user experiences.', icon: <PenTool size={24} />, skills: ['Figma', 'UX Research', 'Wireframing', 'Prototyping'] },
];

const CareerSelection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCareers = careers.filter(c => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <h1 className="page-title">What do you want to become?</h1>
      <p className="page-subtitle">Choose a target role and we'll show you exactly what it takes to get there.</p>

      <div style={{ marginBottom: '32px', position: 'relative', maxWidth: '400px' }}>
        <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        <input 
          type="text" 
          placeholder="Search for a job role..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ 
            width: '100%', 
            padding: '12px 16px 12px 48px', 
            borderRadius: 'var(--radius-md)', 
            border: '1px solid var(--border-color)',
            fontSize: '14px',
            fontFamily: 'inherit'
          }}
        />
      </div>

      <div className="grid-3">
        {filteredCareers.map(career => (
          <div key={career.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ background: 'var(--secondary)', color: 'var(--primary)', padding: '12px', borderRadius: 'var(--radius-md)' }}>
                {career.icon}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '600' }}>{career.title}</h3>
            </div>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px', flex: 1 }}>
              {career.desc}
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {career.skills.map(skill => (
                <span key={skill} className="badge badge-neutral">{skill}</span>
              ))}
            </div>
            
            <button 
              className="btn btn-secondary" 
              style={{ width: '100%', justifyContent: 'space-between' }}
              onClick={() => navigate('/assessment', { state: { role: { id: career.id, title: career.title, desc: career.desc, skills: career.skills } } })}
            >
              View Skill Requirements <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerSelection;
