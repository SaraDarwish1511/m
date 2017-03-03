let Student = require('../models/Student');

let StudentController = {
    
register:function (req,res){
res.render('register');

 }
,





login:function(req,res){
var Username = req.body.Username;
var  password =req.body.password;

 Student.findOne({Username:Username,password:password},function(err,Student){
     if(!Student){
        console.log('hko');
                res.send('you are not athorized ')


               
                ;}
            else{
                req.session.Username= Username;
               res.redirect('/index');
            }
        })
 }

,
 getal:function(req, res){
        
       Student.find(function(err, students){
            
            if(err)
                res.send(err.message);
            else
                res.render('ho', {students});
        })
    },






    createStudent:function(req, res){
        let student = new Student(req.body);





        student.save(function(err, student){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{
req.session.Username= req.body.Username;
                console.log(student);
                res.redirect('index');
            }
        })
    }
}

module.exports = StudentController;