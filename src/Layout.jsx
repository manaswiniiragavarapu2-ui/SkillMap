import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Home, Target, Compass, Map, TrendingUp, User, Search, Bell, ChevronDown } from 'lucide-react';
import './index.css';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  const navItems = [
    { name: 'Home', path: '/explore', icon: <Home size={20} /> },
    { name: 'My Skill Gap', path: '/dashboard', icon: <Target size={20} /> },
    { name: 'My Roadmap', path: '/job-readiness', icon: <Map size={20} /> },
    { name: 'Progress', path: '/progress', icon: <TrendingUp size={20} /> },
    { name: 'Profile', path: '/profile', icon: <User size={20} /> },
  ];

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src="/logo.jpg" alt="SkillMap Logo" style={{ width: '32px', height: '32px', borderRadius: '8px', objectFit: 'contain' }} />
          SkillMap
        </div>
        
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `nav-item ${isActive || (item.path === '/dashboard' && location.pathname.includes('/skill')) ? 'active' : ''}`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-motivational">
          <h4>Better skills.<br />Bigger dreams.</h4>
          <p>Your career journey starts here.</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="top-header">
          <div className="search-bar">
            <Search size={18} color="var(--text-muted)" />
            <input type="text" placeholder="Search for roles, skills, or resources..." />
          </div>

          <div className="header-actions">
            <div className="notification-icon">
              <Bell size={20} />
              <div className="notification-dot"></div>
            </div>
            
            <div className="profile-menu" onClick={() => navigate('/profile')}>
              <div className="avatar">{currentUser.initial}</div>
              <span className="profile-name">{currentUser.name}</span>
              <ChevronDown size={16} color="var(--text-muted)" />
            </div>
          </div>
        </header>

        <div className="page-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
