import React, { useState } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="">
        <div className="p-2 bg-black">
          <h1 className="text-4xl text-white font-bold text-center">
            Newspaper Advertisement Management System
          </h1>
        </div>
        <div className="flex justify-center items-center content-center h-screen -my-10">
          <ul className="flex flex-row py-2 justify-center ">
            <li className="px-4 py-1  mx-2 bg-cyan-400 rounded-full">
              <Link to={"/aboutUs"}>About Us</Link>
            </li>
            <li className="px-4 py-1  mx-2 bg-cyan-400 rounded-full">
              <Link to={'/Contact'}>Conatct Us</Link>
            </li>
            <li className="px-4 py-1  mx-2 bg-cyan-400 rounded-full">
              <Link to={"/login"}>User Login</Link>
            </li>
            <li className="px-4 py-1  mx-2 bg-cyan-400 rounded-full">
              <Link to={"/adminlogin"}>Admin Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
