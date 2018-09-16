const sendCommand = require('../viera.sendCommand.js');

module.exports = function openMenu(params){
    sails.log.debug('viera.menu');
    return sendCommand('MENU', params);
};
