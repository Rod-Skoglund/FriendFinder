var friendsData = require("../data/friends");

// ************************************************************
// Define basic routes
// ************************************************************

module.exports = function(app) {

    // ********************************************************
    // Function to determine closest mtch
    // ********************************************************
    function verComp(scores) {
        var match = {};
        var matchIndex = 0;
        var sum = 0;

        for (var i=0; i<friendsData.length; i++) {
            var tempSum = 0;

            for (var j=0; j < friendsData[i].scores.length; j++) {
                var friendScore = parseInt(scores[j]);
                var matchScore = parseInt(friendsData[i].scores[j]);
                if (matchScore > friendScore) {
                    tempSum += (matchScore - friendScore);
                } else {
                    tempSum += (friendScore - matchScore);
                }
            } // end for (var j=0; j < friendsData[i].scores.length; j++)

            if (tempSum == 0) {
                matchIndex = i;
                break;
            }

            if (sum == 0 || sum > tempSum) {
                sum = tempSum;
                matchIndex = i;
            }
        } // end for (var i=0; i<friendsData.length; i++)

        match.name = friendsData[matchIndex].name;
        match.photo = friendsData[matchIndex].photo;
        return match;
    } // end function verComp(scores)

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });


    app.post("/api/friends", function(req, res) {
        var userScoreArray = req.body.scores;

        var bestMatch = verComp(userScoreArray);

        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: userScoreArray
        }
        friendsData.push(newFriend); 
        res.send(bestMatch);
        res.json(true); 
        res.redirect("/survey"); 
    }); // end app.post

}; // end module.exports = function(app)