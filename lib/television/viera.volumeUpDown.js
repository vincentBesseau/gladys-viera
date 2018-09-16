const sendCommand = require('../viera.sendCommand.js');

const volumeControl = ['VOLUP', 'VOLDOWN']

module.exports = function stop(params){
    sails.log.debug('viera.volumeControl.'+params.volumeControl);
    if(volumeControl.indexOf(param.volumeControl.toLowerCase())>=0) {
        return sendCommand(param.volumeControl.toUpperCase(), params);
    }
};