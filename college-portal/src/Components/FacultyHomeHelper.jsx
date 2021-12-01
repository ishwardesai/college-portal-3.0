import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const Home = () => {
  const history = useHistory();
  const [name, setName] = useState('Ms. Shona Afonso');

  const logoutHandler = () => {
    // console.log("Logout");
    history.push('/');
  };
  const navigation = [
    // { name: 'DASHBOARD', href: '/admin', current: true },
    { name: name, href: '/faculty', current: false },
    { name: 'UPDATE PROFILE', href: '/faculty/updateProfile', current: false },
    { name: 'MARK ATTENDANCE', href: '/attendenceFaculty', current: false },
    { name: 'UPLOAD MARKS', href: '/faculty/uploadMarks', current: false },
    { name: 'UPDATE PASSWORD', href: '/faculty/updatePassword', current: false },
    // { name: 'ALL STUDS', href: '/admin/allStudents', current: false },
    // { name: 'ALL SUBJECTS', href: '/admin/allSubjects', current: false },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
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
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
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
                        src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
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
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
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
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
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
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                <li className="nav-item">
                  <button type="button" className="btn">
                    <Link to="/faculty/updateProfile">
                      <li>UPDATE PROFILE</li>
                    </Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn">
                    <Link to="/attendenceFaculty">
                      <li>MARK ATTENDANCE</li>
                    </Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn">
                    <Link to="/faculty/uploadMarks">
                      <li>UPLOAD MARKS</li>
                    </Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn">
                    <Link to="/faculty/updatePassword">
                      <li>UPDATE PASSWORD</li>
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <button
                style={{ listStyle: 'None' }}
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
