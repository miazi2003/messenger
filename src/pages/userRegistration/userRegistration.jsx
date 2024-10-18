import React, { useState } from "react";
import "./userRegistartion.scss";
import axios from "axios";
import handleToast from "../../utilities/toaster";


function UserRegistration() {
const [details ,setDetails] = useState({name : "", username : "",email : "",phone : "",password:""})
function handleSubmit(){
  axios.post("http://localhost:9092/user-auth/registration",details).then(
    function(resp){
      handleToast(resp.data)
      if( resp.data.success === true){
      
      }
    }
  )
}
  return (
    
    <div>
      <div>
        <div className="mainbox">
          <div className="blurs">
            <div className="logIn">
              <div className="hLine">
                <h1>Create An Account</h1>
                <p>
                  Already Have An Account?<a href="">Click Here!</a>{" "}
                </p>
              </div>
              <div className="inputs">
                <div className="inputb">
                  <input type="text" placeholder="name" onChange={(e)=>{setDetails({
                    ...details, name : e.target.value
                  })}} />
                  <input type="text" className="input2" placeholder="username" onChange={(e)=>{setDetails({
                    ...details, username : e.target.value
                  })}}/>
                </div>
                <input type="text" placeholder="email" onChange={(e)=>{setDetails({
                  ...details,email : e.target.value
                })}}/>
                <input type="text" placeholder="phone" onChange={(e)=>{setDetails({
                  ...details, phone : e.target.value
                })}}/>
                <input type="password" placeholder="password" onChange={(e)=>{setDetails({
                  ...details,password : e.target.value
                })}}/>
              </div>
              <div className="allbuttons">
                <button className="bt2" onClick={handleSubmit}>Register</button>
                <button className="bt3"> LOGIN WITH GOOGLE </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegistration;
