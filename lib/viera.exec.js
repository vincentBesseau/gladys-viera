const commandsList = require('./viera.js')

module.exports = function(params) {
  switch(params.deviceType.deviceTypeIdentifier) {
      case 'Power':
        switch(params.state.value) {
          case 1:
            commandsList.start()
          break;
          case 0:
            commandsList.stop()
          break;
        }
      break;
      case 'Mute':
        switch(params.state.value) {
          case 1:
            commandsList.setMute({'status' : true})
          break;
          case 0:
            commandsList.setMute({'status' : false})
          break;
        }
      break;
      case 'Channel':
        commandsList.openChannel({'channelNumber' : params.state.value})
      break;
      case 'Sound':
    //rework
        commandsList.setVolume({'volume' : params.state.value})
      break;
      default:
        console.log('Error during LGWEBOS command')
      break;
    }
  }
};