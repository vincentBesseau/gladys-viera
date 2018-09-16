const sendCommand = require('../viera.sendCommand.js');

module.exports = function stop(params){
    sails.log.debug('viera.stop');
    return sendCommand('POWER', params);
};
