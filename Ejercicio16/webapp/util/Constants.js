sap.ui.define([
], function () {
    "use strict";
    return{
        REQUEST: {
            endPoint: {
                northwind: "Northwind"
            },
            method: {
                GET: "GET"
            },
            entity: {
                orderDetails: "/V3/Northwind/Northwind.svc/Order_Details",
                orders: "/V3/Northwind/Northwind.svc/Orders("
            }
        },
        MODEL: {
            orderDetails: "OrderDetailsModel",
            selectedOrder: "SelectedOrderModel",
            order: "OrderModel"
        },
        ROUTE: {
            detail: "RouteDetail",
            main: "RouteMain"
        }
    };
}, true);