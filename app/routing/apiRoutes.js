var friends = require("../data/friends.js");


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;
        friends.push(newFriend)
        // res.json(friends)

        console.log(newFriend);
        var arr;
        var sumOfScores = [];
        var diffSum = [];


        for (var i = 0; i < friends.length - 1; i++) {

            arr = [];

            for (var j = 0; j < 10; j++) {

                scoreDiff = (newFriend.scores[j] - friends[i].scores[j]);
                scoreDiff = Math.abs(scoreDiff);
                arr.push(scoreDiff);
            }
            
            var sum = 0;
            for (var k = 0; k < arr.length; k++) {
                sum += arr[k];
            }
            diffSum.push(sum);
        }

        var myMinIndex = diffSum.indexOf(Math.min(...diffSum));

        // console.log("The value of the index with the smallest number is: " + myMinIndex);
        // console.log("The min value is: " + Math.min(...diffSum));
        // console.log("The value of diffSum is: " + diffSum);

        res.json(friends[myMinIndex]);
    })
}