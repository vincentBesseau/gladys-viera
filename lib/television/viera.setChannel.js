const sendCommand = require('../viera.sendCommand.js');

module.exports = function setChannel(params){
    return sendCommand('D'+params.channel, params);
};