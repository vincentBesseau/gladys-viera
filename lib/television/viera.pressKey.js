const sendCommand = require('../viera.sendCommand.js');
const key = ['ok','right','left','up','down','back']

module.exports = function pressKey(params){
    sails.log.debug('viera.mediaControl.'+params.key);
    if(key.indexOf(params.key.toLowerCase())>=0) {
        if(params.key === 'ok') params.key = 'ENTER';
        else if(params.key === 'back') params.key = 'RETURN';
        
        return sendCommand(params.key.toUpperCase(), params);
    }
};
