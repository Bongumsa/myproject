const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000;
// Static Middleware
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/page/index.html'));
});

app.listen(port, function(error){
	if(error) throw error
	console.log("Server created Successfully")
})
