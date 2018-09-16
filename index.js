
module.exports = function(sails) {
	
	const setup = require('./lib/viera.setup');
	const exec = require('./lib/exec');
	const television = require('./lib/viera.js');

	gladys.on('ready', function(){
		
	});
 
    return {
		setup: setup,
		exec: exec,
		television: television
    };
};