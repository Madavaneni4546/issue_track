import "./login.style.css";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../AuthContext";
import NavBar from "../../../NavBar";

export default function Login() {
  const { login } = useAuth();
  const [data, setData] = useState({
    orgEmail: "",
    orgPassword: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const { orgEmail, orgPassword } = data;
      const response = await axios.post("/orglogin", { orgEmail, orgPassword });
      console.log("Server Response:", response.data); // Debug log
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        let role = "org";
        const { token } = response.data; // Ensure role is part of the response
        console.log("Token:", token); // Debug log
        console.log("Role:", role); // Debug log
        login(token, role);
        let orgId;
        await axios
          .get("/api/organization")
          .then((res) => {
            let orgs = res.data;
            let currOrg = orgs.find((org) => org.orgEmail === orgEmail);
            console.log("Orgs " + orgs);
            console.log("Org single " + currOrg);
            if (currOrg) {
              orgId = currOrg.orgId;
            } else {
              console.log("Organization not found");
            }
          })
          .catch((e) => {
            console.log(e);
          });
        localStorage.setItem("orgId", orgId);
        setData({ orgEmail: "", orgPassword: "" });
        toast.success("Login Successful!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <NavBar />
      
      <form onSubmit={loginUser} className="form-container">
        <h2 className="title">Organization Login</h2>
        <div className="form-group">
          <label className="label" htmlFor="orgEmail">OrgEmail</label>
          <input className="input"
            type="email"
            id="orgEmail"
            placeholder="Enter email..."
            value={data.orgEmail}
            onChange={(e) => setData({ ...data, orgEmail: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="orgPassword">OrgPassword</label>
          <input
            className="input"
            type="password"
            id="orgPassword"
            placeholder="Enter password..."
            value={data.orgPassword}
            onChange={(e) => setData({ ...data, orgPassword: e.target.value })}
          />
        </div>
        <button className="button" type="submit">Login</button>
      </form>
    </div>
  );
}
