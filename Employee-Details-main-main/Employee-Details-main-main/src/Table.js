import axios from "axios";
import React, { useEffect, useState } from "react";
import {urlEmployee} from './endpoints';
const Table = () => {
  const [users, setUsers] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(urlEmployee,{
          headers: {
            'Content-Type': 'application/json', // Example headerExample Authorization header
            // Add other headers as needed
          },
        });

        console.log(data)
        setUsers(data);

        // setUsers([
        //   {employeeName: 'Nikhil', date: '07-07-2002', location: 'noida', yearsOfExperience: '3'},
        //   {employeeName: 'Keshav', date: '07-07-2002', location: 'noida', yearsOfExperience: '3'},
        //   {employeeName: 'Sahil', date: '07-07-2002', location: 'noida', yearsOfExperience: '3'},
        //   {employeeName: 'Yugal', date: '07-07-2002', location: 'noida', yearsOfExperience: '3'},
        // ]) 
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[]);

  return (
    <div className="bg-white p-10">
      <h1 className="text-gray-700 text-5xl font-semibold py-5">
        Employee Details
      </h1>
      <div className=" overflow-x-auto my-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Employee Name
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Years Of Experience
              </th>
            </tr>
          </thead>


          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.employeeName}
                </td>
                <td className="px-6 py-4">{user.date}</td>
                <td className="px-6 py-4">{user.location}</td>
                <td className="px-6 py-4">{user.yearsOfExperience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
