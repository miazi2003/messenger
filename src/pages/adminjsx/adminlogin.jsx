import React, { useState } from "react";
import "./adminlogin.scss";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";


import { adminLogin } from "../../store/admin/adminUserReducers";
import handleToast from "../../utilities/toaster";

const AdminLogin = () => {
  const [details, setdetails] = useState({ name: "", email: "", password: "" });

  const dispatch = useDispatch();
  function handleSubmit() {
    axios.post("http://localhost:9092/admin-auth/login", details).then(function (resp) {
   

      handleToast(resp.data)
      if (resp.data.success === true) {
        dispatch(adminLogin(resp.data))
        localStorage.setItem("token", resp.data.token);
      }
    });
  }
  return (
    <div>
      <div className="setup">
      <h3>WELCOME BACK!</h3>

       
        <div className="log">
        <h4 className="hd"> ADMIN LOGIN</h4>
          
          <div className="input">
            {/* <input
              type="text"
              placeholder="name"
              value={details.name}
              onChange={(e) => {
                setdetails({ ...details, name: e.target.value });
              }}
            /> */}
            <input
              type="text"
              placeholder="email"
              value={details.email}
              onChange={(e) => {
                setdetails({ ...details, email: e.target.value });
              }}
            />
            <input
              type="password"
              placeholder="password"
              value={details.password}
              onChange={(e) => {
                setdetails({ ...details, password: e.target.value });
              }}
            />
          </div>
          <button className="b" onClick={handleSubmit}>
            {" "}
            LOGIN NOW{" "}
          </button>
          <button className="b2"> LOGIN WITH GOOGLE </button>
          <p className="forgot">
            {" "}
            Forgot Your Password ?<a href="">Click Here</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default AdminLogin;