import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AddTask = ({ newChartId, chart_start_date, chart_end_date }) => {
  // when click on new task, send post and refresh
  // put task for given chart id
  const [newTaskId, setNewTaskId] = useState('');

  const [data, setData] = useState({
    task_start_date: "",
    task_end_date: "",
    task_description: ""
  });

  useEffect(() => {;
    setNewTaskId(newTaskId);
  },[ newTaskId] );


  const { task_start_date, task_end_date, task_description } = data;

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  }

  const resetForm = () => {
    document.getElementById('AddTaskForm').reset();
  };

  const submitNewTask = e => {
    e.preventDefault();
    console.log('data from addTask', data);
    var reqParam = newChartId;
    console.log('add task reqParam: >>>', reqParam, 'body:>>', data);
    const url = `/newtask/chart_id=${reqParam}`;

    axios.post(url, data)
      .then(res => {
        // console.log('res at addTask', res.data);
        setNewTaskId(res.data.task_id);
        // console.log('new task id >>', res.data.task_id);
        resetForm();
      })
      .catch((err) => {
        throw err;
      });
  }



  return (
    <div>
      <form id="AddTaskForm" onSubmit={submitNewTask}>
        <div className="task">
          <input name="task_description" type="text" className="form-control" placeholder="task"
            value={task_description} onChange={changeHandler}></input>
        </div>

        <div className="bar">
          <input name="task_start_date" type="date" className="form-control" placeholder="start date" value={task_start_date} onChange={changeHandler}></input>

          <input name="task_end_date" type="date" className="form-control" placeholder="deadline" value={task_end_date} onChange={changeHandler}></input>

          <button type="submit" name="submit" className="btn-task">></button>
        </div>
      </form>
    </div>
  )
}

export default AddTask;
