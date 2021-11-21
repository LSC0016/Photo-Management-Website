var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('indexx', { title: 'CSC 317 App', name:"Jiayi Gu" });
});

module.exports = router;

// router.get('/index', (req, res, next) => {
//   res.render('index', { title: 'index'});
// });

router.get('/login', (req, res, next) => {
  res.render('login', { title: 'login'});
});

router.get('/registration', (req, res, next) => {
  res.render('registration', { title: 'registration'});
});

router.get('/postimage', (req, res, next) => {
  res.render('postimage', { title: 'postimage'});
});

router.get('/viewpost', (req, res, next) => {
  res.render('viewpost', { title: 'viewpost'});
});