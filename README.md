# gladys-viera

## Installation

* Add this module in Gladys
* Add VIERA_TV_LIST on Gladys parameters with value Viera TV ip (if you have more than one TV you can separate each IP by this | like this IP_VIERA_1|IP_VIERA_2|IP_VIERA_3)
* Restart Gladys.
* Click on viera configuration button to install each TV set at step 2 on Gladys

## Usage 

Turn on the TV :
```
gladys.modules.viera.television.switchState({deviceType:{device:DEVICE_ID},state:true});
```
Turn off the TV :
```
gladys.modules.viera.television.switchState({deviceType:{device:DEVICE_ID},state:false});
```
Media control :
```
gladys.modules.viera.television.pause({controlType:"pause",deviceType:{device:DEVICE_ID}});
gladys.modules.viera.television.play({controlType:"play",deviceType:{device:DEVICE_ID}});
gladys.modules.viera.television.stop({controlType:"stop",deviceType:{device:DEVICE_ID}});
gladys.modules.viera.television.rewind({controlType:"rewind",deviceType:{device:DEVICE_ID}});
gladys.modules.viera.television.fastForward({controlType:"fastForward",deviceType:{device:DEVICE_ID}});
gladys.modules.viera.television.skipPrevious({controlType:"SKIP_PREV",deviceType:{device:DEVICE_ID}});
gladys.modules.viera.television.skipNext({controlType:"SKIP_NEXT",deviceType:{device:DEVICE_ID}});
gladys.modules.viera.television.openInfo({deviceType:{device:DEVICE_ID}});
gladys.modules.viera.television.rec({deviceType:{device:DEVICE_ID}});
```
Volume control :
```
gladys.modules.viera.television.volumeUp({deviceType:{device:DEVICE_ID}});
gladys.modules.viera.television.volumeDown({deviceType:{device:DEVICE_ID}});
gladys.modules.viera.television.setVolume({volume:15,deviceType:{device:DEVICE_ID}});
gladys.modules.viera.television.getVolume({deviceType:{device:DEVICE_ID}});
gladys.modules.viera.television.setMuted({status:true,deviceType:{device:DEVICE_ID}});
gladys.modules.viera.television.setMuted({status:false,deviceType:{device:DEVICE_ID}});
```
Change channel (1 to 9 only) :
```
gladys.modules.viera.television.setChannel({channel:9,deviceType:{device:DEVICE_ID}});
```
Navigate on TV :
```
gladys.modules.viera.television.pressKey({key:"OK",deviceType:{device:DEVICE_ID}});
gladys.modules.viera.television.pressKey({key:"RIGHT",deviceType:{device:DEVICE_ID}});
gladys.modules.viera.television.pressKey({key:"LEFT",deviceType:{device:DEVICE_ID}});
gladys.modules.viera.television.pressKey({key:"UP",deviceType:{device:DEVICE_ID}});
gladys.modules.viera.television.pressKey({key:"DOWN",deviceType:{device:DEVICE_ID}});
gladys.modules.viera.television.pressKey({key:"BACK",deviceType:{device:DEVICE_ID}});
gladys.modules.viera.television.openMenu({key:"BACK",deviceType:{device:DEVICE_ID}});
```