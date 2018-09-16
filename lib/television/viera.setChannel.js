const sendCommand = require('../viera.sendCommand.js');

module.exports = function setChannel(params){
    sails.log.debug('viera.channel.'+params.channel);
    return sendCommand('D'+params.channel, params);
};
