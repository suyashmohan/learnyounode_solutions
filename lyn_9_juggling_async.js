var http = require('http');

var urls = process.argv.slice(2);
var results = new Array(urls.length);
var done = 0;

var doURL = function(url, index, data){
	var result = "";
	http.get(url, function(response){
		response.setEncoding("utf8");
		response.on("data", function(data){
			result += data;
		});
		response.on("end", function(){
			data(index, result);
		});
	});
}

var printResult = function(){
	for(var j=0; j<urls.length; j++){
		console.log(results[j]);
	}
}

for(var i=0; i<urls.length; i++){
	doURL(urls[i], i, function(index, data){
		results[index] = data;
		done += 1;
		if(done === urls.length){
			printResult();
		}
	})
}