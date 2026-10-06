import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

const defaultSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git'];

const quizQuestions = [
  { q: "Which of the following is used for styling web pages?", opts: ["HTML", "JQuery", "CSS", "XML"], ans: "CSS" },
  { q: "What does API stand for?", opts: ["Application Programming Interface", "Applied Program Integration", "Automated Process Interface", "Application Platform Interface"], ans: "Application Programming Interface" },
  { q: "Which data structure uses LIFO (Last In First Out)?", opts: ["Queue", "Stack", "Tree", "Graph"], ans: "Stack" },
  { q: "What command is used to commit changes in Git?", opts: ["git push", "git save", "git commit", "git add"], ans: "git commit" },
  { q: "Which SQL statement is used to extract data from a database?", opts: ["GET", "EXTRACT", "PULL", "SELECT"], ans: "SELECT" },
  { q: "Which language is heavily used for Data Analysis and ML?", opts: ["Java", "C++", "Python", "Swift"], ans: "Python" },
  { q: "What does UI stand for in UI/UX?", opts: ["User Interface", "User Integration", "Universal Interface", "Unified Information"], ans: "User Interface" },
  { q: "Which tag is used to create a hyperlink in HTML?", opts: ["<link>", "<a>", "<href>", "<hyper>"], ans: "<a>" },
  { q: "What is the average time complexity of binary search?", opts: ["O(n)", "O(1)", "O(log n)", "O(n^2)"], ans: "O(log n)" },
  { q: "Which of the following is a popular NoSQL database?", opts: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"], ans: "MongoDB" },
];

const SkillAssessment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role || { title: 'Frontend Developer', skills: defaultSkills };

  const [levels, setLevels] = useState({});
  
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleLevelSelect = (skill, level) => {
    setLevels(prev => ({ ...prev, [skill]: level }));
  };

  const handleOptionSelect = (opt) => {
    if (selectedOption !== null) return; // Prevent multiple selections
    setSelectedOption(opt);
    
    if (opt === quizQuestions[currentQIndex].ans) {
      setQuizScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQIndex < quizQuestions.length - 1) {
        setCurrentQIndex(prev => prev + 1);
        setSelectedOption(null);
      } else {
        setQuizFinished(true);
      }
    }, 1500);
  };

  if (showQuiz) {
    if (quizFinished) {
      const percentage = Math.round((quizScore / quizQuestions.length) * 100);
      let overallLevel = "Beginner";
      if (percentage >= 80) overallLevel = "Advanced";
      else if (percentage >= 50) overallLevel = "Intermediate";

      return (
        <div style={{ maxWidth: '600px', margin: '0 auto', paddingTop: '40px' }}>
          <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
            <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--primary)', marginBottom: '8px' }}>
              Assessment Score: {percentage}%
            </div>
            <div style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '32px' }}>
              Estimated Level: <strong style={{ color: 'var(--text-main)' }}>{overallLevel}</strong>
            </div>
            <button className="btn btn-primary" onClick={() => navigate('/gps-setup', { state: { role, levels } })} style={{ width: '100%' }}>
              View My Skill Gap <ArrowRight size={18} />
            </button>
          </div>
        </div>
      );
    }

    const q = quizQuestions[currentQIndex];
    const isAnswered = selectedOption !== null;

    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', paddingTop: '40px' }}>
        <h1 className="page-title">Validate your skills</h1>
        <p className="page-subtitle">Question {currentQIndex + 1} of {quizQuestions.length}</p>
        
        <div className="card">
          <h3 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: '500' }}>
            {q.q}
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {q.opts.map(opt => {
              let bg = 'var(--card-bg)';
              let border = 'var(--border-color)';
              let color = 'inherit';

              if (isAnswered) {
                if (opt === q.ans) {
                  bg = 'var(--success-bg)';
                  border = 'var(--success)';
                  color = 'var(--success)';
                } else if (opt === selectedOption) {
                  bg = 'var(--danger-bg)';
                  border = 'var(--danger)';
                  color = 'var(--danger)';
                }
              }

              return (
                <button 
                  key={opt}
                  className="btn btn-secondary"
                  disabled={isAnswered}
                  style={{ 
                    justifyContent: 'flex-start', 
                    padding: '16px',
                    backgroundColor: bg,
                    borderColor: border,
                    color: color,
                    opacity: isAnswered && opt !== q.ans && opt !== selectedOption ? 0.5 : 1
                  }}
                  onClick={() => handleOptionSelect(opt)}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: selectedOption === q.ans ? 'var(--success)' : 'var(--danger)', fontWeight: '600' }}>
              {selectedOption === q.ans ? <><CheckCircle2 size={20} /> Correct</> : <><XCircle size={20} /> Incorrect</>}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="page-title">Let's understand what you already know.</h1>
      <p className="page-subtitle">Assess your current proficiency for the {role.title} role.</p>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <span style={{ fontWeight: '600', color: 'var(--primary)' }}>Step 2 of 4</span>
        <div style={{ display: 'flex', gap: '4px' }}>
          <div style={{ width: '40px', height: '6px', borderRadius: '4px', background: 'var(--primary)' }}></div>
          <div style={{ width: '40px', height: '6px', borderRadius: '4px', background: 'var(--primary)' }}></div>
          <div style={{ width: '40px', height: '6px', borderRadius: '4px', background: 'var(--border-color)' }}></div>
          <div style={{ width: '40px', height: '6px', borderRadius: '4px', background: 'var(--border-color)' }}></div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
        {role.skills.map(skill => (
          <div key={skill} className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', width: '120px' }}>{skill}</h3>
            
            <div style={{ display: 'flex', gap: '8px' }}>
              {['Not familiar', 'Beginner', 'Intermediate', 'Advanced'].map(level => (
                <button
                  key={level}
                  className={`btn ${levels[skill] === level ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '8px 16px', fontSize: '13px' }}
                  onClick={() => handleLevelSelect(skill, level)}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
        <button className="btn btn-secondary" onClick={() => setShowQuiz(true)}>Take Quick Quiz</button>
        <button className="btn btn-primary" onClick={() => navigate('/gps-setup', { state: { role, levels } })} style={{ padding: '12px 32px' }}>
          Continue <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default SkillAssessment;
