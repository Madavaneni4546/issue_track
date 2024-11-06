import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import OrgLogin from './components/auth/organization/Login';
import OrgRegister from './components/auth/organization/Register';
import DevLogin from './components/auth/employee/DevLogin';
import UserRegister from './components/auth/user/UserRegister';
import UserLogin from './components/auth/user/UserLogin';
import './navBar.style.css';

export default function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="fr">
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>&times;</button>
        <Link className='a' to="/" onClick={toggleSidebar}>Home</Link>
        <Link className='a' to="/orgregister" onClick={toggleSidebar}>OrgRegister</Link>
        <Link className='a' to="/orglogin" onClick={toggleSidebar}>OrgLogin</Link>
        <Link className='a' to="/devlogin" onClick={toggleSidebar}>DevLogin</Link>
        <Link className='a' to="/userregister" onClick={toggleSidebar}>UserRegister</Link>
        <Link className='a' to="/userlogin" onClick={toggleSidebar}>UserLogin</Link>
      </div>

      <button className="open-btn" onClick={toggleSidebar}>&#9776; Tracker</button>

      <div className="fr1">
        <div className="fr2">
          <Routes>
            <Route path="/orglogin" element={<OrgLogin />} />
            <Route path="/orgregister" element={<OrgRegister />} />
            <Route path="/devlogin" element={<DevLogin />} />
            <Route path="/userregister" element={<UserRegister />} />
            <Route path="/userlogin" element={<UserLogin />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
