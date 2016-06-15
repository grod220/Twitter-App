var express = require('express');
var swig = require('swig');
var app = express();
var routes = require('./routes/');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Swig stuff
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

// get html & css files
app.use(express.static('public'));

// customize routes
app.use('/', routes);

app.listen(3001);



























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
