// Your apiRoutes.js file should contain two routes:
var path = require("path");
var fs = require("fs");
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

var friends = require("../data/friends");

module.exports = function(app) {
    //complete list of friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
        console.log(friends);
    });

    // add new friend

    // Save the incoming result & determine the correct match
    app.post("/api/friends", function(req, res) {
        
        // This will be the returned closest match object.
        var lowestDifference = Infinity;
        var closestMatch = { name: "", photo: "" }
        var userInputTotalScore = req.body.totalScore;


        // Loop through the file to find the closest match
        for (var i = 0; i < friends.length; i++) {
            var currentDifference = Math.abs(userInputTotalScore - friends[i].totalScore);
            if (currentDifference < lowestDifference) {
                lowestDifference = currentDifference;
                closestMatch.name = friends[i].name;
                closestMatch.photo = friends[i].photo;
            }
        }

        friends.push(req.body);
       // Send appropriate response
        res.json({ status: 'OK', closestMatch });

    });
};