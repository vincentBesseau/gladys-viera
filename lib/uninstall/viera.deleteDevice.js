module.exports = function deleteDevice(){
	sails.log.debug('Début désinstallation du device');
	gladys.device.getByService({'service':'viera'})
	.then((devices) => {
		devices.forEach(function(device) {
			gladys.device.delete(device)
		})
	})
	sails.log.debug('Fin désinstallation du device');
}