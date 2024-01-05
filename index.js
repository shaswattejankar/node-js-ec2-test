const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send("<html><body><h1>Hello World!</h1></body></html>");
})

const server = app.listen(5000, function(){
    console.log("Node app server started...")
})