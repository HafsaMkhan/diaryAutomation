const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// bcrypt = require('bcrypt')

const Class = new Schema({
    title:{
        type: String
    },  
  });
  module.exports = mongoose.model("Class", Class);