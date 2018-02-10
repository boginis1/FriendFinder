// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
var express = require("express");
var friendData = require ("./../data/friends.js");
var app = express();
module.exports = function (app) {
	app.get("/api/friends", function (req, res) {
		res.json(friendData)
	});

}

app.post('/api/friends', function(req, res) {
	
		friendData.push(req.body);
		res.json(true);
	
	
});


// app.post("/api/clear", function(){
// 	tableData = [];
// 	waitListData = [];
// 	console.log(tableData);
// 	console.log(waitListData)
// });