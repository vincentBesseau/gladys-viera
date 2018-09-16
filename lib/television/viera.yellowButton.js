const sendCommand = require('../viera.sendCommand.js');

module.exports = function rec(params){
    sails.log.debug('viera.apps');
    return sendCommand('APPS', params);
};
