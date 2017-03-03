// require dependincies 
var express = require('express');
var router = express.Router();
var StudentController = require('./controllers/StudentController');
var session = require('express-session');

var projectController = require('./controllers/projectController');


router.post('/ho', StudentController.getal);
router.post('/', projectController.getAllProjects);

router.get('/', projectController.getAllProjects);
router.get('/index', projectController.getStudentProject);

router.post('/project', projectController.createProject);
// add routes

router.post('/register', StudentController.register);

router.post('/Student', StudentController.createStudent);

router.post('/logging', StudentController.login);


router.post('/other', projectController.getAll);
 
 router.post('/index', projectController.getStudentProject);


router.post('/logout',function(req, res){
  req.session.destroy(function(){
     res.redirect('/');
  });
}); 
router.post('/login', function (req, res) {
  res.render('login')
})




module.exports = router;