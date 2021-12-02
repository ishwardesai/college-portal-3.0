import React, { useState } from 'react';
import SignInCard from '../UI/SignInCard';
import ButtonPrimary from '../UI/ButtonPrimary';

import '../Style/facultyStudentLogin.css';

const FacultyStudentLoginPags = () => {
  const [login, setLogin] = useState('student');

  // const buttonClickHandler = () => {
  //   if (login === 'student') {
  //     console.log(login);
  //     console.log(login === 'student');
  //     setLogin('faculty');
  //   }
  //   if (login === 'faculty') {
  //     console.log(login);
  //     console.log(login === 'faculty');
  //     setLogin('student');
  //   }
  // };

  return (
    <div id="trail">
      <div className="h-screen flex flex-col items-center justify-center">
        {login === 'faculty' ? (
          <SignInCard
            login="/faculty"
            forgotPassword="/forgotPassword/faculty"
            title="Faculty Login"
          />
        ) : (
          <SignInCard
            login="/home"
            forgotPassword="/forgotPassword/student"
            title="Student Login"
          />
        )}{' '}
        <div class="flex items-center justify-center">
          <ButtonPrimary
            name="Faculty"
            clickHandler={() => {
              setLogin('faculty');
            }}
          />
          <ButtonPrimary
            name="Student"
            clickHandler={() => {
              setLogin('student');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FacultyStudentLoginPags;
