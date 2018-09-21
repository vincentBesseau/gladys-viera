var shared = require('../viera.shared.js');

module.exports = function getVolume(params){
    return new Promise(function(resolve, reject){
        sails.log.debug('viera.volume');
        if(!shared.instances[params.deviceType.device]) return reject(`No viera with deviceId ${params.deviceType.device}`);

        // call the viera function
        return shared.instances[params.deviceType.device].getVolume();
    });
};