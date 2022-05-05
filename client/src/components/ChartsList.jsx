import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddChart from './AddChart.jsx';
// import Chart from './Chart.jsx';



const ChartsList = ({ userCharts }) => {
  const [showAddChart, setShowAddChart] = useState(false);
  // addChart: show new component

  useEffect(() => {
    setShowAddChart(showAddChart);
  }, [showAddChart]);

  const addChart = () => {
    setShowAddChart(true);
  }

  return (
    <div>
      {showAddChart === false &&
        <div>
          {userCharts.map((chartObj) => {
            console.log('chartObj name', chartObj['chart_name']);
            return <div
              className="chartListItem"
              key={chartObj['chart_id']}>
              {chartObj['chart_name']}
            </div>
          })
          }
          < div >
            <button type="submit" name="submit" className="btn btn-info" onClick={addChart}> Add a new chart</button>
          </div>
        </div >
      }
      {
        showAddChart === true &&
        <div>
          <AddChart
          user_id={userCharts[0]['users_user_id']}/>
        </div>

      }
    </div >
  )
}

export default ChartsList;