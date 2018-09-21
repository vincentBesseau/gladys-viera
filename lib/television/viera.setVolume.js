var shared = require('../viera.shared.js');

module.exports = function setVolume(params){
    return new Promise(function(resolve, reject){
        sails.log.debug('viera.volume.'+params.volume);
        if(!shared.instances[params.deviceType.device]) return reject(`No viera with deviceId ${params.deviceType.device}`);

        // call the viera function
        shared.instances[params.deviceType.device].setVolume(params.volume);
    });
};