
module.exports = function(sails) {
	
	const setup = require('./lib/viera.setup.js');
	const init = require('./lib/viera.init.js');
	const exec = require('./lib/viera.exec.js');
	const television = require('./lib/viera.js');

	gladys.on('ready', function(){
		init();
	});
 
    return {
		setup: setup,
		exec: exec,
		television: television
    };
};
