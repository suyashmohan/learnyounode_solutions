var fs = require('fs');

module.exports = function readDir(dir, ext, callback){
	fs.readdir(dir, function(err, list){
		if(err)
			callback(err);
		else{
			var listToReturn = new Array();
			for(var i=0; i<list.length; i++){
				if(list[i].search("."+ext) != -1){
					listToReturn.push(list[i]);
				}
			}
			callback(null,listToReturn);
		}
	});
}
