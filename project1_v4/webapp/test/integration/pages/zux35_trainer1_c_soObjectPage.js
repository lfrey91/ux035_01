sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'project1v4',
            componentId: 'zux35_trainer1_c_soObjectPage',
            contextPath: '/zux35_trainer1_c_so'
        },
        CustomPageDefinitions
    );
});