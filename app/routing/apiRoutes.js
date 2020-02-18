var friends = require("../data/friends");

module.exports = function(app) {

    var totalDifference = function(user1, user2){
        var user1Total = 0;
        var user2Total = 0;
        var difference = 0;
        for(var i = 0; i < user1.scores.length; i++){
            console.log("Before (user1) ="+ user1Total)
            user1.scores[i] += user1Total
            console.log("After (user1) ="+ user1Total)

            console.log("Before (user2) ="+ user2Total)
            user2.scores[i] += user2Total
            console.log("After (user2) ="+ user2Total)
        }
        console.log("User1:"+ user1Total)
        console.log("User2"+ user2Total)

        difference = Math.abs(user1Total) - Math.abs(user2Total)
        console.log(difference)

        return difference;
    }

    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })

    app.post("/api/friends", function(req, res) {
        for(var i = 0; i < currentUser.scores.length; i++){
            if(totalDifference(currentUser, friends[i])){
                
            }
        }
    })
}