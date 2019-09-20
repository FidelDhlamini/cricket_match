module.exports = function CricketMatch() {
    var scoreBrd = [];
    var wickets = 0;
    var totalRuns = 0;

    function getScoreStr(lastOver) {
        if (lastOver && lastOver.length == 6) {
            scoreBrd.push(lastOver)
            var splitted = lastOver.split("")
            return calculateScore(splitted);
        } else {
            return 'Enter scores from the last over (6 balls) 6 characters max';
        }
    }


    function getScore() {

        return scoreBrd;
    }

    function getWickets() {

        for (var i = 0; i < scoreBrd.length; i++) {
            if (scoreBrd[i].includes("w")) {
                wickets = +1;
            }
        }
        return wickets;
    }

     function calculateScore(str) {
         for (var i = 0; i < str.length; i++) {
             
             
             if (str[i] === "w") {
                 0 + totalRuns;
             }

             else if (str[i] === "-") {
                  0 + totalRuns;
             } else {
                //  console.log(str[i], totalRuns);
                totalRuns = Number(totalRuns) + Number(str[i]) 
             }

         }
         return totalRuns;
     }

    // function calculateScore() {
    //     var totalRuns = 0;

    //     for (var i = 0; i < scoreBrd.length; i++) {
    //         let scoreStr = scoreBrd[i];
    //         for(var y = 0;y<scoreStr.length;y++){
    //             let check = scoreStr[y];
    //             if(check == "-" ){
    //                 0 + totalRuns;
    //             }
    //              if( check == "w"){
    //                 0 + totalRuns;
    //             }
    //             else{
    //                 check + totalRuns;
    //             }

    //         }
          
    //     }
    //     return totalRuns;
    // }


    function numberOfWcktsLeft(wickets) {
        const cmpltTeam = 10
        let wLeft = cmpltTeam - wickets
        return wLeft;
    }

    function getNumberOfOvers() {
        return scoreBrd.length

    }

    return {
        getScoreStr,
        getScore,
        getNumberOfOvers,
        getWickets,
        numberOfWcktsLeft,
        calculateScore
        


    }
}