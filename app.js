const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require('./routes/route')

const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://aashu:root@mini-project-cluster.kzrvbeg.mongodb.net/Authentication-System"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log(error);
  });

app.use('/', route)

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
    
