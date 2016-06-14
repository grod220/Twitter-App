var express = require('express');

var app = express();


app.get('', function(req,res,next) {
  res.send('<p>Welcome to the Twitterverse. Wow.</p>');
  next();
});

app.get('/:userEntry', function(req,res,next) {
  res.send(req.params.userEntry);
});

app.use(function(req,res,next) {
  console.log(Object.keys(req));
});

app.listen(3000);
