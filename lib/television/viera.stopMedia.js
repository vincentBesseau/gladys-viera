var mediaControl = require('./viera.mediaControl');

module.exports = function stop(params){
    params.controlType = "STOP"
    return mediaControl(params)
};