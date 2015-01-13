var userModel=require('../models/Users');
exports.getUsers = function() {     //exports your function to other files.
		return userModel.users;
}

exports.getUser = function(id) {
      for(var i=0; i<userModel.length;i++)
	  {
	      if(userModel.users[i].id == id)
		      return userModel.users[i];			  
	  }
}

exports.compareAuth= function(username,password)
{
for(var i=0;i< userModel.users.length;i++)
{
if(userModel.users[i].username == username && userModel.users[i].password == password)
{
return userModel.users[i];
//return true;
}

}
return false;
}










exports.postlogin=function(request,response){





var result = users.compareAuth(request.body.email,request.body.password);
//console.log(request.body.email);
//console.log(request.body.password);    //request.body stores all the info in the body of the given html file
if(result)
{
response.send("login sucessful. Hi"+result.name);
}
else{
response.send("failed");
}

}





















