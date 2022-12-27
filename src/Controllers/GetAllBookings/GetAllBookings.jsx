import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const GetAllBookings = (props) => {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  const fetchData = () => {
    fetch("https://localhost:44354/api/Booking")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-4xl p-5 mb-5 w-screen bg-slate-400">
          Admin Dashboard
        </h1>
        <div className="text-center font-semibold text-3xl p-5 mb-10">
          <h1>All Booking Details</h1>
        </div>
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
                    <tr key={booking.bkId} className='bg-white'>
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
    </div>
  );
};

export default GetAllBookings;
