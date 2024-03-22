var app = angular.module("app",[]);

app.controller("mycontroller",function($scope){ $scope.title="cafe deligth"; $scope.onbuttonclick=function(){
    $scope.title = "RYMEC CAFE" ;
}

});
