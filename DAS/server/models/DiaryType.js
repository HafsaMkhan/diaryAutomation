const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// bcrypt = require('bcrypt')

const DiaryType = new Schema({
    title: {
      type: String
    },
  
  });
  module.exports = mongoose.model("DiaryType", DiaryType);