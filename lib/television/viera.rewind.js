var mediaControl = require('./viera.mediaControl');

module.exports = function rewind(params){
    params.controlType = "REWIND"
    return mediaControl(params)
};