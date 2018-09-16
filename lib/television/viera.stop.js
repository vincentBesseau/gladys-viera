const sendCommand = require('../viera.sendCommand.js');

module.exports = function stop(params){
    return sendCommand('POWER', params);
};