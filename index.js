
module.exports = function(sails) {
	
	const setup = require('./lib/viera.setup');
	const init = require('./lib/viera.init');
	const television = require('./lib/viera.js');

	gladys.on('ready', function(){
		init()
	});
 
    return {
		setup: setup,
		television: television
    };
};
