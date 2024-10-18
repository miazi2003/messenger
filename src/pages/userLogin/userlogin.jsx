import React, { useState } from "react";
import "./userlogin.scss";
import axios from "axios";
import handleToast from "../../utilities/toaster";
import { userLogin } from "../../store/admin/userReducer";
import { useDispatch } from "react-redux";

function UserLogin() {
  const [ details, setDetails ] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  function handleSubmit() {
    axios
      .post("http://localhost:9092/user-auth/login", details)
      .then(function (resp) {
        handleToast(resp.data);
        if (resp.data.success === true) {
          dispatch(userLogin(resp.data));
          localStorage.setItem("token", resp.data.token);
        }
      });
  }
  return (
    <div>
      <div className="main">
        <div className="blur">
          <div className="login">
            <div className="hline">
              <h1>LOGIN TO THIS PAGE</h1>
              <a href="">
                <p>
                  Dont Have Any Account?<a href="">Click Here!</a>{" "}
                </p>
              </a>
            </div>
            <div className="input">
              <input type="text" placeholder="username"  onChange={(e)=>{setDetails({
                    ...details, username : e.target.value
                  })}} />
            
              <input type="password" placeholder="password"  onChange={(e)=>{setDetails({
                    ...details, password : e.target.value
                  })}}/>
            </div>
            <div className="buttons">
              <button className="bt" onClick={handleSubmit}> LOGIN NOW </button>
              <button className="bt2"> LOGIN WITH GOOGLE </button>
            </div>
            <p className="forget">
              Forgot Your Password ?<a href="">Click Here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
