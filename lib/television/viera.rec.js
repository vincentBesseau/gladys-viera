const sendCommand = require('../viera.sendCommand.js');

module.exports = function rec(params){
    return sendCommand('REC', params);
};