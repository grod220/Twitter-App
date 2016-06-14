var swig = require('swig');

var locals = {
  title: 'Twitterverse',
  people: [
    { name: 'gabe' },
    { name: 'harrison'}
  ]
}

// swig.renderFile(__dirname + '/views/index.html', locals, function(err, output) {
//   if (err) throw err;
//   console.log(output)
// })

module.exports = {
  locals: locals
}
