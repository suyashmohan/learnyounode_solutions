var fs = require('fs');

fs.readdir(process.argv[2], function(err, list){
	for(var i=0; i<list.length; i++){
		if(list[i].search("."+process.argv[3]) != -1){
			console.log(list[i]);
		}
	}
});
