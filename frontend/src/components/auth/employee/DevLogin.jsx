import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../AuthContext";
import "./Dev.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";
import NavBar from "../../../NavBar";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState({
    empEmail: "",
    empPassword: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { empEmail, empPassword } = data;
    try {
      const response = await axios.post("/emplogin", {
        empEmail,
        empPassword,
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        let role = "emp";
        let empId;
        await axios
          .get("/api/employee")
          .then((res) => {
            let emps = res.data;
            let currEmp = emps.find((emp) => emp.empEmail === empEmail);
            console.log("Employees " + emps);
            console.log("Employee single " + currEmp);
            if (currEmp) {
              empId = currEmp.empId;
            } else {
              console.log("Employee not found");
            }
          })
          .catch((e) => {
            console.log(e);
          });

        localStorage.setItem("empId", empId);
        localStorage.setItem("token", response.data.token);
        login(response.data.token, role);
        setData({ empEmail: "", empPassword: "" });
        navigate("/dashboard/emp");
        toast.success("Login Successful!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={loginUser} className="form-container">
        <h2 className="title">Developer Login</h2>
        <div className="form-group">
          <label className="label">DevEmail</label>
          <input
            className="input"
            type="email"
            placeholder="Enter email..."
            value={data.empEmail}
            onChange={(e) => setData({ ...data, empEmail: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="label">DevPassword</label>
          <input
            className="input"
            type="password"
            placeholder="Enter password..."
            value={data.empPassword}
            onChange={(e) => setData({ ...data, empPassword: e.target.value })}
          />
        </div>
        <button className="button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
