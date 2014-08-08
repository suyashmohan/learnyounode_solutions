var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var data = buf.toString().split("\n");

console.log(data.length - 1);