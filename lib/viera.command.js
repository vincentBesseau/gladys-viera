var television = require('./viera.js');
		
module.exports = function command(scope) {

    switch(scope.label) {
        case 'tv-volume-up':
		    television.volumeUp({deviceType:scope.deviceTypes[0]});
        break;

        case 'tv-volume-down':
            television.volumeDown({deviceType:scope.deviceTypes[0]});
        break;

        case 'tv-off':
            television.switchState({deviceType:scope.deviceTypes[0], state:false});
        break;

        case 'tv-on':
            television.switchState({deviceType:scope.deviceTypes[0], state:true});
        break;

        case 'tv-mute':
            television.setMuted({deviceType:scope.deviceTypes[0], status: true});
        break;

        case 'tv-unmute':
            television.setMuted({deviceType:scope.deviceTypes[0], status: false});
        break;

        case 'tv-pause':
            television.mediaControl({deviceType:scope.deviceTypes[0], controlType: 'pause'});
        break;

        case 'tv-play':
            television.mediaControl({deviceType:scope.deviceTypes[0], controlType: 'play'});
        break;

        case 'tv-forward':
            television.mediaControl({deviceType:scope.deviceTypes[0], controlType: 'fastForward'});
        break;

        case 'tv-rewind':
            television.mediaControl({deviceType:scope.deviceTypes[0], controlType: 'rewind'});
        break;

        case 'tv-menu':
            television.openMenu({deviceType:scope.deviceTypes[0]});
        break;

        case 'tv-info':
            television.openInfo({deviceType:scope.deviceTypes[0]});
        break;

        case 'tv-left':
            television.pressKey({deviceType:scope.deviceTypes[0], key:'left'});
        break;

        case 'tv-right':
            television.pressKey({deviceType:scope.deviceTypes[0], key:'right'});
        break;

        case 'tv-up':
            television.pressKey({deviceType:scope.deviceTypes[0], key:'up'});
        break;

        case 'tv-down':
            television.pressKey({deviceType:scope.deviceTypes[0], key:'down'});
        break;

        case 'tv-enter':
            television.pressKey({deviceType:scope.deviceTypes[0], key:'ok'});
        break;

        case 'tv-back':
            television.pressKey({deviceType:scope.deviceTypes[0], key:'back'});
        break;

        case 'tv-rec':
            television.rec({deviceType:scope.deviceTypes[0]});
        break;

        case 'tv-app':
            television.yellowButton({deviceType:scope.deviceTypes[0]});
        break;

        default:

        break;
    }
};
