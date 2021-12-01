import React, { useState, useEffect } from 'react';

import HomeHelper from '../Components/HomeHelper';

import { useHistory, withRouter } from 'react-router-dom';

const StudentUpdateProfile = () => {
  const history = useHistory();
  const [gender, setGender] = useState('');
  const [studentMobileNumber, setContactNumber] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherMobileNumber, setFatherContactNumber] = useState('');
  const [aadharCard, setAadharCard] = useState('');
  const [avatar, setAvatar] = useState('');
  const [modal, setModal] = useState(false);
  const imagehandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setAvatar(img);
    }
  };

  const formHandler = async (e) => {
    e.preventDefault();
    // const formData = new FormData()
    // formData.append("gender", gender)
    // formData.append("studentMobileNumber", studentMobileNumber)
    // formData.append("fatherName", fatherName)
    // formData.append("fatherMobileNumber", fatherMobileNumber)
    // formData.append("aadharCard", aadharCard)
    // formData.append("avatar", avatar)
    // formData.append("email", store.student.student.student.email)
    // dispatch(studentUpdate(formData, history))
    // setModal(true)
    // alert("Kindly login again to see updates")
    // dispatch(studentLogout())
    history.push('/');
  };
  return (
    <div>
      <HomeHelper />

      {/* New Form */}
      <div class="grid place-items-center">
      <div class="pt-4 w-full max-w-xs">
        <form onSubmit={formHandler} class="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">

          {/* Image Select */}
          <div className="form-group">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Profile Picture</label>
                <input
                  required
                  className="form-control"
                  type="file"
                  accept=".jpg,.png,.jpeg"
                  id="inputId"
                  onChange={imagehandler}
                ></input>
          </div>

          {/* Gender Select */}
          <div class="pt-6 inline-block relative w-64">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Gender</label>
            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setGender(e.target.value)}
            className=""
            id="genderId">
              <option>Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Contact Number */}
            <label class="pt-6 block text-gray-700 text-sm font-bold mb-2" for="username">
              Contact Number
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"      onChange={(e) => setContactNumber(e.target.value)}
            required
            type="number"
            // className="form-control"
            id="numberId"/>
          </div>

          {/* Fathers Name */}
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Father's Name
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setFatherName(e.target.value)}
            type="text"
            // className="form-control"
            id="fatherId"/>
          </div>

          {/* Fathers Contact */}
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Father's Contact Number
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setFatherContactNumber(e.target.value)}
            type="number"
            // className="form-control"
            id="fathercnId"/>
          </div>

          {/* Aadhar Card Number */}
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Aadhar Card Number
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setAadharCard(e.target.value)}
            type="number"
            // className="form-control"
            id="aadharId"/>
          </div>

          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
      </div>
      {/* New Form */}






      {/* <div className="container mt-5">
        <div className="row ">
          <div className="col-md-5 w-100 m-auto">
            <form onSubmit={formHandler}>
              <div className="form-group">
                <label htmlFor="inputId">Profile Picture</label>
                <input
                  required
                  className="form-control"
                  type="file"
                  accept=".jpg,.png,.jpeg"
                  id="inputId"
                  onChange={imagehandler}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="genderId">Gender</label>
                <select
                  onChange={(e) => setGender(e.target.value)}
                  className="form-control"
                  id="genderId"
                >
                  <option>Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="numberId">Contact Number</label>
                <input
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
                  type="number"
                  className="form-control"
                  id="numberId"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fatherId">Father Name</label>
                <input
                  onChange={(e) => setFatherName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="fatherId"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fathercnId">Father Contact Number</label>
                <input
                  onChange={(e) => setFatherContactNumber(e.target.value)}
                  type="number"
                  className="form-control"
                  id="fathercnId"
                />
              </div>
              <div className="form-group">
                <label htmlFor="aadharId">Aadhar Card Number</label>
                <input
                  onChange={(e) => setAadharCard(e.target.value)}
                  type="number"
                  className="form-control"
                  id="aadharId"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </form>
          </div>
        </div>
      </div> */}



    </div>
  );
};

export default withRouter(StudentUpdateProfile);
