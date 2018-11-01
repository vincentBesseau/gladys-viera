var Promise = require('bluebird');
var shared = require('../viera.shared.js');

module.exports = function setChannel(params){
    sails.log.debug('viera.channel.'+params.channel);
    return new Promise(function(resolve, reject){
        if(!shared.instances[params.deviceType.device]) return reject(`No viera with deviceId ${params.deviceType.device}`);

        return shared.instances[params.deviceType.device].sendCommand('D'+channel.charAt(0));
    });
};
