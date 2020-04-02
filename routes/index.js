var express = require('express');
var router = express.Router();
var stitle = "Kodatech"
var ptitle = "Kodatech - "

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: stitle});
});
router.get('/team', function(res,req,next){
  res.render('team', {title: `${ptitle}Teams`})
});
router.get('/about', function(req,res,next){
  res.render('about', {title: `${ptitle}About`})
})
router.get('/teamcoolkids', function(req,res,next){
  res.render('teamcoolkids', {title: `${ptitle}Team Cool Kids`, layout: "layouttck"})
})
router.get('/pazper', function(req,res,next){
  res.render('pazper', {title: `${ptitle}P-AZ-per`})
})
router.get('/topi', function(req,res,next){
  res.render('topi', {title: `${ptitle}Topinambour`})
})

module.exports = router;
