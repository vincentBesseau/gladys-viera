var mediaControl = require('./viera.mediaControl');

module.exports = function fastForward(params){
    params.controlType = "FASTFORWARD"
    return mediaControl(params)
};