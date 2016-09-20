var express = require('express');
var router = express.Router();
var contacts = require('../contacts');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('content-type',"application/json");
  res.send(JSON.stringify(contacts.list()))
});

router.get('/:number',function(req,res,next){
	res.setHeader('content-type','application/json');
	res.send(JSON.stringify(contacts.query(req.params.number)))
})

router.get("/group",function(res,req,next){
	res.setHeader('content-type','application/json');
	res.send(JSON.stringify(contacts.list_groups()))
})
module.exports = router;
