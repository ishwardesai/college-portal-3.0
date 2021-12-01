import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ active, user }) => {
  const studentItems = [
    {
      name: 'student',
      link: '/home',
      title: 'Ralph Rangnick',
    },
    {
      name: 'marks',
      link: '/student/testPerformance',
      title: 'Test Scores',
    },
    {
      name: 'attendence',
      link: '/student/attendence',
      title: 'Attendence',
    },
    {
      name: 'subjects',
      link: '/student/getAllSubjects',
      title: 'Subjects',
    },
    {
      name: 'password',
      link: '/student/updatePassword',
      title: 'Update Password',
    },
    {
      name: 'students',
      link: '/',
      title: 'Sign Out',
    },
  ];
  const facultyItems = [
    {
      name: 'faculty',
      link: '/faculty',
      title: 'Ms. Shona',
    },
    {
      name: 'update_profile',
      link: '/faculty/updateProfile',
      title: 'Test Scores',
    },
    {
      name: 'update_attendence',
      link: '/attendenceFaculty',
      title: 'Attendence',
    },
    {
      name: 'update_marks',
      link: '/faculty/uploadMarks',
      title: 'Subjects',
    },
    {
      name: 'update_password',
      link: '/faculty/updatePassword',
      title: 'Update Password',
    },
  ];

  let navItems = facultyItems;

  if (user === 'student') {
    navItems = studentItems;
  }

  return (
    <div className=" h-full w-full flex justify-center items-start text-white border border-nav-inactive">
      <ul className="h-2/5 flex flex-col justify-between  items-stretch mt-20 p">
        {navItems.map((item) => (
          <li
            className={` ${
              active === item.name
                ? 'bg-nav-active'
                : 'text-nav-inactive  hover:bg-blue-100'
            } rounded-lg  `}
          >
            <Link to={item.link}>
              <p className="p-3">{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
