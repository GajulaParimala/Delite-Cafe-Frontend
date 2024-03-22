
var app = angular.module('myApp', []);

// Define an AngularJS controller named 'mycontroller'
app.controller('mycontroller', function ($scope) {
    // Initialize the showmessage variable
    $scope.showmessage = false;

    // Define the togglemessage function to toggle the value of showmessage
    $scope.togglemessage = function () {
        $scope.showmessage = !$scope.showmessage;
    };
});