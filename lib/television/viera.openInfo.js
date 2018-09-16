const sendCommand = require('../viera.sendCommand.js');

module.exports = function openInfo(params){
    sails.log.debug('viera.info');
    return sendCommand('INFO', params);
};
