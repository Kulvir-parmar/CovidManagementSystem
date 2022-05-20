const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require('cors');

app.use(cors)
app.use(express.json());

// app.get("/",(req,res)=>{
//   res.send(console.alert('success'));
// });

app.listen(3001,()=>{
  console.log('server is running at 3001');
});