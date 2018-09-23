var television = require('./viera.js');
		
module.exports = function command(scope) {

    switch(scope.label) {
        case 'tv-volume-up':
		    television.volumeUp({deviceTypes:scope.deviceTypes[0]});
        break;

        case 'tv-volume-down':
            television.volumeDown({deviceTypes:scope.deviceTypes[0]});
        break;

        case 'tv-off':
            television.switchState({deviceTypes:scope.deviceTypes[0], state:false});
        break;

        case 'tv-on':
            television.switchState({deviceTypes:scope.deviceTypes[0], state:true});
        break;

        case 'tv-mute':
            television.setMuted({deviceTypes:scope.deviceTypes[0], status: true});
        break;

        case 'tv-unmute':
            television.setMuted({deviceTypes:scope.deviceTypes[0], status: false});
        break;

        case 'tv-pause':
            television.mediaControl({deviceTypes:scope.deviceTypes[0], controlType: 'pause'});
        break;

        case 'tv-play':
            television.mediaControl({deviceTypes:scope.deviceTypes[0], controlType: 'play'});
        break;

        case 'tv-forward':
            television.mediaControl({deviceTypes:scope.deviceTypes[0], controlType: 'fastForward'});
        break;

        case 'tv-rewind':
            television.mediaControl({deviceTypes:scope.deviceTypes[0], controlType: 'rewind'});
        break;

        case 'tv-menu':
            television.openMenu({deviceTypes:scope.deviceTypes[0]});
        break;

        case 'tv-info':
            television.openInfo({deviceTypes:scope.deviceTypes[0]});
        break;

        case 'tv-left':
            television.pressKey({deviceTypes:scope.deviceTypes[0], key:'left'});
        break;

        case 'tv-right':
            television.pressKey({deviceTypes:scope.deviceTypes[0], key:'right'});
        break;

        case 'tv-up':
            television.pressKey({deviceTypes:scope.deviceTypes[0], key:'up'});
        break;

        case 'tv-down':
            television.pressKey({deviceTypes:scope.deviceTypes[0], key:'down'});
        break;

        case 'tv-enter':
            television.pressKey({deviceTypes:scope.deviceTypes[0], key:'ok'});
        break;

        case 'tv-back':
            television.pressKey({deviceTypes:scope.deviceTypes[0], key:'back'});
        break;

        case 'tv-rec':
            television.rec({deviceTypes:scope.deviceTypes[0]});
        break;

        case 'tv-app':
            television.yellowButton({deviceTypes:scope.deviceTypes[0]});
        break;

        default:

        break;
    }
};