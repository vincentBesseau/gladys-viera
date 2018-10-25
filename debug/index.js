if ( typeof sails !== 'undefined' && sails ) {
    return '';
}
var vieraIp = '';
const Viera = require("viera.js");

var vieraTV = new Viera(vieraIp);

vieraTV.sendCommand('D1')
       .sendCommand('D1');