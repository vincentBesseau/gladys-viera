var mediaControl = require('./television/viera.mediaControl');

module.exports = function play(params){
    params.controlType = "PLAY"
    return mediaControl(params)
};