// import React, { createContext, useState, useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userRole, setUserRole] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const role = localStorage.getItem('role');
//     if (token && role) {
//       setIsAuthenticated(true);
//       setUserRole(role);
//     }
//   }, []);

//   const login = (token) => {
//     localStorage.setItem('token', token);
//     localStorage.setItem('role' , role)
//     setIsAuthenticated(true);
//     setUserRole(role);
//     switch (role) {
//       case 'org':
//         navigate('/dashboard');
//         break;
//       case 'emp':
//         navigate('/dashboard/emp');
//         break;
//       case 'user':
//         navigate('/dashboard/user');
//         break;
//       default:
//         navigate('/');
//         break;
//     }
//   }

//   const logout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('role');
//     setIsAuthenticated(false);
//     setUserRole(null);
//     navigate('/');
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, userRole,  login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );

// };
// export const useAuth = () => useContext(AuthContext);


import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const validateToken = (token) => {
  return token && token.length > 10; 
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (validateToken(token) && role) {
      setIsAuthenticated(true);
      setUserRole(role);
    }
    setLoading(false); 
  }, []);

  const login = (token, role) => {
    console.log('Logging in with role:', role); 
    if (validateToken(token)) {
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      setIsAuthenticated(true);
      setUserRole(role);
      switch (role) {
        case 'org':
          navigate('org/');
          break;
        case 'emp':
          navigate('/dashboard/emp');
          break;
        case 'user':
          navigate('/dashboard/user');
          break;
        default:
          navigate('/');
          break;
      }
    } else {
      console.error('Invalid token');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsAuthenticated(false);
    setUserRole(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
