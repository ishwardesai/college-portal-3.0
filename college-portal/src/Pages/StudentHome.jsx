import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import HomeHelper from '../Components/HomeHelper';
import classes from './StudentHome.module.css';
import Navbar from '../Components/Navbar';

const Home = () => {
  const history = useHistory();

  return (
    <>
      <div className={`${classes['dashboard-grid']} text-center`}>
        <div className={classes.box}>
          <Navbar />
        </div>
        <div className={`${classes.box} ${classes.content}`}>
          <div className={classes.chart}></div>
          <div className={`${classes.info} p-8`}>
            <div className={`${classes['info-box']} rounded-xl bg-green-light`}>
              <p>Attendence Here</p>
            </div>
            <div className={`${classes['info-box']} rounded-xl bg-blue-100`}>
              <p>Some Other Detail here</p>
            </div>
            <div className={`${classes['info-box']} rounded-xl bg-blue-card`}>
              <p>Another Detail here</p>
            </div>
          </div>
        </div>
        <div className={`${classes.box}`}>
          <p>Calendar Here</p>
        </div>
      </div>

      {/* <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 mt-5">
              <div className="row">
                <div className="col-md-5">
                  <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={'dcdc'} alt="Card cap" />
                    <div className="card-body">
                      <h5 className="card-title">Amar Narute</h5>
                      <h5 className="card-title">18CE02</h5>
                      <Link to="/student/updateProfile">UPDATE PROFILE</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 bg-dark  text-white">
                  <table className="table ">
                    <tbody className="text-white">
                      <tr>
                        <td>Name</td>
                        <td>Amar</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>amar@amar.com</td>
                      </tr>
                      <tr>
                        <td>Registration Number</td>
                        <td>18CE02</td>
                      </tr>
                      <tr>
                        <td>Date Of Birth</td>
                        <td>20 Feb</td>
                      </tr>
                      <tr>
                        <td>Year</td>
                        <td>1999</td>
                      </tr>
                      <tr>
                        <td>Department</td>
                        <td>COMP</td>
                      </tr>
                      <tr>
                        <td>Section</td>
                        <td>section</td>
                      </tr>
                      <tr>
                        <td>Batch</td>
                        <td>batch</td>
                      </tr>
                      <tr>
                        <td>Gender</td>
                        <td>Male</td>
                      </tr>
                      <tr>
                        <td>Contact Number</td>
                        <td>0909890909</td>
                      </tr>
                      <tr>
                        <td>Aadhar Card</td>
                        <td>9879879dcs9c7989</td>
                      </tr>
                      <tr>
                        <td>Father Name</td>
                        <td>dcscdlnskdcn</td>
                      </tr>
                      <tr>
                        <td>Father Contact Number</td>
                        <td>dcsciu09sc80980</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div> */}
    </>
  );
};

export default Home;
