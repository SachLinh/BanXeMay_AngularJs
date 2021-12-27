app.controller('myCtrl', function($scope) {
    // $scope.products = listLT;
    // $scope.brands = listBrand;
    $scope.products = [];
    $scope.brands = [];
    if (localStorage.getItem('brands')) {
        $scope.brands = angular.fromJson(localStorage.getItem('brands'));
    }

    if (localStorage.getItem('bikes')) {
        $scope.products = angular.fromJson(localStorage.getItem('bikes'));
    }

    $scope.carts = [];
    if (window.sessionStorage.getItem('carts') == null) {
        window.sessionStorage.setItem('carts', angular.toJson($scope.carts));
    }
    if (window.sessionStorage.getItem('carts')) {
        $scope.carts = angular.fromJson(window.sessionStorage.getItem('carts'));
    }

    $scope.total = 0;
    $scope.add_cart = function(product) {
        $scope.dem = 0;
        for (let i = 0; i < $scope.carts.length; i++) {
            if ($scope.carts[i].id === product.id) {
                $scope.carts[i].quantity++;
                $scope.dem++;
            }
        }
        if ($scope.dem === 0) {
            $scope.carts.push({
                id: product.id,
                name: product.name,
                Price: product.Price,
                dungTich: product.dungTich,
                image: product.image,
                quantity: 1
            });
        }
        $scope.total = 0;
        window.sessionStorage.setItem('carts', angular.toJson($scope.carts));
    }


    $scope.cartPrice = function(cart) {
        return (cart.Price * cart.quantity);
    }



    $scope.UpdateLai = function(cart) {
        for (let i = 0; i < $scope.carts.length; i++) {
            if ($scope.carts[i].id === cart.id) {
                $scope.carts[i].quantity == cart.quantity;
            }
        }
        window.sessionStorage.setItem('carts', angular.toJson($scope.carts));
        $scope.carts = angular.fromJson(window.sessionStorage.getItem('carts'));
        $scope.total = 0;
        $scope.setTotals();
    }

    $scope.setTotals = function() {
        $scope.setTotals = 0;
        angular.forEach($scope.carts, function(cart, key) {
            $scope.total += cart.Price * cart.quantity;
        });
    }

    $scope.remove_cart = function(cart) {
        if (cart) {
            $scope.carts.splice($scope.carts.indexOf(cart), 1);
            if ($scope.total <= 0) {
                $scope.total = 0;
            } else {
                $scope.total -= cart.Price * cart.quantity;
            }
        }
        window.sessionStorage.setItem('carts', angular.toJson($scope.carts));
    }

    $scope.KhachHang = [];

    if (window.localStorage.getItem('KhachHang')) {
        $scope.KhachHang = angular.fromJson(window.localStorage.getItem('KhachHang'));
    }
    $scope.add_KhachHang = function(newData) {
        // $scope.KhachHang.push($scope.newData);
        $scope.KhachHang.push({
            maDH: "",
            email: newData.email,
            name: newData.name,
            phone: newData.phone,
            address: newData.address,
            ngay: date,
            tongtien: $scope.total,
            trangthai: false
        })
        window.localStorage.setItem('KhachHang', angular.toJson($scope.KhachHang));
    }
    var today = new Date();
    $scope.date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
});