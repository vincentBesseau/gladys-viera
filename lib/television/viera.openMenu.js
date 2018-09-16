const sendCommand = require('../viera.sendCommand.js');

module.exports = function openMenu(params){
    return sendCommand('MENU', params);
};