import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChartsList from './ChartsList.jsx';


const Login = (props) => {
  const [showChartsList, setShowChartsList] = useState(false);

  const [userCharts, setUserCharts] = useState([]);

  const [data, setData] = useState({
    email: "",
    password: ""
  })


  useEffect(() => {
    setShowChartsList(showChartsList);
  },[showChartsList] );

  const { email, password } = data;

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  }

  const submitHandler = (e, showChartsList) => {
    e.preventDefault();
    console.log('data from form', data.email[0]);
    var reqParam = data.email[0];
    const url = `/charts/email=${reqParam}`;

    axios.get(url)
      .then(res => {
        console.log('res at login', res.data);
        setUserCharts(res.data);
        console.log('userCharts', userCharts);
        setShowChartsList(true);
      })
      .catch((err) => {
        throw err;
      });
  }



  return (
    <div> {showChartsList === false &&
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input name="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"
            value={email} onChange={changeHandler}></input>
        </div>
        <div className="form-group">
          <input name="password" type="password" className="form-control" placeholder="Password" value={password} onChange={changeHandler}></input>
        </div>
        <button type="submit" name="submit" className="btn btn-info"> Submit</button>
      </form>
    }
      {showChartsList === true &&
        <div className="jumbotron jumbotron-fluid text-center">
          <ChartsList userCharts={userCharts} />
        </div>
      }
    </div >
  )
}

export default Login;