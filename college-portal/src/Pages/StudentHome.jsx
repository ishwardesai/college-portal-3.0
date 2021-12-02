import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import classes from './StudentHome.module.css';
import Navbar from '../UI/Navbar';

const Home = () => {
  const history = useHistory();

  return (
    <>
      <div className={`${classes['dashboard-grid']} `}>
        <div className={classes.box}>
          <Navbar active="student" user="student" />
        </div>
        <div className={`${classes.box} ${classes.content}`}>
          <div className={classes.chart}>
            <section class="text-gray-600 body-font pl-16">
              <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex flex-wrap -m-4">
                  {/* Student Card Left */}
                  <div class="p-4 lg:w-1/2 md:w-full">
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
                          Amar Narute
                        </h2>
                        <p class="leading-relaxed text-base">STUD2020202</p>
                        <a
                          href="/student/updateProfile"
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

                  {/* Student Table Left */}
                  <div class="p-4 pl-24 lg:w-1/2">
                    <table class="table-fixed">
                      <tbody>
                        <tr class="border-4 border-gray-300">
                          <td class="w-96 text-xl font-bold">Name</td>
                          <td class="pl-16 border-4 border-gray-300">Amar</td>
                          {/* <td>858</td> */}
                        </tr>
                        <tr class="bg-emerald-200 border-4 border-gray-300">
                          <td class="pr-10 w-96 text-xl font-bold">Email</td>
                          <td class="pl-16 pr-16 border-4 border-gray-300">
                            amar@gmail.com
                          </td>
                          {/* <td>112</td> */}
                        </tr>
                        <tr class="bg-emerald-200 border-4 border-gray-300">
                          <td class="w-96 text-xl font-bold">D.O.B.</td>
                          <td class="pl-16 border-4 border-gray-300">
                            20/11/1999
                          </td>
                          {/* <td>112</td> */}
                        </tr>
                        <tr class="bg-emerald-200 border-4 border-gray-300">
                          <td class="w-96 text-xl font-bold">Year</td>
                          <td class="pl-16 border-4 border-gray-300">2018</td>
                          {/* <td>112</td> */}
                        </tr>
                        <tr class="bg-emerald-200 border-4 border-gray-300">
                          <td class="w-96 text-xl font-bold">Department</td>
                          <td class="pl-16 border-4 border-gray-300">
                            Computer
                          </td>
                          {/* <td>112</td> */}
                        </tr>
                        <tr class="bg-emerald-200 border-4 border-gray-300">
                          <td class="w-96 text-xl font-bold">Section</td>
                          <td class="pl-16 border-4 border-gray-300">A</td>
                          {/* <td>112</td> */}
                        </tr>
                        <tr class="bg-emerald-200 border-4 border-gray-300">
                          <td class="w-96 text-xl font-bold">Batch</td>
                          <td class="pl-16 border-4 border-gray-300">
                            RC2016-17
                          </td>
                          {/* <td>112</td> */}
                        </tr>
                        <tr class="bg-emerald-200 border-4 border-gray-300">
                          <td class="w-96 text-xl font-bold">Gender</td>
                          <td class="pl-16 border-4 border-gray-300">Male</td>
                          {/* <td>112</td> */}
                        </tr>
                        <tr class="bg-emerald-200 border-4 border-gray-300">
                          <td class="w-96 text-xl font-bold">Contact Number</td>
                          <td class="pl-16 border-4 border-gray-300">
                            9876543210
                          </td>
                          {/* <td>112</td> */}
                        </tr>
                        <tr class="bg-emerald-200 border-4 border-gray-300">
                          <td class="w-96 text-xl font-bold">Aadhar Card</td>
                          <td class="pl-16 border-4 border-gray-300">
                            af12345gf167
                          </td>
                          {/* <td>112</td> */}
                        </tr>
                        <tr class="bg-emerald-200 border-4 border-gray-300">
                          <td class="w-96 text-xl font-bold">Father Name</td>
                          <td class="pl-16 border-4 border-gray-300">
                            David Jones
                          </td>
                          {/* <td>112</td> */}
                        </tr>
                        <tr class="bg-emerald-200 border-4 border-gray-300">
                          <td class="w-96 text-xl font-bold">
                            Father Contact Number
                          </td>
                          <td class="pl-16 border-4 border-gray-300">
                            8765432190
                          </td>
                          {/* <td>112</td> */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className={`${classes.info} p-8 text-center`}>
            <div className={`${classes['info-box']} rounded-xl bg-green-light`}>
              <p>Attendence Here</p>
            </div>
            <div className={`${classes['info-box']} rounded-xl bg-blue-100`}>
              <p>Some Other Detail here</p>
            </div>
            <div className={`${classes['info-box']} rounded-xl bg-blue-card`}>
              <p>Another Detail here</p>
            </div>
          </div>
        </div>
        <div className={`${classes.box}`}>
          <p>Calendar Here</p>
        </div>
      </div>
    </>
  );
};

export default Home;
