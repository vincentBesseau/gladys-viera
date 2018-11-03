var mediaControl = require('./viera.mediaControl');

module.exports = function play(params){
    params.controlType = "PAUSE"
    return mediaControl(params)
};