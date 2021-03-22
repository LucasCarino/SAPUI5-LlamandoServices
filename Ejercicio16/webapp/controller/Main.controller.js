sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "Ejercicio16/Ejercicio16/util/Services",
        "Ejercicio16/Ejercicio16/util/Commons",
        "Ejercicio16/Ejercicio16/util/Constants",
        "Ejercicio16/Ejercicio16/model/models"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel, Services, Commons, Constants, Models) {
		"use strict";

		return Controller.extend("Ejercicio16.Ejercicio16.controller.Main", {
			onInit: function () {
                this.loadOrderDetailsModel();
            },
            loadOrderDetailsModel: async function () {
            let oComponent = this.getOwnerComponent();
            let oResponse = await Services.getOrderDetails();
            let oData = oResponse[0];
            var oOrderDetails = new JSONModel();
            oOrderDetails.setData(oData);
            oComponent.setModel(oOrderDetails, Constants.MODEL.orderDetails);
            },
            onSelectOrder: function (oEvent) {
                var oBindingContext = oEvent.getSource().getSelectedItem().getBindingContext(Constants.MODEL.orderDetails);
                var oModel = this.getView().getModel(Constants.MODEL.orderDetails);
                var oSelectedOrder = oModel.getProperty(oBindingContext.getPath());
                let orderID = oSelectedOrder.OrderID;
                // console.log(orderID);
                oModel = new JSONModel();
                oModel.setData(orderID);
                this.getOwnerComponent().setModel(oModel, Constants.MODEL.selectedOrder)
                Commons.onNavigate(this, Constants.ROUTE.detail)
            }
		});
	});
