var express = require('express')
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get("/", function (req,res) {
    res.render("index")
})

var port = process.env.port || 8080;

app.listen( port, function(){
  console.log('listening on *:' + port);
});