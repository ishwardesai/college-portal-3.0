import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ButtonPrimary from './ButtonPrimary';

const SignInCard = ({ login, forgotPassword, title }) => {
  const [regNum, setRegNum] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();

  const signInHandler = (e) => {
    e.preventDefault();
    history.push(login);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-96">
        <form
          class="bg-blue-100 shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4"
          noValidate
          onSubmit={signInHandler}
        >
          <h1 class="font-extrabold text-3xl py-1.5">{title}</h1>
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
              onChange={(e) => setRegNum(e.target.value)}
              type="text"
              value={regNum}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              id="passwordFacId"
            />
          </div>
          <div class="flex items-center justify-between">
            <ButtonPrimary name="Sign In" />
            <Link
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to={forgotPassword}
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInCard;
