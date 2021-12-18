
app.controller('productCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

    // Product
    $scope.brands = angular.fromJson(localStorage.getItem('brands'));
    $scope.products = angular.fromJson(localStorage.getItem('bikes'));
    $scope.newProducts = [];
    $scope.productQuickView = [];
    $scope.hiddenView = false;
    var update = function() {
        $scope.pageSize = 8;
        $scope.begin = 0;
        $scope.currentPage = 1;
        $scope.pageCount = Math.ceil($scope.products.length / $scope.pageSize);
        $scope.count = $scope.products.length;
    };
    update();
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

    $scope.all = function() {
        $scope.products = angular.fromJson(localStorage.getItem('bikes'));
        update();
    }

    $scope.getBrand = function(item) {
        $scope.products = [];
        var bikes = angular.fromJson(localStorage.getItem('bikes'));
        for(let i = 0; i < bikes.length; i++) {
            if(bikes[i].Brand == item) {
                $scope.products.push(bikes[i]);
            }
        }
        update();
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