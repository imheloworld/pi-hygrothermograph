var express = require('express');
var url = require('url');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var get_params = url.parse(req.url,true).query;
	console.log(get_params);
	console.log(Object.keys(get_params).length);
	res.send('Hello all');
});

router.get('/:name',function(req,res,next){
	res.send("hello "+req.params.name);
})

router.get('/world',function(req,res,next){
	res.setHeader('content-type',"application/json");
	res.send("hello world!");
});

module.exports = router;