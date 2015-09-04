Application.$controller("MainPageController", ["$scope", function($scope) {
    "use strict";

    /* perform any action with the variables inside this block(on-page-load) */
    $scope.onPageVariablesReady = function() {
        /*
         * variables can be accessed through '$scope.Variables' property here
         * e.g. $scope.Variables.staticVariable1.getData()
         */
    };

    /* perform any action with widgets inside this block */
    $scope.onPageReady = function() {
        /*
         * widgets can be accessed through '$scope.Widgets' property here
         * e.g. $scope.Widgets.byId(), $scope.Widgets.byName()or access widgets by $scope.Widgets.widgetName
         */
    };

    function setPartialData(partial, data) {
        $scope.Widgets[partial].Variables.bookList.dataSet = data;
    }


    $scope.allBooksonSuccess = function(variable, data) {
        setPartialData('allBooksPartial', data);
    };


    $scope.mywishlistonSuccess = function(variable, data) {
        setPartialData('wantToBooksPartial', data);
    };

    $scope.readBooksonSuccess = function(variable, data) {
        setPartialData('readBooksPartial', data);
    };

    $scope.readingBooksonSuccess = function(variable, data) {
        setPartialData('readingBooksPartial', data);
    };

}]);