import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {urlEmployee} from './endpoints';
const Form = () => {

    const navigate = useNavigate();

  const [user, setUser] = useState({
    employeeName: "",
    date: "",
    location: "",
    yearsOfExperience: 0,
  });

  const handleChange = (e) => {
    // console.log('event',e)
    setUser({...user,[e.target.name]:e.target.value})
  }

  // const handleChange = (e) => {
  //   console.log('event',e)
  //   setUser({employeeName: 'fsdfg', date: '07-07-2002', location: 'noida', yearsOfExperience: '3'},
  //      {employeeName: 'sfggs', date: '07-07-2002', location: 'noida', yearsOfExperience: '3'})
  // }

  const handleSubmit = async(e) => {
    try {
      // e.preventDefault();
      console.log('url',urlEmployee)
      const data = await axios.post(urlEmployee,user);

      console.log(data)
        navigate('/table')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-screen lg:py-0 min-h-screen">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Enter Employee Details
            </h1>
            <form className="space-y-4 md:space-y-6" >
              <div>
                <label
                  htmlFor="employeeName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Employee Name
                </label>
                <input
                  type="text"
                  name="employeeName"
                  id="employeeName"
                  value={user.employeeName}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Employee Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={user.date}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Date"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={user.location}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Location"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="yearsOfExperience"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Years Of Experience
                </label>
                <input
                  type="yearsOfExperience"
                  name="yearsOfExperience"
                  id="yearsOfExperience"
                  value={user.yearsOfExperience}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Years Of Experience"
                  required
                />
              </div>

            </form>
              <button
                onClick={handleSubmit}

                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Submit
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
