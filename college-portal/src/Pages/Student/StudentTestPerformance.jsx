import React, { useState, useEffect } from 'react';
import HomeHelper from '../../Components/HomeHelper';
import { useHistory } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import classes from './StudentMarks.module.css';

const StudentTestPerformance = () => {
  const history = useHistory();

  let CycleTest1 = [
    {
      subjectCode: 7.1,
      subjectName: 'Compiler Construction',
      marks: 17,
      totalMarks: 25,
    },
    {
      subjectCode: 7.2,
      subjectName: 'Big Data Analytics',
      marks: 15,
      totalMarks: 25,
    },
    {
      subjectCode: 7.3,
      subjectName: 'Data Mining',
      marks: 20,
      totalMarks: 25,
    },
    {
      subjectCode: 7.4,
      subjectName: 'Web Tech',
      marks: 22,
      totalMarks: 25,
    },
    {
      subjectCode: 7.5,
      subjectName: 'Image Processing',
      marks: 19,
      totalMarks: 25,
    },
  ];

  return (
    <>
      <div className={classes.grid}>
        <div>
          <Navbar active={'marks'} />
        </div>
        <div className="p-10">
          <div class="grid place-items-center pb-10">
            <h1 class="text-xl font-bold text-gray-800">IT MARKS</h1>
          </div>
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <h4 class="pb-2 text-md font-bold text-gray-800">
                  INTERNAL TEST 1
                </h4>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-200">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-bold text-gray-800 uppercase tracking-wider"
                      >
                        S.No
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-bold text-gray-800 uppercase tracking-wider"
                      >
                        Subject Code
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-bold text-gray-800 uppercase tracking-wider"
                      >
                        Subject Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-bold text-gray-800 uppercase tracking-wider"
                      >
                        Obtained Marks
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-bold text-gray-800 uppercase tracking-wider"
                      >
                        Total Marks
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-bold text-gray-800 uppercase tracking-wider"
                      >
                        Percentage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {CycleTest1.map((res, index) => (
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
                          {res.marks}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {res.totalMarks}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={
                              (res.marks / res.totalMarks) * 100 > 60
                                ? 'px-2 inline-flex leading-5 font-semibold rounded-full bg-green-100 text-green-800'
                                : 'px-2 inline-flex leading-5 font-semibold rounded-full bg-red-100 text-red-500'
                            }
                          >
                            {(res.marks / res.totalMarks) * 100}%
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
    </>
  );
};

export default StudentTestPerformance;
