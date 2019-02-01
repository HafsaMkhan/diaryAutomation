// app.js
const cors = require('cors');
const express = require("express");
var path = require('path')
const bodyParser = require("body-parser"); 
var config=require("./config/db");
const UserController = require("./controllers/UserController")
const AdminController = require('./controllers/AdminController')

const app = express();
const port = process.env.PORT || 3301;

app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
.route("/api/register")
.post(UserController.RegisterUser)

app
.route("/api/login")
.post(UserController.handleLogin)

app
.route("/api/add/userType")
.post(AdminController.AddUserType)



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
