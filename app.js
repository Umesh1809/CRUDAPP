require('./mongodb')
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

const detailRoute =require('./routers/router');
app.use('/',detailRoute);
app.get('/', (req, res) => {
  res.send('Hello world');
});



app.listen(5000, (req,res) => {
    console.log("server running...")
});