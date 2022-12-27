import React from "react";
import { Link } from "react-router-dom";

export const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl p-5 mb-10">Admin Dashboard</h1>
      <div className="flex flex-col items-center justify-center h-screen -my-20 text-2xl">
        <button className="rounded-full px-4 py-2 bg-cyan-400 m-2">
          <Link to={"/GetAllUserDetails"}>Get all User Details</Link>
        </button>
        <button className="rounded-full px-4 py-2 bg-cyan-400 m-2">
          <Link to={"/Getbyemail"}>Get bookings by email</Link>
        </button>
        <button className="rounded-full px-4 py-2 bg-cyan-400 m-2">
          <Link to={"/GetAllBookings"}>Get all bookings</Link>
        </button>
      </div>
    </div>
  );
};
export default AdminDashboard;
