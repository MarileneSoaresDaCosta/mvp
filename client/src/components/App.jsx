import React from 'react';
import axios from 'axios';

const App = () => {

  return (
    <div>
      {/* banner */}
      <div className="row banner">
        <div className="col">
          <h1> timePlanner</h1>
        </div>
        <div className="col">
        </div>
      </div>
      {/* main */}
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="row">
          <h4 className="display-5"> CHART YOUR PLANS</h4>
        </div>
        <div className="row">
          <div className="col"> </div>
          <div className="col">
            <button className="btn btn-info btn-md">My charts</button>
          </div>
          <div className="col"> </div>
        </div>
        <div className="row">
          <div className="col"> </div>
          <div className="col">
            <button className="btn btn-info btn-md">New chart</button>
          </div>
          <div className="col"> </div>
        </div>
      </div>
      <div className="row text-center">
        <p className="footer">mvp</p>
      </div>
    </div >
  )
}

export default App;