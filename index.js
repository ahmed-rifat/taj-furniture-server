const express = require('express');
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();
const app =express();

app.use(cors());
app.use(express.json());

app.get('/',(req, res)=>{
     res.send('running server');
});

app.listen(port, ()=>{
    console.log("listening to port",port);
})