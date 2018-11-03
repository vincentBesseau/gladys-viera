var mediaControl = require('./viera.mediaControl');

module.exports = function play(params){
    params.controlType = "PLAY"
    return mediaControl(params)
};