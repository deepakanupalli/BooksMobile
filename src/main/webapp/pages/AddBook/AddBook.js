Application.$controller("AddBookPageController", ["$scope", function($scope) {
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

    $scope.getISBNdataonSuccess = function(variable, data) {
        var volume = '';
        if (!data || data.totalItems == 0) {
            alert('Information is not available for this book.');
        } else {
            var imageLinks = data.items[0].volumeInfo.imageLinks;
            if (imageLinks) {
                $scope.Variables.BookImage.dataSet.dataValue = (imageLinks.thumbnail ? imageLinks.thumbnail : imageLinks.smallThumbnail);
            };
        }
    };


    $scope.uploadImageonSuccess = function(variable, data) {
        $scope.Variables.BookImage.dataSet.dataValue = data.path;
    };


    $scope.addBookFormBeforeservicecall = function($event, $operation, $data) {
        $data.imageUrl = $scope.Variables.BookImage.dataSet.dataValue;
    };

}]);


Application.$controller("addBookFormController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);