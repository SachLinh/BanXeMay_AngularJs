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
    .when("/product", {
        templateUrl : "../View/product.html",
       controller:"productCtrl"
    })
    .when("/productDetail/:productId", {
        templateUrl : "../View/product_detail.html",
        controller:"productCtrl"
    })
    .when("/product/:brand", {
        templateUrl : "../View/product.html",
        controller:"productCtrl"
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
    { id:"6",Brand:"Honda",name:"CB",Price:109000000,dungTich:"150",image:"../images/Honda_CB.jpg"},
    { id:"7",Brand:"Honda",name:"SH",Price:59000000,dungTich:"155",image:"../images/Honda_Sh_155.png"},
    { id:"8",Brand:"Honda",name:"Future",Price:24000000,dungTich:"125",image:"../images/Honda_Future_125.png"},
    { id:"9",Brand:"Honda",name:"Air Blade",Price:42000000,dungTich:"125",image:"../images/Honda_AB_125.png"}
 ];

var listBrand = ["Yamaha", "Honda", "Suzuki"];
 
 app.controller('myCtrl', function($scope){
    $scope.products = listLT;
    $scope.brands = listBrand;
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
   
});

app.controller('productCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

    // Product
    $scope.newProducts = [];
    $scope.productQuickView = [];
    $scope.pageSize = 8;
    $scope.begin = 0;
    $scope.currentPage = 1;
    $scope.pageCount = Math.ceil($scope.products.length / $scope.pageSize);
    $scope.hiddenView = false;
    $scope.count = listLT.length;
    // Product detail
    var id = $routeParams.productId;
    angular.forEach($scope.products, function(value, key) {
        if(value.id == id) {
            $scope.productDetail = angular.copy($scope.products[key]);
        }
    });
    //New product
    for(let i = $scope.products.length - 1; i >= $scope.products.length - 3; i--) {
        $scope.newProducts.push($scope.products[i]);
    }
    //Filter by brand
    $scope.brand = "";
    if($routeParams.brand) {
        $scope.brand = $routeParams.brand;
    }

    // Event
    $scope.getNewPrice = function(price) {
        return price * 0.9;
    }
    
    $scope.changeViewMode = function() {
        $scope.viewMode = !$scope.viewMode;
    }

    $scope.quickView = function(product) {
        $scope.productQuickView = product;
        $scope.hiddenView = true;
    }

    $scope.closeQuickView = function() {
        $scope.hiddenView = false;
    }
    
    $scope.firstPage = function() {
        $scope.begin = 0;
        $scope.currentPage = 1;
    }

    $scope.previousPage = function() {
        if($scope.begin > 0) {
            $scope.begin -= $scope.pageSize;
            $scope.currentPage -= 1;
        }
    }

    $scope.forwardPage = function() {
        if($scope.begin < ($scope.pageCount - 1) * $scope.pageSize) {
            $scope.begin += $scope.pageSize;
            $scope.currentPage += 1;
        }
    }

    $scope.lastPage = function() {
        $scope.begin = ($scope.pageCount - 1) * $scope.pageSize;
        $scope.currentPage = $scope.pageCount;
    }

}]);


