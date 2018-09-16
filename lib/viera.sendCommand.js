var Promise = require('bluebird');
var shared = require('./viera.shared.js');

module.exports = function sendCommand(functionName, params) {
    return new Promise(function(resolve, reject){
        if(!shared.instances[params.deviceType.device]) return reject(`No viera with deviceId ${params.deviceType.device}`);

        // call the viera function
        shared.instances[params.deviceType.device].sendCommand(functionName);
    });
};