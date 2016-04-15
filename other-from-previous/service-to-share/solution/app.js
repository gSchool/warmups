/*
    The following JavaScript represents a complete Angular application,
    albeit a simple one. The purpose of this warmup is to understand how
    information can be shared across controllers using a service and/or factory.

    Your task is to modify only the controllers in order to achieve the 
    following goals using the existing HTML markup.

    1. Clicking the 'Add Property' button should add a property to the SharingIsCaring
    singleton. 

    2. Clicking the 'Reset' button should cause the SharingIsCaring singleton to be
    an empty object.

    3. Each property on the SharingIsCaring singleton should be displayed twice,
    once in each controller. 
*/

var mainApp = angular.module('app', []);

// You may change these controllers as much as you'd like
mainApp.controller('MainController', function($scope, SharingIsCaring) {
    $scope.shared = SharingIsCaring;
});

mainApp.controller('AlternateController', function($scope, SharingIsCaring) {
    $scope.shareable = SharingIsCaring;
});

mainApp.controller('AddPropertyController', function($scope, SharingIsCaring) {
    $scope.propKey = '';
    $scope.propValue = '';

    $scope.addProperty = function() {
        SharingIsCaring[$scope.propKey] = $scope.propValue;
        $scope.propKey = '';
        $scope.propValue = '';
    };

    $scope.reset = function() {
        for(property in SharingIsCaring) {
            delete SharingIsCaring[property];
        }
    };

});

// You may not change this factory at all. 
mainApp.factory('SharingIsCaring', function() {
    var theSingleton = {};
    return theSingleton;
})