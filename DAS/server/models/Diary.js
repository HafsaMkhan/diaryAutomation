const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// bcrypt = require('bcrypt')

const Diary = new Schema({
    subjectName:{
        type: String
    },
    uploadedBy:{
        type:String,
    },
    classId: {
        type: Schema.Types.ObjectId,
        ref:'Class'
    },
    subjectId: {
        type: Schema.Types.ObjectId,
        ref:'CourseOutline'
    },
    date:{
        type: Date,
        default: Date.now
    },
    details:{
        type:String
    },
    title:{
        type:String
    },
    additional_comments:{
        type:String
    },
    file:{
        type: String,
    },
    approval:{
        type:Boolean,
        default:false
    },
    typeId:{
        type: Schema.Types.ObjectId,
        ref:'DiaryType'
    }
  });
  module.exports = mongoose.model("Diary", Diary);