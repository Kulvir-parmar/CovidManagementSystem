const express = require('express');
const app = express();
// const mysql = require("mysql");
const cors = require('cors');

const port=3001;

app.use(cors)
app.use(express.json());



// Database Connection
// const db = mysql.createConnection({
//   user:'root',
//   host:'127.0.0.1',
//   password:"password",
//   database:"CMS",
//   port:'3306'
// })

// db.connect((err) => {
//   if (err) {
//     console.log(err.message);
//     return err
//   }
//   else{
//     console.log('SQL connected...');
//   }
// })

app.get("/",(req,res)=>{
  console.log("here")
  res.send("I am genius")
});

app.get("/searchHospital", (req, res) => {
  console.log("in api");
  // db.query("SELECT * FROM hospital", (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.json(result);
  //   }
  // });
});

// Server Running
app.listen(port,()=>{
  console.log('server is running'+port);
});