// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('<html><body><h1>Hello World!</h1></body></html>'); //write a response to the client
//   res.end(); //end the response
// }).listen(80); //the server object listens on port 8000

const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send("<html><body><h1>Hello World!</h1></body></html>");
})

const server = app.listen(80, function(){
    console.log("Node app server started on port 80...")
})