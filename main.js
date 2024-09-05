//first of all we need to instal the project dependencies in package.json
//then we need to install express
//npm install express
//now we need to create a server
//in this file we will set the routes using the express router
//for that we will need to require express
const express = require('express');
const app = express();

// now create a public folder where we are gonna put our index.html file 

// we are gonna put all our static files into the public folder for that we require path module
const path = require('path');

//we have all our static files into the public folder so we are declaring a path here for that
app.use(express.static('Public'));

//here we are gonna set the get route for the homepage
app.get('/',function(req,res){
    res.sendFile('index');
});

app.listen(3000,function(){
    console.log('server is running on port 3000');
})