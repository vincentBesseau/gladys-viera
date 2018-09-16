const sendCommand = require('../viera.sendCommand.js');

module.exports = function openInfo(params){
    return sendCommand('INFO', params);
};