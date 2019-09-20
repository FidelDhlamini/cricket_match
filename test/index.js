const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const CricketMatch = require("../cricket_match")


const app = express();

let cricketMatch = CricketMatch();


app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.render("index",{score: cricketMatch.getScoreStr()});

});

app.post('/score', function (req, res) {
    cricketMatch.getScoreStr(req.body.scoreString)
   
    res.redirect('/');
});

const PORT = process.env.PORT || 3016;

app.listen(PORT, function () {
    console.log("App started at port:", PORT)
})