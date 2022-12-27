import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Link, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "../AdminDashboard/AdminDashboard.css";

const Getbyemail = (props) => {
  const [UserEmail, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  // let bookings = [];
  // let i = [];
  // let m = 0;
  function onChangeUserEmail(a) {
    setEmail(a);
  }

  function onSubmitForm(event) {
    event.preventDefault();

    fetch(`https://localhost:44354/api/Booking/${UserEmail.toString().trim()}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }

  return (
    <div>
      <h1 className="text-center font-bold text-4xl p-5 mb-5 w-screen bg-slate-400">
        Admin Dashboard
      </h1>
      <div className="text-center font-semibold text-3xl p-5 mb-5">
        <h1>Booking details by email</h1>
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
                  Booking ID
                </th>
                <th scope="col" class="py-3 px-6">
                  Category Title
                </th>
                <th scope="col" class="py-3 px-6">
                  City Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Publication Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Row Column Values
                </th>
              </tr>
            </thead>
            <tbody className="text-black">
              {bookings.length > 0 &&
                bookings.map((booking) => (
                  <tr key={booking} className='bg-white'>
                    <td class="py-4 px-6">{booking.bkId}</td>
                    <td class="py-4 px-6">{booking.categoryTitle}</td>
                    <td class="py-4 px-6">{booking.cityName}</td>
                    <td class="py-4 px-6">{booking.publicationName}</td>
                    <td class="py-4 px-6">{booking.rowColumn}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Getbyemail;
