var mediaControl = require('./television/viera.mediaControl');

module.exports = function rewind(params){
    params.controlType = "REWIND"
    return mediaControl(params)
};