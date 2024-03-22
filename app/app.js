var app = angular.module("app",[]);
app.controller ("emp",["$scope",function(c){
    c.num1=10;
    c.num2=20;
    c.sumthem=function(){
        c.sum=parseInt(c.num1)+parseInt(c.num2);
    }
}]);