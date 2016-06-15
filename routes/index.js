var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');


router.get('/', function(req,res,next) {
    var tweets = tweetBank.list();
    res.render ('index', {title: 'Twitter.js', tweetss: tweets, showForm: true});
});

router.post('/tweets', function(req,res,next) {
    var name = req.body.name
    var text = req.body.text
    tweetBank.add(name, text)
    res.redirect('/')
})

router.get('/users/:name', function(req,res,next) {
    var name = req.params.name
    var list = tweetBank.find( {name: name} )

    res.render ('index', {title: 'Tweets by' + name, tweetss: list, showForm: true, value: name});
})

router.get('/tweets/:id', function(req,res,next) {
    var id = Number(req.params.id)
    var list = tweetBank.find( {id: id} )
    res.render ('index', {title: 'Tweets id' + id, tweetss: list});
})

module.exports = router;
