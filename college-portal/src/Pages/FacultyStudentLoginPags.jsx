import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import classnames from 'classnames';

import '../Style/facultyStudentLogin.css';

const FacultyStudentLoginPags = () => {
  const [facultyRegNum, setFacultyRegNum] = useState('');
  const [facultyPassword, setFacultyPassword] = useState('');
  const [studentRegNum, setStudentRegNum] = useState('');
  const [studentPassword, setStudentPassword] = useState('');
  const [studentLogin, setStudentLogin] = useState(false);
  const [facultyLogin, setfacultyLogin] = useState(false);

  const history = useHistory();

  const facultyFormHandler = (e) => {
    e.preventDefault();
    let registrationNumber;
    let password;
    history.push('/faculty');
  };

  const studentFormHandler = (e) => {
    e.preventDefault();
    let registrationNumber;
    let password;
    history.push('/home');
  };

  return (
    <div className="container-fluid">
      <div className="row" id="trail">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <div className="pt-5 flex justify-end row m-5">
            {/* Extra Faculty */}
            <div class="w-96 pr-10">
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
            {/* Extra Faculty */}

            {/* <div
              className="w-96"
              style={{
                backgroundColor: 'white',
                borderRadius: '1.2rem',
                padding: '1rem 1rem 0rem 1rem',
              }}
            >
              <div>
                <h3 className="text-center ">FACULTY LOGIN</h3>
                <form noValidate onSubmit={facultyFormHandler}>
                  <div className="form-group">
                    <label htmlFor="facRegId">Registration Number</label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Username"
                      onChange={(e) => setFacultyRegNum(e.target.value)}
                      type="text"
                      value={facultyRegNum}
                      className={classnames('form-control')}
                      id="facRegId"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="passwordFacId">Password</label>
                    <input
                      onChange={(e) => setFacultyPassword(e.target.value)}
                      value={facultyPassword}
                      className={classnames('form-control')}
                      type="password"
                      id="passwordFacId"
                    />
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-md-1"></div>
                  </div>

                  <button type="submit" className="btn btn-info btn-block">
                    Login
                  </button>
                </form>
                <p className="text-center mt-2 ">
                  <Link className="text-center" to="/forgotPassword/faculty">
                    Forgot Password
                  </Link>
                </p>
              </div>
            </div> */}
          </div>

          {/* Student Login */}
          <div className="flex justify-end row m-5">
            {/* Extra Student */}
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
            {/* Extra Student */}

            {/* <div
              className="w-96"
              style={{
                backgroundColor: 'white',
                borderRadius: '1.2rem',
                padding: '1rem 1rem 0rem 1rem',
              }}
            >
              <div>
                <h3 className="text-center">STUDENT LOGIN</h3>
                <form onSubmit={studentFormHandler}>
                  <div className="form-group">
                    <label htmlFor="studentId">Registration Number</label>
                    <input
                      onChange={(e) => setStudentRegNum(e.target.value)}
                      type="text"
                      className={classnames('form-control')}
                      id="studentId"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="passwordId">Password</label>
                    <input
                      onChange={(e) => setStudentPassword(e.target.value)}
                      value={studentPassword}
                      className={classnames('form-control')}
                      type="password"
                      id="passwordId"
                    />
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-md-1"></div>
                  </div>

                  <button type="submit" className="btn btn-info btn-block ">
                    Login
                  </button>
                </form>
                <p className="text-center">
                  <Link className="text-center" to="/forgotPassword/student">
                    Forgot Password
                  </Link>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyStudentLoginPags;
