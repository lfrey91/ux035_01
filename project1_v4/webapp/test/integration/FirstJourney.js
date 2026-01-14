sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onThezux35_trainer1_c_soList.iSeeThisPage();

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onThezux35_trainer1_c_soList.onFilterBar().iExecuteSearch();
            
            Then.onThezux35_trainer1_c_soList.onTable().iCheckRows();

            When.onThezux35_trainer1_c_soList.onTable().iPressRow(0);
            Then.onThezux35_trainer1_c_soObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});