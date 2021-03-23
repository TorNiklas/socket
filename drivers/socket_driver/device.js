'use strict';

const { ZigBeeDevice, ZigBeeDriver } = require('homey-zigbeedriver');
// const { ZigBeeDevice } = require('homey-meshdriver');
const { CLUSTER } = require('zigbee-clusters');

class RootDevice extends ZigBeeDevice {

	onNodeInit() {
		// Register capabilities
		this.registerCapability('onoff', CLUSTER.ON_OFF, { endpoint: 1 });
		this.registerCapability('measure_temperature', CLUSTER.TEMPERATURE_MEASUREMENT, { endpoint: 1 });
	}
}
module.exports = RootDevice;
