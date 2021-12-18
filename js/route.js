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