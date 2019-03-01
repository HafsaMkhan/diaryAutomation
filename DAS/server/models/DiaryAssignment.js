const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// bcrypt = require('bcrypt')

const Diary = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    diaryId:{
        type: Schema.Types.ObjectId,
        ref:'Diary'
    }
  });
  module.exports = mongoose.model("Diary", Diary);