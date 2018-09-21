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
                gladys.device.create({
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
                            category:'tv',
                            identifier: 'Power',
                            sensor: false,
                            min: 0,
                            max: 1,
                        },
                        {
                            name: 'Sound',
                            type: 'dimmer',
                            identifier: 'Sound',
                            category:'tv',
                            unit: '%',
                            sensor: false,
                            min: 0,
                            max: 100,
                        },
                        {
                            name: 'Mute',
                            type: 'binary',
                            identifier: 'Mute',
                            category:'tv',
                            sensor: false,
                            min: 0,
                            max: 1,
                        },
                        {
                            name: 'Channel',
                            type: 'dimmer',
                            identifier: 'Channel',
                            category:'tv',
                            sensor: false,
                            min: 0,
                            max: 200,
                        }
                    ]
                });
            });
        }
        return listIp
    })
    .then((listIp) => {
        listIp.forEach(function(ip) {
            return gladys.utils.sqlUnique( 
                `SELECT dt.id, dt.device
                FROM devicetype dt 
                JOIN device d 
                    on dt.device = d.id 
                WHERE d.identifier = ? 
                AND dt.identifier = ?`, 
                [ ip, 'Sound' ]
            )
            .then((row) => {
                var currentVolume = television.getVolume({device:{devicetype:{id:row.device}}})
                return gladys.deviceState.create( { 'value' : currentVolume , 'devicetype' : row.id })
            })
        })
    })
};
