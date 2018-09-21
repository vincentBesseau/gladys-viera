const Viera = require("viera.js");
var shared = require('./viera.shared.js');

module.exports = function init() {
    return gladys.param.getValue('VIERA_TV_LIST')
    .then((VIERA_TV_LIST) => {
        return vieraListIp=VIERA_TV_LIST.split('|');
    })
    .catch(() => {
        return []
    })
    .then((vieraListIp) => {

        // reset all instances 
        shared.instances = {};

        vieraListIp.forEach(vieraIp => {
            gladys.device.getByIdentifier({identifier:vieraIp,service:'viera'})
            .then((device) => {
                shared.instances[device.id]= new Viera(vieraIp);
            })
            .catch((er) => {
                sails.log.info('No viera TV install yet {'+vieraIp+'}')
            })
        });
    })
};
