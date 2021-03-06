app.controller('myCtrl', ['$scope', '$location', function($scope, $location) {
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



    // Đăng ký accounts
    $scope.accounts = [];
    if (window.localStorage.getItem('accounts') == null) {
        window.localStorage.setItem('accounts', angular.toJson($scope.accounts));
    }
    if (window.localStorage.getItem('accounts')) {
        $scope.accounts = angular.fromJson(window.localStorage.getItem('accounts'));
    }

    $scope.acc = {name: "",
        phone: "",
        password: "",
        address: "",
        username:"",
        age: 0};
    $scope.addAccount = function(a)
    {
        $scope.dem0 = 0;
        for (let i = 0; i < $scope.accounts.length; i++) {
            if ($scope.accounts[i].phone === a.phone) {
                window.alert(" Số điện thoại này đã được đăng ký. Vui lòng đăng ký số đt khác!");
                $scope.dem0++;
            }
            if ($scope.accounts[i].username === a.username) {
                window.alert(" Username này đã được đăng ký. Vui lòng đăng ký số username khác!");
                $scope.dem0++;
            }
        }
        if(!a.username)
            {
                window.alert(" Vui lòng nhập username!");  $scope.dem0++;
            }
        if(!a.password)
            {
                window.alert(" Vui lòng nhập mật khẩu!");  $scope.dem0++;
            }
        if(!a.phone)
            {
                window.alert(" Vui lòng nhập số điện thoại!"); $scope.dem0++;
            }
        if(!a.address)
            {
                window.alert(" Vui lòng nhập địa chỉ!"); $scope.dem0++;
            }
        if(!a.name)
            {
                window.alert(" Vui lòng nhập họ tên!");  $scope.dem0++;
            }
        if($scope.dem0 === 0){

                $scope.accounts.push({ name: a.name,
                    phone: a.phone,
                    password: a.password,
                    address: a.address,
                    username:a.username,
                    age: 0});
                window.localStorage.setItem('accounts', angular.toJson($scope.accounts));
                window.alert(" Đăng ký thành công!");
                $location.path("/dangNhap");
        }
    }

    //Dang nhap
    $scope.account = {};
    if (sessionStorage.getItem('account')) {
        $scope.account = angular.fromJson(sessionStorage.getItem('account'));
    }
    
    $scope.login = function() {
        let count = 0;
        
        if($scope.login.username === "admin" && $scope.login.password === "admin"){
            var adminLink = document.createElement('a');
            adminLink.href = "../admin/AdminLayout.html";
            adminLink.click();
        }
        else{
            for (let i = 0; i < $scope.accounts.length; i++) {
                if ($scope.accounts[i].username === $scope.login.username && $scope.accounts[i].password === $scope.login.password) {
                    count = 1;
                    sessionStorage.setItem('account', angular.toJson($scope.accounts[i]));
                    break;
                }
            }
            if(count == 1) {
                if (sessionStorage.getItem('account')) {
                    $scope.account = angular.fromJson(sessionStorage.getItem('account'));
                }
                if($scope.account) {
                    alert("Đăng nhập thành công! \n\nChào mừng " + $scope.account.username + " đến với GK Shop ^-^");
                    $location.path('/content');
                }
            }
            else{
                alert("Thông tin đăng nhập không chính xác!! \nVui lòng nhập lại! :((");
            }
        }
    }

    //Gio hang
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
        $scope.setTotals();
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
        $scope.total = 0;
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
}]);