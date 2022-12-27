import React, { useState } from "react";
import { Route, Link, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "../Login/Login.css";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function navigateToAdmin() {
    navigate("/admin");
  }

  function onChangeEmail(a) {
    setEmail(a);
  }
  function onChangePassword(a) {
    setPassword(a);
  }

  async function submitForm(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
    setEmail("");
    setPassword("");
    try{

      var response =
        await axios.put(`https://localhost:44354/api/Admin/${email.toString().trim()}`, {
              email: email.toString().trim(),
              password: password.toString().trim(),
          })
      console.log(response);
      console.log(response.status);
      if (response.status === 200) {
    
          setEmail("");
          setPassword("");
          // navigateToUserDashboard();
          navigateToAdmin();
    
      }
      else if(response.status===204){
          alert('Password Incorrect')
          // console.log("Password Incorrect");
    
      }
      else {
          // console.log("Something went wrong! Please try again")
          alert('Something went wrong! Please try again')
      }
    }catch(e){
      console.log(e);
    }
  }

  
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-slate-400 bg-opacity-50 flex flex-col items-center p-10 rounded-xl border border-md shadow-xl backdrop-blur-xl">
        <div className="">
          <h1 className="text-center font-bold text-3xl">Admin Login</h1>
          <form onSubmit={submitForm}>
            <div className="my-4">
              <label className="block pl-4">Email</label>
              <input
                onChange={(a) => onChangeEmail(a.target.value)}
                value={email}
                className="px-4 py-2 bg-gray-200 rounded-full"
                type="text"
                placeholder="Enter Email"
                name="admin"
                required
              ></input>
            </div>
            <div className="my-4">
              <label className="block pl-4">Password</label>
              <input
                onChange={(a) => onChangePassword(a.target.value)}
                value={password}
                className="px-4 py-2 bg-gray-200 rounded-full"
                type="Password"
                placeholder="Enter Password"
                name="Admin"
                required
              ></input>
            </div>
            <button className="bg-cyan-400 px-4 py-1 rounded-full border-cyan-800 border">
              {/* <Link to="/AdminDashboard">Submit</Link> */}
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
