const mongoose = require("mongoose");
const Schema = mongoose.Schema;
bcrypt = require('bcrypt')

const LoginUser = new Schema({
    email: {
      type: String
    },
    password: {
        type: String
    },
    userId: {
       type: Schema.Types.ObjectId,
       ref:'User'
    },

  });
  module.exports = mongoose.model("LoginUser", LoginUser);