import classNames from 'classnames';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import FacultyHomeHelper from '../Components/FacultyHomeHelper';
import Navbar from '../Components/Navbar';
import classes from './FacultyInterface.module.css';

const FacultyInterface = () => {
  const history = useHistory();
  const people = [
    {
      name: 'Shona',
      email: 'shona@gmail.com',
      reg: '808080',
      year: '2015',
      department: 'Computer',
      contact: '9876543210',
      designation: 'Professor',
    },
    // More people...
  ];
  return (
    <>
      <div className={classes.grid}>
        <Navbar active="faculty" user="faculty" />
        <section class="text-gray-600 body-font pl-16">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex flex-wrap -m-4">
              {/* Teacher Card Left */}
              <div class="p-4 lg:w-1/4 md:w-full">
                <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col bg-blue-50">
                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                      Ms. Shona
                    </h2>
                    <p class="leading-relaxed text-base">FAC2020202</p>
                    <a
                      href="/faculty/updateProfile"
                      class="mt-3 text-blue-500 inline-flex items-center"
                    >
                      Update
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div class="p-4 pl-10 lg:w-3/4 md:w-full">
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Name
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Email
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Registration Number
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Joining Year
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Department
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Designation
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Contact Number
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {people.map((person) => (
                              <tr key={person.email}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                      {/* <img className="h-10 w-10 rounded-full" src={person.image} alt="" /> */}
                                      <div className="text-sm font-medium text-gray-900">
                                        {person.name}
                                      </div>
                                    </div>
                                    <div className="ml-4">
                                      {/* <div className="text-sm font-medium text-gray-900">{person.name}</div> */}
                                      {/* <div className="text-sm text-gray-500">{person.email}</div> */}
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">
                                    {person.email}
                                  </div>
                                  {/* <div className="text-sm text-gray-500">{person.department}</div> */}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {/* <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                              </span> */}
                                  <div className="text-sm text-gray-900">
                                    {person.reg}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {person.year}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <div className="text-sm text-gray-900">
                                    {person.department}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <div className="text-sm text-gray-900">
                                    {person.designation}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <div className="text-sm text-gray-900">
                                    {person.contact}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FacultyInterface;
