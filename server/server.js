import express from 'express'  //To run the server
import cors from 'cors'  // To connect frontend with backend
import mysql from 'mysql' //database

const app = express()
const port = 3001  // Port on which our server is running

app.use(cors())
app.use(express.json()); 

// Database connection
const db = mysql.createConnection({
  user: 'root',
  host: '127.0.0.1',
  password: 'password',
  database: 'CMS',
});

// To check if database is connected successfully
db.connect((err) => {
  if (err) {
    console.log(err.message);
    return err
  }
})

// Home route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Route for getting Hospital data
app.get("/searchHospital", async (req, res) => {
  await db.query("SELECT * FROM cms.hospital", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});


// Getting some error in this post api *Check Later No time Now*
// app.post("/searchHospital", (req, res) => {
//   const region = req.body.region;
//     db.query('SELECT * FROM cms.hospital WHERE address LIKE "%region%" ',
//     [region],
//       (err, result) => {
//         if (err) res.send({ err: err.message });
//         else {
//           res.json(result);
//         }
//       })
// })

// Route to check oxygen availivility
app.get("/searchOxygen", async (req, res) => {
  await db.query("SELECT * FROM cms.oxygen", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

// Route to check Plasma availivility
app.post("/plasmaSearch", (req, res) => {
  const bloodGroup = req.body.bloodGroup;
  if (bloodGroup == 'all') {
    db.query('SELECT * FROM cms.plasma order by idplasma',
      (err, result) => {
        if (err) res.send({ err: err.message });
        else {
          res.json(result);
        }
      })
  }
  else {
    db.query('SELECT * FROM cms.plasma WHERE bloodGroup = ? ORDER BY idplasma',
      [bloodGroup],
      (err, result) => {
        if (err) res.send({ err: err.message });
        else {
          res.json(result);
        }
      })
  }
})


app.listen(port, () => { })