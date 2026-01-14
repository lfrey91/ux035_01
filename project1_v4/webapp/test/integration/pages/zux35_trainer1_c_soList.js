sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'project1v4',
            componentId: 'zux35_trainer1_c_soList',
            contextPath: '/zux35_trainer1_c_so'
        },
        CustomPageDefinitions
    );
});