var television = require('./viera.js');
		
module.exports = function command(scope) {

    switch(scope.label) {
        case 'tv-volume-up':
		    television.volumeUp({device:scope.deviceTypes[0].device});
        break;

        case 'tv-volume-down':
            television.volumeDown({device:scope.deviceTypes[0].device});
        break;

        case 'tv-off':
            television.switchState({device:scope.deviceTypes[0].device, state:false});
        break;

        case 'tv-on':
            television.switchState({device:scope.deviceTypes[0].device, state:true});
        break;

        case 'tv-mute':
            television.setMuted({device:scope.deviceTypes[0].device, status: true});
        break;

        case 'tv-unmute':
            television.setMuted({device:scope.deviceTypes[0].device, status: false});
        break;

        case 'tv-pause':
            television.mediaControl({device:scope.deviceTypes[0].device, controlType: 'pause'});
        break;

        case 'tv-play':
            television.mediaControl({device:scope.deviceTypes[0].device, controlType: 'play'});
        break;

        case 'tv-forward':
            television.mediaControl({device:scope.deviceTypes[0].device, controlType: 'fastForward'});
        break;

        case 'tv-rewind':
            television.mediaControl({device:scope.deviceTypes[0].device, controlType: 'rewind'});
        break;

        case 'tv-menu':
            television.openMenu({device:scope.deviceTypes[0].device});
        break;

        case 'tv-info':
            television.openInfo({device:scope.deviceTypes[0].device});
        break;

        case 'tv-left':
            television.pressKey({device:scope.deviceTypes[0].device, key:'left'});
        break;

        case 'tv-right':
            television.pressKey({device:scope.deviceTypes[0].device, key:'right'});
        break;

        case 'tv-up':
            television.pressKey({device:scope.deviceTypes[0].device, key:'up'});
        break;

        case 'tv-down':
            television.pressKey({device:scope.deviceTypes[0].device, key:'down'});
        break;

        case 'tv-enter':
            television.pressKey({device:scope.deviceTypes[0].device, key:'ok'});
        break;

        case 'tv-back':
            television.pressKey({device:scope.deviceTypes[0].device, key:'back'});
        break;

        case 'tv-rec':
            television.rec({device:scope.deviceTypes[0].device});
        break;

        case 'tv-app':
            television.yellowButton({device:scope.deviceTypes[0].device});
        break;

        default:

        break;
    }
};
