var mediaControl = require('./television/viera.mediaControl');

module.exports = function play(params){
    params.controlType = "SKIP_NEXT"
    return mediaControl(params)
};