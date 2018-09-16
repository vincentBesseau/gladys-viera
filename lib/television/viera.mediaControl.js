const sendCommand = require('../viera.sendCommand.js');

const controlType = ['play', 'stop', 'pause', 'rewind', 'fastForward', 'SKIP_PREV', 'SKIP_NEXT']

module.exports = function mediaControl(params){
    sails.log.debug('viera.mediaControl.'+params.controlType);
    if(controlType.indexOf(param.controlType.toLowerCase())>=0) {
        if(param.controlType === 'fastForward') param.controlType = 'FF';
        else if(param.controlType === 'rewind') param.controlType = 'REW';
        
        return sendCommand(param.controlType.toUpperCase(), params);
    }
};