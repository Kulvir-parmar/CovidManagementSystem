import express from 'express'
import cors from 'cors'
import mysql from 'mysql'

const app = express()
const port = 3001

app.use(cors())
app.use(express.json());
// Database connection
const db = mysql.createConnection({
  user: 'root',
  host: '127.0.0.1',
  password: 'password',
  database: 'BDMS',
});

db.connect((err) => {
  if (err) {
    console.log(err.message);
    return err
  }
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

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

app.get("/searchOxygen", async (req, res) => {
  await db.query("SELECT * FROM cms.oxygen", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});


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
    db.query('SELECT * FROM cms.plasma WHERE bloodGroup = ?',
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