require('dotenv').config();
const path = require('path');
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const db = require('../db/queries.js');

const port = process.env.PORT;
const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));


app.use(express.json());

// example request
app.get('/', (request, response) => {
  response.json({info: 'TimePlanner is a React, Node.js, Express, and Postgres API'})
});


app.listen(port, () => {
  console.log(`TimePlanner running on:${port}`);
})