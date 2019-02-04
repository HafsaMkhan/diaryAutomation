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

const multer = require('multer');
// const jwt = require('jsonwebtoken');

var storage = multer.diskStorage({
  destination: '../client/myApp/src/images',
  filename: function (req, file, cb) {
    cb(null, file.fieldname +'-'+Date.now() )
  }
});

var upload = multer({ storage: storage })
app.use(express.static(__dirname + '../client/myApp/src/images'));
app.use(upload.single('image'));
//See the react auth blog in which cors is required for access
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

app.get('/', function (req, result) {
  const query = upload.findOne({});
  query.select('image');
  query.exec(function (err, meme) {
    if (err) return handleError(err);
    result.render('../client/myApp/src/images/', {
      path: meme.image.imageURL
    });
  })
})  



app
.route("/register/user")
.post(UserController.RegisterUser)

app
.route("/register/school")
.post(UserController.RegisterSchool)

app
.route("/api/login")
.post(UserController.handleLogin)

app
.route("/api/add/userType")
.post(AdminController.AddUserType)


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
