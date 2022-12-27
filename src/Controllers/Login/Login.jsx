import React, { useState } from "react";
import { Route, Link, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "./Login.css";
import axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState(props.password);

  const navigate = useNavigate();
  function navigateToUserDashboard()
  {
    navigate('/UserDashboard');
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
      await axios.put(`https://localhost:44354/api/User/${email.toString().trim()}`, {
            email: email.toString().trim(),
            password: password.toString().trim(),
        })
    console.log(response);
    console.log(response.status);
    if (response.status === 200) {
  
        setEmail("");
        setPassword("");
        navigateToUserDashboard();
  
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
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-slate-400 bg-opacity-50 flex flex-col items-center p-10 rounded-xl border border-md shadow-xl backdrop-blur-xl">
        <h1 className="text-3xl font-bold text-center">User Login</h1>
        <form onSubmit={submitForm}>
          <div className="my-4">
            <label className="ml-4 block">Email</label>
            <input
              onChange={(a) => onChangeEmail(a.target.value)}
              value={email}
              className="bg-gray-200 rounded-full px-4 py-2"
              type="email"
              placeholder="Enter Email"
              name="uname"
              required
            ></input>
          </div>
          <div className="my-4">
            <label className="ml-4 block">Password</label>
            <input
              onChange={(a) => onChangePassword(a.target.value)}
              value={password}
              className="bg-gray-200 rounded-full px-4 py-2"
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            ></input>
          </div>
         <center>
          <button className="bg-cyan-400 border border-cyan-700 px-4 py-1 rounded-full shadow-xl">
            {/* <Link to="/UserDashboard">Submit</Link> */}
            Submit
          </button>
          </center>
        </form>
        <div className="text-center py-4">
          <div className="block">
            <button>
              <Link to={"/adminlogin"}>Login as Admin</Link>
            </button>
          </div>
          <div className="block">
            <span>Don't have an account? </span>
            <Link className="text-blue-600 font-semibold" to={"/userregis"}>
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;