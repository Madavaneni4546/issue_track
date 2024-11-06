// import './App.css';
// import EmpNavbar from './components/employee/emp_navbar';
// import EmpIssues from './components/employee/issues';
// import {BrowserRouter , Routes , Route} from 'react-router-dom';
// import User from './components/user/user';
// import Employee from './components/employee/employee';
// import Organization from './components/organization/Organization'
// import {BrowserRouter, Routes, Route} from 'react-router-dom';

// function App() {
//   return (
//     <>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/employee" element={<Employee/>}/>
//         <Route path="/user/*" element={<User/>}/>
//         <Route path="/org/*" element={<Organization/>}/>
//       </Routes>
//     </BrowserRouter>
//     </>
//   );
// }

// export default App;
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';
import Organization from './components/organization/Organization'
import Register from './components/auth/organization/Register';
import Login from './components/auth/organization/Login';
import DevRegister from './components/auth/employee/DevRegister';
import DevLogin from './components/auth/employee/DevLogin';
import UserRegister from './components/auth/user/UserRegister'
import UserLogin from './components/auth/user/UserLogin'
import LandingPage from './LandingPage';
import Dashboard from './components/organization/Organization';
import EmpDashboard from './components/employee/employee'
import UserDashboard from './components/user/user'
// import OrgNavBar from './components/organization/OrgNavbar'
import { AuthProvider } from './components/auth/AuthContext';
import PrivateRoute from './components/auth/PrivateRoute'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';
axios.defaults.baseURL = 'http://localhost:2000';
axios.defaults.withCredentials = true;


function App() {
  return (
    <Router>
      <AuthProvider>
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <Routes>
          {/* <Route path='' element={<NavBar/>}/> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/orgregister" element={<Register />} />
          <Route path="/orglogin" element={<Login />} />
          {/* <Route path="/org/*" element={<Organization />} /> */}
          <Route path="/devregister" element={<DevRegister />} />
          <Route path="/devlogin" element={<DevLogin />} />
          <Route path="/userregister" element={<UserRegister />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="org/*" element={
            <PrivateRoute><Dashboard /></PrivateRoute>
          } />
          <Route path="/dashboard/emp/*" element={
            <PrivateRoute><EmpDashboard /></PrivateRoute>
          } />
          <Route path="/dashboard/user/*" element={
            <PrivateRoute><UserDashboard /></PrivateRoute>
          } />
        </Routes>
        
      </AuthProvider>
    </Router>
  );
}

export default App;
