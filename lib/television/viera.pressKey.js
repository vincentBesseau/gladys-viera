const sendCommand = require('../viera.sendCommand.js');
const key = ['ok','right','left','up','down','back']

module.exports = function pressKey(params){
    sails.log.debug('viera.mediaControl.'+params.key);
    if(controlType.indexOf(param.key.toLowerCase())>=0) {
        if(param.key === 'ok') param.key = 'ENTER';
        else if(param.key === 'back') param.key = 'RETURN';
        
        return sendCommand(param.key.toUpperCase(), params);
    }
};