const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// bcrypt = require('bcrypt')

const Message = new Schema({
    assignedBy:{
        type: String
    },
    assignedTo:{
        type: String
    },
    title:{
        type: String
    },
    types:{
        type: String
    },
    additional_details:{
        type: String
    },
    file_attachment:{
        type: String
    },  
  });
  module.exports = mongoose.model("Message", Message);