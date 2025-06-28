require('./mongodb')
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

const detailRoute =require('./routers/router');
app.use('/',detailRoute);



app.listen(3000, (req,res) => {
    console.log("server running...")
});