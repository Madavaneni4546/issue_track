import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAuth } from '../AuthContext';
import './User.css'; // Import the CSS file for styling
import NavBar from '../../../NavBar';

export default function Login() {
  const { login } = useAuth();
  const [data, setData] = useState({
    userEmail: '',
    userPassword: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { userEmail, userPassword } = data;
    try {
      const response = await axios.post('/userlogin', {
        userEmail,
        userPassword,
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        let role = 'user';
        login(response.data.token, role);
        let userId;
        await axios
          .get("/api/users")
          .then((res) => {
            let users = res.data;
            let currUser = users.find((user) => user.userEmail === userEmail);
            console.log("users " + users);
            console.log("user single " + currUser);
            if (currUser) {
              userId = currUser.userId;
            } else {
              console.log("Current User not found");
            }
          })
          .catch((e) => {
            console.log(e);
          });
          localStorage.setItem("userId",userId);
        setData({ userEmail: '', userPassword: '' });
        toast.success('Login Successful!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={loginUser} className='form-container'>
        <h2 className="title">User Login</h2>
        <div className="form-group">
          <label className='label'>UserEmail</label>
          <input
            className='input'
            type="email"
            placeholder="Enter email..."
            value={data.userEmail}
            onChange={(e) => setData({ ...data, userEmail: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className='label'>UserPassword</label>
          <input
            className='input'
            type="password"
            placeholder="Enter password..."
            value={data.userPassword}
            onChange={(e) => setData({ ...data, userPassword: e.target.value })}
          />
        </div>
        <button className="button" type="submit">Login</button>
      </form>
    </div>
  );
}
