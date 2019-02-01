const mongoose = require("mongoose");
const Schema = mongoose.Schema;
bcrypt = require('bcrypt')

const UserType = new Schema({
    title: {
      type: String
    },
  
  });
  module.exports = mongoose.model("UserType", UserType);