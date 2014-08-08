var net = require('net')

var addZero = function(num){
	if(num < 10)
		return "0" + num;
	else	
		return "" + num;
}

var server = net.createServer(function(socket){
	var dt = new Date();
	var response = dt.getFullYear() + "-" + addZero(dt.getMonth()+1) + "-" + addZero(dt.getDate()) + " " + addZero(dt.getHours()) + ":" + addZero(dt.getMinutes())+"\n";
	socket.end(response);
});
server.listen(process.argv[2]);