import { Edit2, GraduationCap, Clock, BookOpen, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  let currentUser = { name: 'Guest', initial: 'G' };
  try {
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      const user = JSON.parse(userStr);
      currentUser.name = user.name;
      currentUser.initial = user.name.charAt(0).toUpperCase();
    }
  } catch (e) {
    // Ignore error
  }

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '32px', marginBottom: '32px', padding: '40px' }}>
        <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', fontWeight: '700' }}>
          {currentUser.initial}
        </div>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '4px' }}>{currentUser.name}</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <GraduationCap size={18} /> Student &bull; M.Tech
          </p>
        </div>
        <button className="btn btn-secondary" style={{ marginLeft: 'auto' }}>
          <Edit2 size={16} /> Edit Profile
        </button>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Career Preferences</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '4px' }}>Target Role</p>
              <p style={{ fontWeight: '600', fontSize: '16px' }}>Frontend Developer</p>
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '4px' }}>Expected Graduation</p>
              <p style={{ fontWeight: '600', fontSize: '16px' }}>2025</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Learning Settings</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={14} /> Learning Time
              </p>
              <p style={{ fontWeight: '600', fontSize: '16px' }}>1–2 hours/day</p>
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <BookOpen size={14} /> Preferred Learning Style
              </p>
              <p style={{ fontWeight: '600', fontSize: '16px' }}>Video + Projects</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
        <button 
          className="btn btn-secondary" 
          style={{ color: 'var(--danger)', borderColor: 'var(--danger-bg)', padding: '12px 24px' }} 
          onClick={handleLogout}
        >
          <LogOut size={16} /> Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
