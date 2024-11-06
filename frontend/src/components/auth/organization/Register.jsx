import "./register.style.css";
import { useState } from "react";
import NavBar from "../../../NavBar";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    orgId: "",
    orgName: "",
    orgEmail: "",
    orgPassword: "",
    // serviceIds: [],
    role: "",
  });


  const registerUser = async (e) => {
    e.preventDefault();
    const { orgId, orgName, orgEmail, orgPassword, role } = data;
    try {
      const response = await axios.post(
        "/orgregister",
        {
          orgId,
          orgName,
          orgEmail,
          orgPassword,
          role,
        },
        {
          withCredentials: true,
        }
      );
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        localStorage.setItem("orgId", orgId);
        localStorage.setItem("token", response.data.token);
        setData({
          orgId: "",
          orgName: "",
          orgEmail: "",
          orgPassword: "",
          // serviceIds: [],
          role: "",
        });
        toast.success("Registration Successful!");
        navigate("/orglogin");
      }
    } catch (error) {
      console.log(error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <NavBar />
      
      <form onSubmit={registerUser} className="form-container">
        <h2 className="title">Organization Register</h2>
        <div className="form-group">
          <label className="label">OrgId</label>
          <input
            className="input"
            type="text"
            placeholder="Enter orgId..."
            value={data.orgId}
            onChange={(e) => setData({ ...data, orgId: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="label">OrgName</label>
          <input
            className="input"
            type="text"
            placeholder="Enter orgName..."
            value={data.orgName}
            onChange={(e) => setData({ ...data, orgName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="label">OrgEmail</label>
          <input
            className="input"
            type="email"
            placeholder="Enter orgEmail..."
            value={data.orgEmail}
            onChange={(e) => setData({ ...data, orgEmail: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="label">OrgPassword</label>
          <input
            className="input"
            type="password"
            placeholder="Enter orgPassword..."
            value={data.orgPassword}
            onChange={(e) => setData({ ...data, orgPassword: e.target.value })}
          />
        </div>
        <button className="button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
