var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
	var u = url.parse(req.url,true);
	res.writeHead(200, {'Content-Type':'application/json'});
	if(u.pathname === "/api/parsetime"){
		var dt = new Date(u.query.iso);
		var json = {};
		json.hour = dt.getHours();
		json.minute = dt.getMinutes();
		json.second = dt.getSeconds();
		res.end(JSON.stringify(json));
	}else if(u.pathname === "/api/unixtime"){
		var dt = new Date(u.query.iso);
		var json = {};
		json.unixtime = dt.getTime();
		res.end(JSON.stringify(json));
	}else{
		res.end("Invalid");
	}
});
server.listen(process.argv[2]);