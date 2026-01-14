sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"project1v4/test/integration/pages/zux35_trainer1_c_soList",
	"project1v4/test/integration/pages/zux35_trainer1_c_soObjectPage"
], function (JourneyRunner, zux35_trainer1_c_soList, zux35_trainer1_c_soObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('project1v4') + '/test/flp.html#app-preview',
        pages: {
			onThezux35_trainer1_c_soList: zux35_trainer1_c_soList,
			onThezux35_trainer1_c_soObjectPage: zux35_trainer1_c_soObjectPage
        },
        async: true
    });

    return runner;
});

