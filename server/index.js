require('dotenv').config();
const path = require('path');
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const { getChartsList, addChart, addTask } = require('../db/queries.js');

const port = process.env.PORT;
const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));

app.use(express.json());

// example request
app.get('/', (request, response) => {
  response.json({ info: 'TimePlanner is a React, Node.js, Express, and Postgres API' })
});

app.get('/charts/:email', (req, res) => {
  const param = req.params.email;
  // console.log('req in index - param', param);
  getChartsList(param, (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results);
  });
  // res.end();
})

app.post('/newchart/:user_id', (req, res) => {
  console.log('req param in post new chart', req.params.user_id);

  addChart(req.params, req.body, (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).send(results);
  });
});

app.post('/newtask/:chart_id', (req, res) => {
  console.log('req param in post new task', req.params.chart_id);

  addTask(req.params, req.body, (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).send(results);
  });
});



app.listen(port, () => {
  console.log(`TimePlanner running on:${port}`);
})