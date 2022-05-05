import React, { useState } from 'react';
import axios from 'axios';
import AddTask from './AddTask.jsx';
import Task from './Task.jsx';


const Chart = ({ newChartId, chart_name, chart_start_date, chart_end_date }) => {


  // get tasks >> generate list below

  return (
    <div>
    <div className="top-grid">
      <div className="empty"></div>
      <div className="start">{chart_start_date}</div>
      <div className="projectName">{chart_name}</div>
      <div className="end">{chart_end_date}</div>
    </div>

    <div> tasks list</div>

    <div>
      <AddTask
      newChartId={newChartId}
      chart_start_date={chart_start_date}
      chart_end_date={chart_end_date}
      />
      </div>
      </div>
  )
}

export default Chart;
