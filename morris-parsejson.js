var fs = require('fs');

function read_json_file(){
	var file = './data/morris.json';
	return fs.readFileSync(file);
}

exports.list = function(){
	var test1 = read_json_file();
	var data = JSON.parse(test1);
	
	return JSON.parse(read_json_file());
}

exports.getMorris = function(){
	var getdata = JSON.parse(read_json_file());
	const str = "morris";
	var data = getdata[str];
	return data;
}

//可增加一个新方法，例如返回最后的7个元素
exports.query=function(number){
	//TODO 根据传过来的数字放返回相应的结果
	var data = JSON.parse(read_json_file());
	const str = "morris";
	var newdata = [];
	var count = data[str].length;
	var olddata = data[str]
	for (var i=count-number; i<count; i++){
		newdata.push(olddata[i]);
	}
	return newdata;
}
// 增加一条新数据的方法
exports.add=function(data){
	console.log(data);
}

