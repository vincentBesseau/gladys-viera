const sendCommand = require('../viera.sendCommand.js');

module.exports = function start(params){
    sails.log.debug('viera.start');
    return sendCommand('POWER', params);
};
