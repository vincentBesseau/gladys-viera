const sendCommand = require('../viera.sendCommand.js');

module.exports = function setMuted(params){
    sails.log.debug('viera.setMuted.'+param.status);
    if(param.status) {
        return sendCommand('TV_MUTE_ON', params);
    } else {
        return sendCommand('TV_MUTE_OFF', params);
    }
};