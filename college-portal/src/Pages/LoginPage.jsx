import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';

const LoginPage = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const fromHandler = (e) => {
    e.preventDefault();
    history.push('/admin');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
      
        <div className="col-md-8">
          <div className="d-flex justify-content-md-center align-items-center vh-100">
            <div class="flex justify-center">
              {/* <h1 class="text-3xl font-bold justify-center">WELCOME ADMIN</h1> */}
                
              {/* NEW FORM */}
              <div class="justify-center items-center w-full max-w-xs">
              <h1 class="pb-10 text-3xl font-bold justify-center">ADMIN</h1>
                <form noValidate onSubmit={fromHandler} class="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                      Registration Number
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    type="text"
                    value={registrationNumber}
                    // className={classnames('form-control form-control-lg')}
                    id="emailId"
                    placeholder="Registration Number" />
                  </div>
                  <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                      Password
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    // className={classnames('form-control form-control-lg')}
                    type="password"
                    id="passwordId"
                    placeholder="****" />
                  </div>
                  <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                      Sign In
                    </button>
                    {/* <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                      Forgot Password?
                    </a> */}
                  </div>
                </form>
              </div>
              {/* NEW FORM */}


              {/* ********ORIGINAL FORM******** */}
              {/* <form noValidate onSubmit={fromHandler}>
                <div className="form-group">
                  <label htmlFor="emailId">Registration Number</label>
                  <input
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    type="text"
                    value={registrationNumber}
                    className={classnames('form-control form-control-lg')}
                    id="emailId"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordId">Password</label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className={classnames('form-control form-control-lg')}
                    type="password"
                    id="passwordId"
                  />
                </div>

                <button type="submit" className="btn btn-info btn-block">
                  Login
                </button>
              </form> */}
              {/* ***********ORIGINAL FORM********** */}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
