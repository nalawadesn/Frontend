import React, { useState } from "react";
// import { useState, useNavigate } from 'react';
import { useNavigate } from "react-router-dom";
import "./Userreg.css";
import axios from "axios";

const Userreg = () => {
  const [UserName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [ContactNum, setContactNum] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const navigateToHomepage = () => {
    navigate("/");
  };
  async function onSubmitForm(event) {
    event.preventDefault();
    await axios
      .post("https://localhost:44354/api/User", {
        userId: 0,
        UserName: UserName.toString().trim(),
        ContactNum: ContactNum.toString().trim(),
        UserEmail: UserEmail.toString().trim(),
        UserPassword: UserPassword.toString().trim(),
      })
      .then((a) => {
        console.log(a);
        setUserName("");
        setUserEmail("");
        setContactNum("");
        setUserPassword("");
      })
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function onChangeUserName(a) {
    setUserName(a);
  }
  function onChangeUserEmail(a) {
    setUserEmail(a);
  }
  function onChangeContactNum(a) {
    setContactNum(a);
  }
  function onChangeUserPassword(a) {
    setUserPassword(a);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-slate-400 bg-opacity-50 flex flex-col items-center p-10 rounded-xl border border-md shadow-xl backdrop-blur-xl">
        <div className="">
          <h1 className="font-semibold italic underline tracking-wider">NPAMS</h1>
          <h1 className="text-3xl font-bold text-center">User Registration</h1>
        </div>
        <form onSubmit={onSubmitForm} className="">
          <div className="my-2">
            <label className="block">User Name: </label>
            <input
              className="px-4 py-2 bg-gray-200 rounded-full"
              onChange={(a) => onChangeUserName(a.target.value)}
              value={UserName}
              type="text"
              placeholder="Enter User Name"
              name="uname"
              required
            ></input>
          </div>
          <div className="my-2">
            <label className="block">Email: </label>
            <input
              className="px-4 py-2 bg-gray-200 rounded-full"
              onChange={(a) => onChangeUserEmail(a.target.value)}
              value={UserEmail}
              type="email"
              placeholder="Enter Email Id"
              name="email"
              required
            ></input>
          </div>
          <div className="my-2">
            <label className="block">Contact Number: </label>
            <input
              className="px-4 py-2 bg-gray-200 rounded-full"
              onChange={(a) => onChangeContactNum(a.target.value)}
              value={ContactNum}
              type="phonenumber"
              placeholder="Enter Phone"
              name="phno"
            ></input>
          </div>
          <div className="my-2">
            <label className="block">Password: </label>
            <input
              className="px-4 py-2 bg-gray-200 rounded-full"
              onChange={(a) => onChangeUserPassword(a.target.value)}
              value={UserPassword}
              type="password"
              placeholder="Enter Password"
              name="pass"
            ></input>
          </div>
          <button className="bg-cyan-400 px-4 py-2 rounded-full border my-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Userreg;
