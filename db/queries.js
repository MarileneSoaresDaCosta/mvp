const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'lene',
  host: '127.0.0.1',
  database: 'timeplanner',
  port: 5432,
})

// users: not implemented for now

// get all charts
const getAllCharts = () => {
  console.log('called query to retrieve  all charts');
}

// post new chart
const addChart = () => {
  console.log('called query to insert new chart. Should return chart_id');
}

// put edit chart
const editChart = () => {
  console.log('called query to edit chart info');
}

// delete chart
const deleteChart = () => {
  console.log('called query to Chart');
}

// post new task
const addTask = () => {
  console.log('called query to insert new task; should return task_id');
}

// put edit task
const editTask = () => {
  console.log('called query to modify existing task');
}

// delete task
const deleteTask = () => {
  console.log('called query to delete task');
}

module.exports = {
  getAllCharts,
  addChart,
  editChart,
  deleteChart,
  addTask,
  editTask,
  deleteTask
}

