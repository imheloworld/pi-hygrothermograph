var express = require('express');
var router = express.Router();

var fs = require("fs");
var path = require("path");
var filedir = path.join(__dirname,"../","mytempdata.db");

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(filedir);


router.get('/data', function(req, res){
    db.all("select datatime,temperature,humidity from tempdata", function(err, row){
        res.json(row);
    });
});

// restapi.post('/data', function(req, res){
//     db.run("UPDATE counts SET value = value + 1 WHERE key = ?", "counter", function(err, row){
//         if (err){
//             console.err(err);
//             res.status(500);
//         }
//         else {
//             res.status(202);
//         }
//         res.end();
//     });
// });
/*
* 约定 传送的数据为json 格式
eg {"datatime":"2016-09-07","temperature":23,"humidity":12}

将json 解析value 的array。
*/
router.post("/data",function(req,res){
	var obj = req.body;
	var arr = [];
	arr.push(obj.datatime);
	arr.push(obj.temperature);
	arr.push(obj.humidity);
	var stmt = db.prepare("INSERT INTO tempdata(datatime,temperature,humidity) VALUES (?,?,?)");
	stmt.run(arr,function(err,data){
		if(err){
			return;
		}
	});
	res.json({"succes":"have insert into a data"})
	stmt.finalize();
});

module.exports = router;