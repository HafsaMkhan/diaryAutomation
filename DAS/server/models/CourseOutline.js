const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// bcrypt = require('bcrypt')

const CourseOutline = new Schema({
    subjectName:{
        type: String
    },
    uploadedBy:{
        type:String,
    },
    class: {
        type: Schema.Types.ObjectId,
        ref:'Class'
    },
    outline:{
        type: String,
    },
  });
  module.exports = mongoose.model("CourseOutline", CourseOutline);