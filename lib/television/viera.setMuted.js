const sendCommand = require('../viera.sendCommand.js');

module.exports = function setMuted(params){
    sails.log.debug('viera.setMuted.'+params.status);
        return sendCommand('MUTE', params);
};
