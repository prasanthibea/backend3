
const express = require('express')
const bodyParser = require("body-parser")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(4000, () => {
  console.log("Server is running on port 4000");
})

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "FRACAS@22",
  database: "backend3",

});


/* // Establish a connection with the database and use the tables:
db.getConnection(function (err, connection) {
  if (err) {
    console.error('Error connecting to the database', err); // Fixed typo: console.err -> console.error
    return;
  }

  connection.release(); // Release the connection back to the pool when done
});
 */

db.getConnection(function (err, connection) {
  if (err) {
    console.err("Error connecting to the database", err);
    return;
  } else {
    console.log("good")
    return;
  }
})

app.get("/teacher", (req, res) => {

  const result = { message: 'hai' }

  res.status(200).json(result);
})

app.get("/student", (req, res) => {
  const sql = " SELECT id,student,father FROM student "
  db.query(sql, (error, result) => {
    if (error) {
      res.status(500).json(error)
    } else {
      res.status(200).json(error)
    }
  });

  //res.send(result);

  return
  const result = { message: 'hello' }
  res.status(200).json(result);
})


app.post("/student", (req, res) => {

  const { id, student, father, phone } = req.body
  const sql = " INSERT INTO student (id, student, father, phone ) VALUES (?, ?, ?, ?) "
  db.query(sql, [id, student, father, phone], (error, result) => {
    if (error) {
      res.status(500).json(error)
    } else {
      res.status(200).json(error)
    }
  });

  //res.send(result);
  //console.log(email);
  //res.status(200).json(" email ");


  /* res.status(200).json(
    { student, father, phone }
  ) */





})