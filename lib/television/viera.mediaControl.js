const sendCommand = require('../viera.sendCommand.js');

const controlType = ['play', 'stop', 'pause', 'rewind', 'fastForward', 'SKIP_PREV', 'SKIP_NEXT']

module.exports = function mediaControl(params){
    sails.log.debug('viera.mediaControl.'+params.controlType);
    if(controlType.indexOf(params.controlType.toLowerCase())>=0) {
        if(params.controlType === 'fastForward') params.controlType = 'FF';
        else if(params.controlType === 'rewind') params.controlType = 'REW';
        
        return sendCommand(params.controlType.toUpperCase(), params);
    }
};
