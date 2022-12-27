import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const GetAllUserDetails = (props) => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://localhost:44354/api/User")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
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
          <h1>User Details</h1>
        </div>
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
                    Contact Number
                  </th>
            </tr>
              </thead>
              <tbody className="text-black">
                {users.length > 0 &&
                  users.map((user) => (
                    <tr key={user.userId} className='bg-white'>
                      <td class="py-4 px-6">{user.userId}</td>
                      <td class="py-4 px-6">{user.userEmail}</td>
                      <td class="py-4 px-6">{user.userName}</td>
                      <td class="py-4 px-6">{user.contactNum}</td>
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

export default GetAllUserDetails;
