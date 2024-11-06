import React, { useState } from "react";
import axios from "axios";
import NavBar from "../../../NavBar";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./Dev.css";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    empId: "",
    empName: "",
    empEmail: "",
    empPassword: "",
    empPhn: "",
    empServiceId: "",
    empOrgId: "",
    role: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const {
      empId,
      empName,
      empEmail,
      empPassword,
      empPhno,
      empServiceId,
      empOrgId,
      role,
    } = data;
    try {
      const response = await axios.post("/empregister", {
        empId,
        empName,
        empEmail,
        empPassword,
        empPhno,
        empServiceId,
        empOrgId,
        role,
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        localStorage.setItem("empId", empId);
        localStorage.setItem("token", response.data.token);
        setData({
          empId: "",
          empName: "",
          empEmail: "",
          empPassword: "",
          empPhno: "",
          empServiceId: "",
          empOrgId: "",
          role: "",
        });
        toast.success("Registration Successful!");
        navigate("/devlogin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar />
      
      <form onSubmit={registerUser} className="form-container">
        <h2 className="title">Developer Register</h2>
        <div className="form-group">
          <label className="label">EmpId</label>
          <input
            className="input"
            type="text"
            placeholder="Enter empid..."
            value={data.empId}
            onChange={(e) => setData({ ...data, empId: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>empName</label>
          <input
            className="input"
            type="text"
            placeholder="Enter empName..."
            value={data.empName}
            onChange={(e) => setData({ ...data, empName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>empEmail</label>
          <input
            className="input"
            type="email"
            placeholder="Enter email..."
            value={data.empEmail}
            onChange={(e) => setData({ ...data, empEmail: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>empPassword</label>
          <input
            className="input"
            type="password"
            placeholder="Enter Emppassword..."
            value={data.empPassword}
            onChange={(e) => setData({ ...data, empPassword: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>empPhn</label>
          <input
            className="input"
            type="text"
            placeholder="Enter phonenumber"
            value={data.empPhno}
            onChange={(e) => setData({ ...data, empPhno: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>empServiceId</label>
          <input
            className="input"
            type="text"
            placeholder="Enter serviceId"
            value={data.empServiceId}
            onChange={(e) => setData({ ...data, empServiceId: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>empOrgId</label>
          <input
            className="input"
            type="text"
            placeholder="Enter empOrgId"
            value={data.empOrgId}
            onChange={(e) => setData({ ...data, empOrgId: e.target.value })}
          />
        </div>
        {/* <div className="form-group">
          <label>Role</label>
          <input
            className="input"
            type="text"
            placeholder="Enter role"
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
