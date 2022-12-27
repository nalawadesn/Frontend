import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl p-5 mb-5 w-screen bg-slate-400">
        User Dashboard
      </h1>
      <div className="flex justify-center h-screen">
        <ul className="flex flex-col py-2 justify-center text-center text-2xl">
          <li className="px-4 py-1  mx-2 bg-cyan-400 rounded-full my-2">
            <Link to={"/Context"}>Book</Link>
          </li>
          <li className="px-4 py-1  mx-2 bg-cyan-400 rounded-full my-2">
            <Link to={"/UserDetailsByEmail"}>Details</Link>
          </li>
          <li className="px-4 py-1  mx-2 bg-cyan-400 rounded-full my-2">
            <Link to={"/GetByEmail"}>Get Bookings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
