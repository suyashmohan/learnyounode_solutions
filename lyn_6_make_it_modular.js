var mod = require('./lyn_6_mod.js');

mod(process.argv[2], process.argv[3], function(err, list){
	if(!err){
		for(var i=0; i< list.length; i++){
			console.log(list[i]);
		}
	}
});
