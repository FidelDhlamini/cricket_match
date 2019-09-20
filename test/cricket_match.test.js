let assert = require("assert");
let cricketMatch = require("../cricket_match");

describe('The cricket match score function', function () {


    it('should add score string from the last over', function () {
        let showScore = cricketMatch()
        showScore.getScoreStr("6-6-1-")
      
        assert.equal("6-6-1-", showScore.getScore())
    });

    it('should not add score string if it has more or less than 6 characters', function () {
        let showScore = cricketMatch()
        showScore.getScoreStr("6-6-1")
      
        assert.equal("Enter scores from the last over (6 balls) 6 characters max", showScore.getScoreStr())
        assert.deepEqual([], showScore.getScore())
    });

    it('should return how many overs have been elapsed', function () {
        let showScore = cricketMatch()
        showScore.getScoreStr("6-6-1-")
        showScore.getScoreStr("6-6-2-")
        showScore.getScoreStr("6-6-3-")
      
        assert.equal(3,showScore.getNumberOfOvers())
    });

    it('should return how many wickets did the team lose', function () {
        let showScore = cricketMatch()
        showScore.getScoreStr("w-6-1-")
       
        assert.equal(1,showScore.getWickets())
    });

    it('should return how many wickets left', function () {
        let showScore = cricketMatch()
        assert.equal(9,showScore.numberOfWcktsLeft(1))
        assert.equal(8,showScore.numberOfWcktsLeft(2))
    });

    it('should return the total of runs scored', function () {
        let showScore = cricketMatch()
        // showScore.getScoreStr("1-1666")
        // assert.equal(9,showScore.numberOfWcktsLeft(1))
        assert.equal(15,showScore.getScoreStr("1-1661"))
    });
   
   
});