const sendCommand = require('../viera.sendCommand.js');

module.exports = function setMuted(params){
    sails.log.debug('viera.setMuted.'+params.state);
    if(params.state) {
        return sendCommand('TV_MUTE_ON', params);
    } else {
        return sendCommand('TV_MUTE_OFF', params);
    }
};
