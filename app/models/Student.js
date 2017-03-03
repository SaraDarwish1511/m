var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
    Username:{
       type:String,
        required:true, 
        unique:true
    } 
    ,
    Name:String,


    password:{
       type:String,
        required:true, 
       
    } ,
    img: { data: Buffer, contentType: String }

  
})

var Student = mongoose.model("student",studentSchema);

module.exports = Student;