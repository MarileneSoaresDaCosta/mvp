const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'lene',
  host: '127.0.0.1',
  database: 'timeplanner',
  port: 5432,
})


// get all charts for a user
const getChartsList = (userEmail, callback) => {
  // console.log('called query to retrieve  all charts for', userEmail);
  const email = userEmail.split('=')[1];
  // console.log(typeof email, email);
  // console.log('email extracted from param', email);
  // get user id
  const text = `SELECT user_id FROM users WHERE email='${email}';`;
  pool.query(text, (err, results) => {
    if(err) { throw err; }
    const id = results.rows[0].user_id;
    // console.log('got id:', id);
    // query for charts
    const textQCharts = `SELECT * FROM charts WHERE users_user_id = ${id}`;
    pool.query(textQCharts, (err, results) => {
      if(err) { throw err; }
      // console.log('charts query res', results.rows)
      callback(err, results.rows);
    });
  });
}

// post new chart
const addChart = (reqParams, reqBody, callback) => {
  console.log('called query to insert new chart. Body: ', reqBody, 'params', reqParams);
  // get last id available
  let last = 1;
  pool.query('SELECT max(chart_id) FROM charts;', (err, res) => {
    if(err) { throw err; }
    last = res.rows[0].max;
    console.log('last id in charts', last);
    const users_user_id = parseInt(reqParams.user_id.split('=')[1], 10);
    const chart_name = reqBody.chart_name[0];
    const chart_start_date = reqBody.chart_start_date[0];
    const chart_end_date = reqBody.chart_end_date[0];

    const values = [last + 1, chart_name, chart_start_date, chart_end_date, users_user_id];
    console.log('values', values);
    const text = 'INSERT INTO charts(chart_id, chart_name, chart_start_date, chart_end_date, users_user_id) VALUES ($1, $2, $3, $4, $5) RETURNING chart_id;';

    pool.query(text, values, (err, results) => {
      if(err) { throw err; }
      console.log('charts query res', results.rows)
      callback(err, results.rows[0]);
    });
  });
}


// post new task
const addTask = (reqParams, reqBody, callback) => {
  console.log('query: insert new task | Body: ', reqBody, 'params', reqParams);
  // get last id available
  let last = 1;
  pool.query('SELECT max(task_id) FROM tasks;', (err, res) => {
    if(err) { throw err; }
    last = res.rows[0].max;
    console.log('last id in tasks', last);
    const charts_chart_id = parseInt(reqParams.chart_id.split('=')[1], 10);
    const task_description = reqBody.task_description[0];
    const task_start_date = reqBody.task_start_date[0];
    const task_end_date = reqBody.task_end_date[0];

    const values = [last + 1, task_description, task_start_date, task_end_date, charts_chart_id];
    console.log('values', values);
    const text = 'INSERT INTO tasks(task_id, task_description, task_start_date, task_end_date, charts_chart_id) VALUES ($1, $2, $3, $4, $5) RETURNING task_id;';

    pool.query(text, values, (err, results) => {
      if(err) { throw err; }
      console.log('task query res', results.rows)
      callback(err, results.rows[0]);
    });
  });
}





// put edit chart
const editChart = () => {
  console.log('called query to edit chart info');
}

// delete chart
const deleteChart = () => {
  console.log('called query to Chart');
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
  getChartsList,
  addChart,
  editChart,
  deleteChart,
  addTask,
  editTask,
  deleteTask
}

