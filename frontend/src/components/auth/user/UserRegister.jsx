import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./User.css";
import NavBar from "../../../NavBar";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    userId: "",
    userEmail: "",
    userName: "",
    userPassword: "",
    role: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { userId, userEmail, userName, userPassword, role } = data;
    try {
      const response = await axios.post("/userregister", {
        userId,
        userEmail,
        userName,
        userPassword,
        role,
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        localStorage.setItem("userId", userId);
        localStorage.setItem("token", response.data.token);
        setData({
          userId: "",
          userEmail: "",
          userName: "",
          userPassword: "",
          role: "",
        });
        toast.success("Registration Successful!");
        navigate("/userlogin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={registerUser} className="form-container">
        <h2 className="title">User Register</h2>
        <div className="form-group">
          <label className="label">userId</label>
          <input
            className="input"
            type="text"
            placeholder="Enter userid..."
            value={data.userId}
            onChange={(e) => setData({ ...data, userId: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="label">userEmail</label>
          <input
            className="input"
            type="email"
            placeholder="Enter userEmail ..."
            value={data.userEmail}
            onChange={(e) => setData({ ...data, userEmail: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="label">userName</label>
          <input
            className="input"
            type="text"
            placeholder="Enter userName..."
            value={data.userName}
            onChange={(e) => setData({ ...data, userName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="label">userPassword</label>
          <input
            className="input"
            type="password"
            placeholder="Enter userPassword..."
            value={data.userPassword}
            onChange={(e) => setData({ ...data, userPassword: e.target.value })}
          />
        </div>
        {/* <div className="form-group">
          <label className="label">Role</label>
          <input
            className="input"
            type="text"
            placeholder="Enter role..."
            value={data.role}
            onChange={(e) => setData({ ...data, role: e.target.value })}
          />
        </div> */}
        <button className="button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
