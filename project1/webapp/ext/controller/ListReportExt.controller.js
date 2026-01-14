sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        Nav_GD: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    }
});
