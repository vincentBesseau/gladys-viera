var stop = require('./viera.stop.js')
var start = require('./viera.start.js')

module.exports = function switchState(params){
	switch(!!params.state) {
		case true :
			start(params)
			break;
		case false :
            stop(params)
			break;
		default:
			sails.log.error('error durring switch !')
	}
	if (params.deviceTypeId !== undefined || params.deviceTypeId != 0) {
		gladys.deviceState.create({state:{
			deviceType:params.deviceTypeId,
			value:!!params.state
		}})
	}
}