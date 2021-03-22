sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "Ejercicio16/Ejercicio16/util/Services",
        "sap/ui/model/json/JSONModel",
        "Ejercicio16/Ejercicio16/util/Constants",
        "Ejercicio16/Ejercicio16/util/Commons"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, Services, JSONModel, Constants, Commons) {
		"use strict";
		return Controller.extend("Ejercicio16.Ejercicio16.controller.Detail", {
			onInit: function () {
                // Cada vez que se ingresa a la ruta del detalle, se ejecuta esta función
                this.getOwnerComponent().getRouter().getRoute(Constants.ROUTE.detail).attachPatternMatched(this._onRouteMatched, this);
            },
            loadOrdersModel: async function (orderID) {
                let oComponent = this.getOwnerComponent();
                let oResponse = await Services.getOrders(orderID);
                let oData = oResponse[0];
                var oModel = new JSONModel();
                oModel.setData(oData);
                oComponent.setModel(oModel, Constants.MODEL.order);
            },
            _onRouteMatched: function () {
                let orderID = this.getOwnerComponent().getModel(Constants.MODEL.selectedOrder).getData();
                this.loadOrdersModel(orderID);
            },
            onNavBack: function () {
                Commons.onNavBack()
            }
		});
	});