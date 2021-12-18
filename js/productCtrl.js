
app.controller('productCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

    // Product
    var bikes = angular.fromJson(localStorage.getItem('bikes'));
    $scope.brands = angular.fromJson(localStorage.getItem('brands'));
    $scope.products = angular.fromJson(localStorage.getItem('bikes'));
    $scope.newProducts = [];
    $scope.productQuickView = [];
    $scope.hiddenView = false;
    var pageSize = 8;
    var update = function(pageSize) {
        $scope.pageSize = pageSize;
        $scope.begin = 0;
        $scope.currentPage = 1;
        $scope.pageCount = Math.ceil($scope.products.length / $scope.pageSize);
        $scope.count = $scope.products.length;
    };
    update(pageSize);

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

    $scope.getNewPrice = function(price) {
        return price * 0.9;
    }

    // Filter by product
    $scope.filterByPrice = function() {
        $scope.products = [];
        for(let i = 0; i < bikes.length; i++) {
            if(bikes[i].Price >= $scope.fromPrice && bikes[i].Price <= $scope.toPrice) {
                $scope.products.push(bikes[i]);
            }
        }
        update(pageSize);
    }

    //Filter by brand
    $scope.brand = "";
    if($routeParams.brand) {
        $scope.brand = $routeParams.brand;
    }

    $scope.all = function() {
        $scope.products = angular.fromJson(localStorage.getItem('bikes'));
        update(pageSize);
    }

    $scope.getBrand = function(item) {
        $scope.products = [];
        for(let i = 0; i < bikes.length; i++) {
            if(bikes[i].Brand == item) {
                $scope.products.push(bikes[i]);
            }
        }
        update(pageSize);
    }

    // Change view mode
    $scope.changeViewMode = function() {
        if($scope.viewMode == false) {
            pageSize = 8;
        }
        else {
            pageSize = 4;
        }
        update(pageSize);
    }

    // Quick view
    $scope.quickView = function(product) {
        $scope.productQuickView = product;
        $scope.hiddenView = true;
    }

    $scope.closeQuickView = function() {
        $scope.hiddenView = false;
    }
    
    // Pagination
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