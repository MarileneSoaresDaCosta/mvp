import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from './Chart.jsx';


const AddChart = ({ user_id }) => {
  const [showNewChart, setShowNewChart] = useState(false);

  const [newChartId, setNewChartId] = useState('');

  const [data, setData] = useState({
    chart_name: "",
    chart_start_date: "",
    chart_end_date: ""
  })

  useEffect(() => {
    setShowNewChart(showNewChart);
    setNewChartId(newChartId)
  },[showNewChart, newChartId] );

  const { chart_start_date, chart_end_date, chart_name } = data;

  const changeHandlerNewChart = e => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  }

  const submitHandlerNewChart = ( e, showNewChart) => {
    e.preventDefault();
    console.log('data from addChart', data);
    var reqParam = user_id;
    const url = `/newchart/user_id=${reqParam}`;

    axios.post(url, data)
      .then(res => {
        // console.log('res at addChart >>', res);
        setNewChartId(res.data.chart_id);
        // console.log('new chart id >>>', res.data.chart_id);
        setShowNewChart(true);
      })
      .catch((err) => {
        throw err;
      });
  }

  return (
    <div>
      {showNewChart === false &&
        <form onSubmit={submitHandlerNewChart}>
          <div className="form-group">
            <label>What are you planning?</label>
            <input name="chart_name" type="text" className="form-control" placeholder="Project Name"
              value={chart_name} onChange={changeHandlerNewChart}></input>
          </div>

          <div className="form-group">
            <label> Starts on:</label>
            <input name="chart_start_date" type="date" className="form-control" placeholder="start date" value={chart_start_date} onChange={changeHandlerNewChart}></input>
          </div>

          <div className="form-group">
            <label> Ends on:</label>
            <input name="chart_end_date" type="date" className="form-control" placeholder="deadline" value={chart_end_date} onChange={changeHandlerNewChart}></input>
          </div>

          <button type="submit" name="submit" className="btn btn-info"> Let's do it!</button>
        </form>
      }
      {showNewChart === true &&
        <div>
          <Chart
          newChartId={newChartId}
          chart_name={chart_name}
          chart_start_date={chart_start_date}
          chart_end_date={chart_end_date}
          />
        </div>
      }
    </div>
  )
}

export default AddChart;