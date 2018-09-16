var shelljs = require('shelljs');
var exec = require('child_process').exec;

module.exports = function start(params){
    sails.log.debug('viera.start');
    gladys.device.getByService({service:'viera'})
    .then((devices) => {
        devices.forEach(function(device) {
            if(device.id === params.deviceType.device || device.id === params.device.id) {
                shelljs.exec('arp -a | grep \(' + device.identifier + '\) | grep -Eo [a-fA-F0-9:]{17}', function(code, stdout, stderr) {
                    var viera_mac = stdout.replace(/\r?\n|\r/g, "")
                    sails.log.debug('viera_mac :' + viera_mac);
                    if((typeof viera_mac != 'undefined') && viera_mac != null)
                    {
                        for (pas = 0; pas < 5; pas++) {
                            exec('wakeonlan ' + viera_mac);
                        }
                    }
                })
            }
        })
    })
}