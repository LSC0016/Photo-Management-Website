var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSC 317 App', name:"Jiayi Gu" });
});

module.exports = router;

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login'});
});

router.get('/registration', function(req, res, next) {
  res.render('registration', { title: 'registration'});
});

router.get('/postimage', function(req, res, next) {
  res.render('postimage', { title: 'postimage'});
});

router.get('/viewpost', function(req, res, next) {
  res.render('viewpost', { title: 'viewpost'});
});