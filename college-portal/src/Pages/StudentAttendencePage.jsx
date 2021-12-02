import React, { useState, useEffect } from 'react';
import Navbar from '../UI/Navbar';
import classes from './StudentAttendence.module.css';

import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  let attendence = [
    {
      subjectCode: 7.1,
      subjectName: 'Compiler Construction',
      maxHours: 50,
      lectureAttended: 21,
      absentHours: 10,
      totalLecturesByFaculty: 30,
    },
    {
      subjectCode: 7.2,
      subjectName: 'Big Data Analytics',
      maxHours: 50,
      lectureAttended: 25,
      absentHours: 5,
      totalLecturesByFaculty: 30,
    },
    {
      subjectCode: 7.3,
      subjectName: 'Data Mining',
      maxHours: 50,
      lectureAttended: 28,
      absentHours: 2,
      totalLecturesByFaculty: 30,
    },
    {
      subjectCode: 7.4,
      subjectName: 'Web Tech',
      maxHours: 50,
      lectureAttended: 18,
      absentHours: 1,
      totalLecturesByFaculty: 30,
    },
    {
      subjectCode: 7.5,
      subjectName: 'Image Processing',
      maxHours: 50,
      lectureAttended: 30,
      absentHours: 0,
      totalLecturesByFaculty: 30,
    },
  ];

  return (
    <div className={classes.grid}>
      <div>
        <Navbar active={'attendence'} />
      </div>
      <div className="p-10">
        <div class="grid place-items-center pb-10">
          <h1 class="text-xl font-bold text-gray-800">ATTENDANCE</h1>
        </div>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-800">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-gray-50 uppercase tracking-wider"
                    >
                      S.No
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-gray-50 uppercase tracking-wider"
                    >
                      Subject Code
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-gray-50 uppercase tracking-wider"
                    >
                      Subject Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-gray-50 uppercase tracking-wider"
                    >
                      Maximum Hours
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-gray-50 uppercase tracking-wider"
                    >
                      Present Hours
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-gray-50 uppercase tracking-wider"
                    >
                      Absent Hours
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-gray-50 uppercase tracking-wider"
                    >
                      Total Hours
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-gray-50 uppercase tracking-wider"
                    >
                      Attendence
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {attendence.map((res, index) => (
                    <tr key={index}>
                      <th scope="row" className="px-6 py-4 whitespace-nowrap">
                        {index + 1}
                      </th>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {res.subjectCode}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {res.subjectName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {res.maxHours}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {res.lectureAttended}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {res.absentHours}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {res.totalLecturesByFaculty}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {/* <span className="px-2 inline-flex leading-5 font-semibold rounded-full bg-green-100 text-green-800"> */}
                        <span
                          className={
                            (res.lectureAttended / res.totalLecturesByFaculty) *
                              100 >
                            75
                              ? 'px-2 inline-flex leading-5 font-semibold rounded-full bg-green-100 text-green-800'
                              : 'px-2 inline-flex leading-5 font-semibold rounded-full bg-red-100 text-red-500'
                          }
                        >
                          {(
                            (res.lectureAttended / res.totalLecturesByFaculty) *
                            100
                          ).toFixed(2)}
                          %
                        </span>
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
  );
};

export default Home;
