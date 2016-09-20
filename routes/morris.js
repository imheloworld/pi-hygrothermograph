var express = require('express');
var router = express.Router();
var morris = require('../morris-parsejson');
var sql = require('../mytempdata');
/* GET home page. */
// router.get('/', function(req, res, next) {
// console.log("get the home....",console.log(morris.list()))
//   //res.setHeader('content-type',"application/json");
//   res.end(JSON.stringify(morris.list()));
//   //res.send("{a:b,}")
// });

router.get('/', function(req, res, next) {
  res.setHeader('content-type',"application/json");
  res.send(JSON.stringify(morris.list()))
});


router.get('/data',function(req,res,next){
	res.setHeader('content-type',"application/json");
  	res.send(JSON.stringify(morris.getMorris()));
})

//接收到一个数据--> 转存到数据库中
router.post('/add',function(req,res,next){
	res.setHeader('content-type',"application/json");
	console.log(req.body);
	morris.add(req.body);
	res.send({status:"success", message:"add data success"}); 

})


//从数据库取一个数据

router.get("/sqldata",function(req,res,next){
	var db = sql.sqlite3db;
	res.setHeader('content-type',"application/json");
	db.all("select * from tempdata",function(err,row){
    	res.send(row); 
  	});
	
});
module.exports = router;