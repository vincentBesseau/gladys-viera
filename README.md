# gladys-viera

## Installation

* Add this module in Gladys
* Add VIERA_TV_LIST on Gladys parameters with value Viera TV ip (if you have more than one TV you can separate each IP by this | like this IP_VIERA_1|IP_VIERA_2|IP_VIERA_3)
* Restart Gladys.
* Click on viera configuration button to install each TV set at step 2 on Gladys

## Usage 

Turn on the TV :
```
gladys.modules.viera.television.switchState({state:true, device:DEVICE_ID});
```
Turn off the TV :
```
gladys.modules.viera.television.switchState({state:false, device:DEVICE_ID});
```
Media control :
```
gladys.modules.viera.television.pause({device:DEVICE_ID});
gladys.modules.viera.television.play({device:DEVICE_ID});
gladys.modules.viera.television.stop({device:DEVICE_ID});
gladys.modules.viera.television.rewind({device:DEVICE_ID});
gladys.modules.viera.television.fastForward({device:DEVICE_ID});
gladys.modules.viera.television.skipPrevious({device:DEVICE_ID});
gladys.modules.viera.television.skipNext({device:DEVICE_ID});
gladys.modules.viera.television.openInfo({device:DEVICE_ID});
gladys.modules.viera.television.rec({device:DEVICE_ID});
```
Volume control :
```
gladys.modules.viera.television.volumeUp({device:DEVICE_ID});
gladys.modules.viera.television.volumeDown({device:DEVICE_ID});
gladys.modules.viera.television.setMuted({status:true, device:DEVICE_ID});
gladys.modules.viera.television.setMuted({status:false, device:DEVICE_ID});
**/!\ Use only this next command without home cinema** 
gladys.modules.viera.television.setVolume({volume:15, device:DEVICE_ID});
```
Change channel (1 to 9 only) :
```
gladys.modules.viera.television.setChannel({channel:9, device:DEVICE_ID});
```
Navigate on TV :
```
gladys.modules.viera.television.pressKey({key:"OK", device:DEVICE_ID});
gladys.modules.viera.television.pressKey({key:"RIGHT", device:DEVICE_ID});
gladys.modules.viera.television.pressKey({key:"LEFT", device:DEVICE_ID});
gladys.modules.viera.television.pressKey({key:"UP", device:DEVICE_ID});
gladys.modules.viera.television.pressKey({key:"DOWN", device:DEVICE_ID});
gladys.modules.viera.television.pressKey({key:"BACK", device:DEVICE_ID});
gladys.modules.viera.television.openMenu({key:"MENU", device:DEVICE_ID});
```