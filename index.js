
module.exports = function(sails) {
	
	const setup = require('./lib/viera.setup.js');
	const init = require('./lib/viera.init.js');
	const exec = require('./lib/viera.exec.js');
	var command = require('./lib/viera.command.js');
	const television = require('./lib/viera.js');
	const install = require('./lib/viera.install.js');
	const uninstall = require('./lib/viera.uninstall.js');

	gladys.on('ready', function(){
		init();
	});
 
    return {
			setup: setup,
			exec: exec,
			command: command,
			install: install,
			television: television,
			uninstall: uninstall
    };
};
