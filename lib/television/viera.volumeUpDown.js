const sendCommand = require('../viera.sendCommand.js');

const volumeControl = ['VOLUP', 'VOLDOWN']

module.exports = function stop(params){
    sails.log.debug('viera.volumeControl.'+params.volumeControl);
    if(volumeControl.indexOf(params.volumeControl.toUpperCase())>=0) {
        return sendCommand(params.volumeControl.toUpperCase(), params);
    }
};
