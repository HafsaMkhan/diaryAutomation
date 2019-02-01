const mongoose = require("mongoose");
const Schema = mongoose.Schema;
bcrypt = require('bcrypt')

const User = new Schema({
    name: {
      type: String
    },
    email: {
      type: String
    },
    registrationNo: {
      type: String
    },
    fatherName: {
      type: String
    },
    contactNo: {
      type: String
    },
    emergencyNo:{
      type:String
    },
    address: {
      type: String
    },
    CNIC: {
        type: String
    },
    DOB: {
      type: Date
  },
    IsActive: {
        type: Boolean,
        default:false
    },
    IsApproved: {
        type: Boolean,
        default:false
    },
    UserTypeId: {
      type: String
  },
  
  
  });
  module.exports = mongoose.model("User", User);