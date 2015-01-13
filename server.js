var express = require('express');
var hbs = require('hbs');
var path =require('path');
var bodyParser = require('body-parser');  //core modules 1 to 4. don't need a ./ at the begining of module name. require = #include or import.
//User Model
var usersControllers = require('./controllers/users');
var app = express(); //creates express server; equivalent to http.create server

app.set('views',path.join(__dirname,'views'));  //tells where the html files are -> views folder here.
app.set('view engine', 'html');
app.engine('html',hbs.__express);
app.use(bodyParser());  //parse the body elements in the view.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
		{
			extended:false
		}
								));
app.use(express.static('public'));  //makes the public folder accessible. 
//Routes
app.get('/', function(request,response){
   response.render('index', { title: "Home", users: users.getUsers() })

  // response.render('index', { info: "asdnasdosad"});     //calling get MULTIPLE users function defined in users.js
   
});
app.get('/users/:id', function(request,response){
   var user = users.getUser(request.params.id);
   response.render('profile', { title: "User Profile", variable: user }); // calling single user using user functon in users.js
   
});
app.get('/About', function(request,response){
   response.render('About', { title: "About Us"});
   
});
app.get('/Login', function(request,response){
 
   response.render('Login', { title: "Login"});
   
});
app.post('/login',usersControllers.postlogin);





app.get('/signin', function(request,response){

   response.render('signin', { title: "Sign In"});
   
});
app.listen(3000);

//create a login form with validations.