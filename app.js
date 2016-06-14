var express = require('express');
var template = require('./template');
var swig = require('swig');
var app = express();
var routes = require('./routes/');

// Swig stuff
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

app.use('/', routes);

app.use(express.static('public'));


app.listen(3000);



























// app.get('/:userEntry', function(req,res,next) {
//   res.send(req.params.userEntry + '\n');
//   next();
// });

// app.use(function(req,res,next) {
//   console.log(Object.keys(req));
//   console.log(req.method + " " + req.url + " " + res.statusCode + "\n");
//   next();
// });

// app.use('/special/:anything', function(req,res,next) {
//   console.log("You are in a special place.");
//   res.end();
// });

