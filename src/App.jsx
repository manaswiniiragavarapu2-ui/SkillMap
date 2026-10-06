import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CareerSelection from './pages/CareerSelection';
import SkillAssessment from './pages/SkillAssessment';
import CareerGPSSetup from './pages/CareerGPSSetup';
import Dashboard from './pages/Dashboard';
import SkillDetail from './pages/SkillDetail';
import Progress from './pages/Progress';
import JobReadiness from './pages/JobReadiness';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Layout />}>
          <Route path="/explore" element={<CareerSelection />} />
          <Route path="/assessment" element={<SkillAssessment />} />
          <Route path="/gps-setup" element={<CareerGPSSetup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/skill/:skillName" element={<SkillDetail />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/job-readiness" element={<JobReadiness />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
