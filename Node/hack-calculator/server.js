var express = require('express');
var app = express();

// var fs = require('fs');var secret = fs.readFileSync('./secretText.txt'); res.send(secret.toString());return;

// var fs = require('fs');var secret = fs.writeFileSync('./secretText.txt', 'all your base are belong to me -- root');

app.get('/', function(req, res){
    res.send("HELLO WORLD!");
});
// /add/process.exit()/2
app.get('/:operation/:x/:y', function(req, res){
    var operators = {
        add: "+",
        sub: "-",
        mult: "*",
        div: "/"
    }
    var operator = operators[req.params.operation]

    try {
      var result = eval(req.params.x + operator + req.params.y);
      res.send(result.toString());
    }
    catch(error) {
      res.send(error);
    }

});

app.listen(3000, function(){
    console.log("STARTING SERVER ON 3000");
});


// /add/process.exit();
