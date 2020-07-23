const authRoutes = require("./routes/auth");
const mongoose = require("mongoose")
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(authRoutes);
app.use((req, res) => {
    res.send("<h1>Welcome to my app</h1>");
  });


let db = process.env.MONGODB_URI;
const port = process.env.PORT;
mongoose
  .connect(
    db,{ useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(result => {
    console.log("Database connected");
    app.listen(port);
  })
  .catch(err => console.log(err));