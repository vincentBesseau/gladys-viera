var Promise = require('bluebird');
var shared = require('../viera.shared.js');

module.exports = function setChannel(params){
    sails.log.debug('viera.channel.'+params.channel);
    return new Promise(function(resolve, reject){
        if(!shared.instances[params.deviceType.device]) return reject(`No viera with deviceId ${params.deviceType.device}`);

        channel = params.channel.toString();
        
        // call the viera function
        if (channel.length === 2) {
            return shared.instances[params.deviceType.device].sendCommand('D'+channel.charAt(0))
            .sendCommand('D'+channel.charAt(1));
        } else if (channel.length === 3) {
            return shared.instances[params.deviceType.device].sendCommand('D'+channel.charAt(0))
            .sendCommand('D'+channel.charAt(1))
            .sendCommand('D'+channel.charAt(2));
        } else if (channel.length === 4){
            return shared.instances[params.deviceType.device].sendCommand('D'+channel.charAt(0))
            .sendCommand('D'+channel.charAt(1))
            .sendCommand('D'+channel.charAt(2))
            .sendCommand('D'+channel.charAt(3));
        } else {
            return shared.instances[params.deviceType.device].sendCommand('D'+channel.charAt(0));
        }
    });
};
