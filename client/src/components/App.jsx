
import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login.jsx';

const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <div>
      {/* banner */}
      <div className="banner-grid">

        <div className="title">
          <h1> timePlanner</h1>
        </div>

        <div className="search">
          <input className="form-control login-corner" type="search" placeholder="Search" aria-label="Search"></input>
        </div>

        <div className="leftCorner">
          <span id="login" onClick={() => setLogin(true)}>Login</span> | <span>Sign up</span>
        </div>

      </div>
      {/* main */}
      {
        login === false &&
        <div className="main jumbotron jumbotron-fluid text-center">
          <div className="row">
            <h4 className="display-5"> CHART YOUR PLANS</h4>
          </div>
          <div className="row">
            <div className="col"> </div>
            <div className="col">
              <button className="btn btn-info btn-md" onClick={() => setLogin(true)}>Login</button>
            </div>
            <div className="col"> </div>
          </div>
          <div className="row">
            <div className="col"> </div>
            <div className="col">
              {/* <button className="btn btn-info btn-md">New chart</button> */}
            </div>
            <div className="col"> </div>
          </div>
        </div>
      }
      {
        login === true &&
        <div className="jumbotron jumbotron-fluid text-center"> <Login setLogin={setLogin} /> </div>
      }

      <div className="row r footer-grid">
        <div className="left-foot">
        <img className="mvplogo" src="./mvplogo.png" alt="the logo for the mvp project"></img>
        </div>
        <div className="right-foot">

          <p className="footer-text">timePlanner is a personal project created for the Hack Reactor Software Engineering Immersive</p>
        </div>
        <div className="signature">
          msdacosta
        </div>

      </div>
    </div >
  )
}

export default App;