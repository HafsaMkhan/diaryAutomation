const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// bcrypt = require('bcrypt')

const School = new Schema({
    schoolId:{
      type:String
    },
    name: {
      type: String
    },
    email:{
      type:String
    },
    address: {
      type: String
    },
    city:{
      type:String
    },
    country:{
      type:String
    },
    contactNo: {
      type: String
    },
    slogan: {
      type: String
    },
    image:{
       type:String
    },
    IsActive: {
        type: Boolean,
        default:false
    },
    IsApproved: {
        type: Boolean,
        default:false
    },
    registration_code:{
        type:String
    }
  
  
  });
  module.exports = mongoose.model("School", School);