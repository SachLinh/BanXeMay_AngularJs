var app = angular.module("myApp", ["ngRoute", "ngAnimate"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/content", {
        templateUrl : "../View/content.html",
    })
    .when("/gioiThieu", {
        templateUrl : "../View/gioiThieu.html",
    })
    .when("/lienHe", {
        templateUrl : "../View/lienHe.html",
    })
    .when("/sanPham", {
        templateUrl : "../View/sanPham.html",
    })
    .when("/gioHang", {
        templateUrl : "../View/gioHang.html",
    })
    .when("/dangNhap", {
        templateUrl : "../View/dangNhap.html",
    })
    .when("/dangKy", {
        templateUrl : "../View/dangKy.html",
    })
    .otherwise({
        redirectTo: '/content'
    })
});
var listLT = [
    { "id":"1","Brand":"Yamaha","name":"Exciter","Price":"49.000.000","dungTich":"155","image":"../images/Yamaha_Ex155.png"},
    { "id":"2","Brand":"Yamaha","name":"Serius","Price":"24.000.000","dungTich":"115","image":"../images/Yamaha_Serius_115.png"},
    { "id":"3","Brand":"Yamaha","name":"NVX","Price":"50.000.000","dungTich":"125","image":"../images/Yamaha_NVX.png"},
    { "id":"4","Brand":"Yamaha","name":"Grande","Price":"36.000.000","dungTich":"125","image":"../images/Yamaha_Grande.png"},
    { "id":"5","Brand":"Honda","name":"Wave","Price":"19.000.000","dungTich":"115","image":"../images/Honda_Wave_110.jpg"},
    { "id":"6","Brand":"Honda","name":"SH","Price":"59.000.000","dungTich":"155","image":"../images/Honda_Sh_155.png"}
 ];
app.controller('myCtrl', function($scope, $http){
    $scope.products = listLT;
})