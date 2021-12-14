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
    { id:"1",Brand:"Yamaha",name:"Exciter",Price:49000000,dungTich:"155",image:"../images/Yamaha_Ex155.png"},
    { id:"2",Brand:"Yamaha",name:"Serius",Price:24000000,dungTich:"115",image:"../images/Yamaha_Serius_115.png"},
    { id:"3",Brand:"Yamaha",name:"NVX",Price:50000000,dungTich:"125",image:"../images/Yamaha_NVX.png"},
    { id:"4",Brand:"Yamaha",name:"Grande",Price:36000000,dungTich:"125",image:"../images/Yamaha_Grande.png"},
    { id:"5",Brand:"Honda",name:"Wave",Price:19000000,dungTich:"115",image:"../images/Honda_Wave_110.jpg"},
    { id:"6",Brand:"Honda",name:"SH",Price:59000000,dungTich:"155",image:"../images/Honda_Sh_155.png"}
 ];
app.controller('myCtrl', function($scope, $http){
    $scope.products = listLT;
    $scope.carts=[];
    $scope.add_cart = function(product){ //set a function name add_cart
        if(product){ //check if the product is already declared within the function
            $scope.carts.push({id: product.id, name: product.name, Price: product.Price, dungTich : product.dungTich, image: product.image});
        }	
    }
    $scope.total = 0;
    $scope.setTotals = function(cart){ //set a function name setTotals 
        if(cart){ //check if cart is already set in the function
            $scope.total += cart.Price; //sum the total value of each product
        }
    }
    $scope.remove_cart = function(cart){ //set a function called remove_cart
        if(cart){ //checked if the cart has a value
            $scope.carts.splice($scope.carts.indexOf(cart), 1); //delete a product based on the index 
            $scope.total -= cart.Price; //deduct the price of the product  simultaneously when deleted
        }
    }
})
