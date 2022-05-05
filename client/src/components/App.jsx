
import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login.jsx';

const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <div>
      {/* banner */}
      <div className="row banner">
        <div className="col-6">
          <h1> timePlanner</h1>
        </div>
        <div className="col-6">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
          <span className="login" id="login" onClick={() => setLogin(true)}>Login</span> | <span className="signup">Sign up</span>
        </div>
      </div>
      {/* main */}
      { login === false &&
      <div className="jumbotron jumbotron-fluid text-center">
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
      {login === true &&
     <div className="jumbotron jumbotron-fluid text-center"> <Login setLogin={setLogin} /> </div>
     }

      <div className="row text-center">
        <p className="footer">mvp</p>
      </div>
    </div >
  )
}

export default App;