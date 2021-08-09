const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const postsRoutes = require("./routes/posts");

const app = express();


mongoose.connect("mongodb+srv://dan:8uHbkbiB2RJRPs3D@cluster0.e9cz3.mongodb.net/node-angular?retryWrites=true&w=majority")
 .then(() => {
   console.log('Connected to database!');
 })
 .catch(() => {
   console.log('Connection failed!');
 });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
   "Access-Control-Allow-Headers",
   "Origin, X-Requested-With, Content-Type, Accept"
   );
   res.setHeader(
     "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
  next();
});

//'8uHbkbiB2RJRPs3D'

app.use("/api/posts", postsRoutes);

module.exports = app;
