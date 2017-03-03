let Project = require('../models/Project');

let projectController = {
    
    getAllProjects:function(req, res){
        
        Project.find(function(err, projects){
            
            if(err)
                res.send(err.message);
            else
                res.render('home', {projects});
        })
    },


    getAll:function(req, res){
        
        Project.find(function(err, projects){
            
            if(err)
                res.send(err.message);
            else
                res.render('other', {projects});
        })
    },
    
    getStudentProject:function (req,res){
     
var User= req.session.Username;

 Project.find({Username:User},function(err, projects){
            
            if(err)
                res.send(err.message);
            else
                res.render('index', {projects});
        })
    





}




    ,




    

    createProject:function(req, res){
        let project = new Project();
        project.Username= req.session.Username;
        project.title= req.body.title;
        project.URL=req.body.URL;

        project.save(function(err, project){
            if(err){

                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(project);
                res.redirect('index');
            }
        })
    }
}

module.exports = projectController;