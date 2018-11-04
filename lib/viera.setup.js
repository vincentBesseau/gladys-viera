var television = require('./viera.js')
module.exports = function() {
    return gladys.param.getValue('VIERA_TV_LIST')
    .then((VIERA_TV_LIST) => {
        return vieraListIp=VIERA_TV_LIST.split('|');
    })
    .catch(() => {
        return []
    })
    .then((listIp) => {
        if (typeof listIp !== 'undefined' && listIp.length > 0) {
            listIp.forEach(function(ip) {
                return gladys.device.create({
                    device: {
                        name: 'Viera TV',
                        protocol: 'wifi',
                        service: 'viera',
                        identifier: ip
                    },
                    types: [
                        {
                            name: 'Power',
                            type: 'binary',
                            category:'Television',
                            identifier: 'Power',
                            sensor: false,
                            min: 0,
                            max: 1,
                        },
                        {
                            name: 'Sound',
                            type: 'dimmer',
                            identifier: 'Sound',
                            category:'Television',
                            unit: '%',
                            sensor: false,
                            min: 0,
                            max: 100,
                        },
                        {
                            name: 'Mute',
                            type: 'binary',
                            identifier: 'Mute',
                            category:'Television',
                            sensor: false,
                            min: 0,
                            max: 1,
                        },
                        {
                            name: 'Channel',
                            type: 'dimmer',
                            identifier: 'Channel',
                            category:'Television',
                            sensor: false,
                            min: 0,
                            max: 9,
                        }
                    ]
                })
                .then((device) => {
                    device.types.forEach(function(deviceType){
                        if(deviceType.identifier === "Sound"){
                            var currentVolume = television.getVolume({deviceType:deviceType})
                            return gladys.deviceState.create( { 'value' : currentVolume , 'devicetype' : deviceType.id })
                        }
                    })
                })
                .catch(() => {
                    sails.log.error('Error during getVolume')
                })
            });
        }
    })
};
