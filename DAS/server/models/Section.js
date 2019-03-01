const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// bcrypt = require('bcrypt')

const Section = new Schema({
    name:{
        type: String
    },
    class: {
        type: Schema.Types.ObjectId,
        ref:'Class'
    },
    incharge: {
      type: Schema.Types.ObjectId,
      ref:'User'
    },
  
  });
  module.exports = mongoose.model("Section", Section);