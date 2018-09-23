const sendCommand = require('../viera.sendCommand.js');
const key = ['OK','RIGHT','LEFT','UP','DOWN','BACK']

module.exports = function pressKey(params){
    sails.log.debug('viera.mediaControl.'+params.key);
    if(key.indexOf(params.key.toUpperCase())>=0) {
        if(params.key.toUpperCase() === 'OK') params.key = 'ENTER';
        else if(params.key.toUpperCase() === 'BACK') params.key = 'RETURN';
        
        return sendCommand(params.key.toUpperCase(), params);
    }
};
