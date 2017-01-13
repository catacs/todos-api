'use strict';

const mongoose = require('mongoose');

module.exports.ensureDatabaseConnection = function (req, res, next) {
	if (!dbIsConnected()) {
		return res.status(503).end();
	}
	next();
};

function dbIsConnected() {
	const connection = mongoose.connection;
	const STATES = mongoose.STATES;
	return connection.readyState === STATES.connected;
}
