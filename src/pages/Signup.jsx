import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Target, ArrowRight } from 'lucide-react';

const VALID_USERS = [
  { username: 'manaswini', password: 'Mana@1234' },
  { username: 'sandeep', password: 'Sand@1234' },
  { username: 'dora', password: 'Dora@1234' },
  { username: 'bujji', password: 'Bujji@1234' },
];

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    
    // We restrict signups to only the pre-approved list for this prototype
    const validUser = VALID_USERS.find(
      user => user.username === username.toLowerCase() && user.password === password
    );

    if (validUser) {
      setError('');
      localStorage.setItem('currentUser', JSON.stringify({ name: validUser.username.charAt(0).toUpperCase() + validUser.username.slice(1), username: validUser.username }));
      navigate('/explore');
    } else {
      setError('Registration is restricted. Please use provided credentials.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', backgroundColor: 'var(--bg-color)' }}>
      {/* Left side - Branding */}
      <div style={{ flex: 1, backgroundColor: 'var(--primary)', color: 'white', display: 'flex', flexDirection: 'column', padding: '40px' }}>
        <div style={{ fontSize: '24px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => navigate('/')}>
          <img src="/logo.jpg" alt="SkillMap Logo" style={{ width: '36px', height: '36px', borderRadius: '8px', objectFit: 'contain' }} />
          SkillMap
        </div>
        <div style={{ margin: 'auto 0' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '24px', letterSpacing: '-1px' }}>Start your journey.</h1>
          <p style={{ fontSize: '20px', opacity: 0.8, maxWidth: '400px', lineHeight: '1.5' }}>
            Identify your skill gaps and get a personalized roadmap to land your dream job.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
        <div className="card" style={{ width: '100%', maxWidth: '440px', padding: '40px', boxShadow: 'var(--shadow-lg)' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>Create an Account</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Join SkillMap and build your career.</p>

          <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {error && (
              <div style={{ padding: '12px', backgroundColor: 'var(--danger-bg)', color: 'var(--danger)', borderRadius: 'var(--radius-md)', fontSize: '14px', fontWeight: '500' }}>
                {error}
              </div>
            )}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>Full Name</label>
              <input 
                type="text" 
                placeholder="Manaswini" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '14px', fontFamily: 'inherit', outline: 'none' }}
              />
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>Username</label>
              <input 
                type="text" 
                placeholder="manaswini" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '14px', fontFamily: 'inherit', outline: 'none' }}
              />
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '14px', fontFamily: 'inherit', outline: 'none' }}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ padding: '14px', marginTop: '8px', fontSize: '16px' }}>
              Sign Up <ArrowRight size={18} />
            </button>
            
            <button 
              type="button" 
              className="btn btn-secondary" 
              style={{ padding: '14px', marginTop: '4px', fontSize: '16px' }}
              onClick={() => {
                localStorage.setItem('currentUser', JSON.stringify({ name: 'Guest', username: 'guest' }));
                navigate('/explore');
              }}
            >
              Continue as Guest
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '32px', fontSize: '14px', color: 'var(--text-muted)' }}>
            Already have an account? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: '600' }}>Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
