const sendCommand = require('../viera.sendCommand.js');

module.exports = function rec(params){
    sails.log.debug('viera.record');
    return sendCommand('REC', params);
};
