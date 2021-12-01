import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import classnames from "classnames";

import "../Style/facultyStudentLogin.css";

const FacultyStudentLoginPags = () => {
  const [facultyRegNum, setFacultyRegNum] = useState("");
  const [facultyPassword, setFacultyPassword] = useState("");
  const [studentRegNum, setStudentRegNum] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [studentLogin, setStudentLogin] = useState(false);
  const [facultyLogin, setfacultyLogin] = useState(false);
  const [login,setLogin] = useState('student')

  const history = useHistory();

  const facultyFormHandler = (e) => {
    e.preventDefault();
    let registrationNumber;
    let password;
    history.push("/faculty");
  };

  const studentFormHandler = (e) => {
    e.preventDefault();
    let registrationNumber;
    let password;
    history.push("/home");
  };

  return (
    <div className="container-fluid">
      <div className="row" id="trail">
        <div className="col-md-6"></div>
        <div className="col-md-6 grid place-items-center pt-48">
         {login==='faculty'? 
          <div className="pt-5 flex justify-end row m-5 mt-0">
            {/* Extra Faculty */}
            <div class="w-96 pr-10 grid">
              <form
                class="bg-blue-100 shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4"
                noValidate
                onSubmit={facultyFormHandler}
              >
                <h1 class="font-extrabold text-3xl py-1.5">Faculty Login</h1>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Registration Number
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Registration Number"
                    onChange={(e) => setFacultyRegNum(e.target.value)}
                    type="text"
                    value={facultyRegNum}
                    id="facRegId"
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="*****"
                    onChange={(e) => setFacultyPassword(e.target.value)}
                    value={facultyPassword}
                    // className={classnames('form-control')}
                    type="password"
                    id="passwordFacId"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                  <Link
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    to="/forgotPassword/faculty"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </form>
            </div>
          </div> :

          <div className="flex justify-end row m-5">
            <div class="w-96 pr-10">
              <form
                class="bg-blue-100 shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4"
                onSubmit={studentFormHandler}
              >
                <h1 class="font-extrabold text-3xl py-1.5">Student Login</h1>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Registration Number
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Registration Number"
                    onChange={(e) => setStudentRegNum(e.target.value)}
                    type="text"
                    // className={classnames('form-control')}
                    id="studentId"
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="*****"
                    onChange={(e) => setStudentPassword(e.target.value)}
                    value={studentPassword}
                    // className={classnames('form-control')}
                    type="password"
                    id="passwordId"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                  <Link
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    to="/forgotPassword/student"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </form>
            </div>
          </div>}
          <div class="flex items-center justify-between">
            <div class="pr-4">
            <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={()=> {setLogin('student')}}
                  >
                    Student
                  </button>
            </div>
            <div class="">
            <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={()=> {setLogin('faculty')}}
                  >
                    Faculty
                  </button>
            </div>   
            </div>
          {/* <button onClick={()=> {setLogin('student')}}>Student</button>
          <button onClick={()=> {setLogin('faculty')}}>Faculty</button> */}
        </div>
      </div>
    </div>
  );
};

export default FacultyStudentLoginPags;
