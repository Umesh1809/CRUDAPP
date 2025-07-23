require('./mongodb');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');

app.use(bodyparser.json());

// Serve the HTML frontend
app.use(express.static(path.join(__dirname, 'public')));

// API routes
const detailRoute = require('./routers/router');
app.use('/', detailRoute);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'app.html'));
});

app.listen(32778, '0.0.0.0', () => {
  console.log("Server running");
});