var fs = require("fs");
var path = require("path");
var rootdir = path.join(__dirname);
var file = rootdir+ "\" + "frog.db";
console.log(file,"this is the file dir");
var exists = fs.existsSync(file);

if(!exists) {
  console.log("Creating DB file.");
  fs.openSync(file, "w");
}

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

db.serialize(function() {
  if(!exists) {
    db.run("CREATE TABLE temperature (thing TEXT)");
  }
  
var stmt = db.prepare("INSERT INTO Stuff VALUES (?)");
  
//Insert random data
  var rnd;
  for (var i = 0; i < 10; i++) {
    rnd = Math.floor(Math.random() * 10000000);
    stmt.run("Thing #" + rnd);
  }
  
stmt.finalize();
  db.each("SELECT rowid AS id, thing FROM Stuff", function(err, row) {
    console.log(row.id + ": " + row.thing);
  });
});

db.close();