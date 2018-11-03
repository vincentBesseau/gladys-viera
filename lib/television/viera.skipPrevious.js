var mediaControl = require('./viera.mediaControl');

module.exports = function play(params){
    params.controlType = "SKIP_PREV"
    return mediaControl(params)
};