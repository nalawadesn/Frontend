import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Link, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "../AdminDashboard/AdminDashboard.css";

const UserDetailsByEmail = (props) => {
  const [UserEmail, setEmail] = useState("");
  const [UserDetails, setUserDetails] = useState([]);
  const navigate = useNavigate();
 
  function onChangeUserEmail(a) {
    setEmail(a);
  }

  function onSubmitForm(event) {
    event.preventDefault();

    fetch(`https://localhost:44354/api/User/${UserEmail.toString().trim()}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUserDetails(data);
      });
  }

  return (
    <div>
      <h1 className="text-center font-bold text-4xl p-5 mb-5 w-screen bg-slate-400">
        User Dashboard
      </h1>
      <div className="text-center font-semibold text-3xl p-5 mb-5">
        <h1>User Details by email</h1>
      </div>
      <form className="flex justify-center mb-10" onSubmit={onSubmitForm}>
        <div className="flex flex-row">
          <label className="py-2 font-semibold text-md">User Email:</label>
          <input
            onChange={(a) => onChangeUserEmail(a.target.value)}
            value={UserEmail}
            className="bg-gray-200 rounded-full ml-2 px-4"
            type="text"
            placeholder="Enter User Email"
            name="admin"
            required
          ></input>
          <button className="bg-cyan-400 px-4 py-2 rounded-full mx-4">
            Submit
          </button>
        </div>
      </form>
      <div className="flex justify-center">
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  User ID
                </th>
                <th scope="col" class="py-3 px-6">
                  Email
                </th>
                <th scope="col" class="py-3 px-6">
                  Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Contact
                </th>
              </tr>
            </thead>
            <tbody className="text-black">
              <tr className="bg-white">
                <td class="py-4 px-6">{UserDetails.userId}</td>
                <td class="py-4 px-6">{UserDetails.userEmail}</td>
                <td class="py-4 px-6">{UserDetails.userName}</td>
                <td class="py-4 px-6">{UserDetails.contactNum}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsByEmail;
