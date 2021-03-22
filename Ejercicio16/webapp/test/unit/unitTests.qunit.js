/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Ejercicio16/Ejercicio16/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
