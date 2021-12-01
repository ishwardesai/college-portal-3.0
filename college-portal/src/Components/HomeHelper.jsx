import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

const Home = () => {
  const history = useHistory();
  const [name, setName] = useState('Ralph Rangnick');
  const logoutHandler = () => {
    // console.log("Logout");
    history.push('/');
  };
  const navigation = [
    // { name: 'DASHBOARD', href: '/admin', current: true },
    { name: name, href: '/home', current: true },
    { name: 'STUDENTS', href: '/studentDetails', current: false },
    // { name: 'NEW CONVERSATION', href: '/attendenceFaculty', current: false },
    {
      name: 'UPDATE PASSWORD',
      href: '/student/updatePassword',
      current: false,
    },
    // { name: 'UPDATE PASSWORD', href: '/faculty/updatePassword', current: false },
    // { name: 'ALL STUDS', href: '/admin/allStudents', current: false },
    // { name: 'ALL SUBJECTS', href: '/admin/allSubjects', current: false },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <div>
      {/* NEW NAVBAR */}
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  {/* <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div> */}

                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* ****************MENU DROPDOWN**************** */}
                  <Menu
                    as="div"
                    className="relative inline-block text-left pl-10"
                  >
                    <div>
                      <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                        Academics
                        <ChevronDownIcon
                          className="-mr-1 ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/student/testPerformance"
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                TEST PERFORMANCE
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/student/attendence"
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                ATTENDANCE
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/student/getAllSubjects"
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                STUDENT SUBJECT LIST
                              </a>
                            )}
                          </Menu.Item>
                          {/* <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block w-full text-left px-4 py-2 text-sm'
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </form> */}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  {/* ****************************MENU DROPDOWN******************************** */}

                  {/* <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div> */}
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/faculty"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item> */}
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              onClick={logoutHandler}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* NEW NAVBAR */}

      {/* <div className="container-fluid">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg navbar-light  bg-light">
            <h4 className="navbar-brand mt-1" href="">
              PCCE
            </h4>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <button type="button" className="btn">
                    <Link to="/home">
                      <li>{name.toUpperCase()}</li>
                    </Link>
                  </button>
                </li>
                
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#sdcs"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    ACADEMIC{' '}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                      className="dropdown-item"
                      to="/student/testPerformance"
                    >
                      Test Performance
                    </Link>
                    <Link className="dropdown-item" to="/student/attendence">
                      Attendance
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/student/getAllSubjects"
                    >
                      Student Subject List
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn">
                    <Link to="/studentDetails">
                      <li>STUDENTS</li>
                    </Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn">
                    <Link to="/studentDetails">
                      <li>NEW CONVERSATION</li>
                    </Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn">
                    <Link to="/student/updatePassword">
                      <li>UPDATE PASSWORD</li>
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <button
                style={{ listStyle: 'none' }}
                onClick={logoutHandler}
                type="button"
                className="btn"
              >
                <li>LOGOUT</li>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default Home;
