const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
	res.sendFile(__dirname + "/index.html");
});

app.post('/',function(req,res){
	var nu1 = Number(req.body.weight);
	var nu2 = Number(req.body.height);
	
	res.send("text" + (nu1 + nu2));
});


app.listen(3000,function(){
	console.log("server is running on port 3000")
});
