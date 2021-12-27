//RoutingPath
//Chuyển hướng content đến các View khác nhau.

var admin = angular.module('admin', ['ngRoute']);
admin.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/admin/View/MotobikeManager.html",
            controller: "motoCtrl"
        })
        .when("/account", {
            templateUrl: "/admin/View/AccountManager.html",
            controller: "accountCtrl"
        })
        .when("/motobike", {
            templateUrl: "/admin/View/MotobikeManager.html",
            controller: "motoCtrl"
        })
        .when("/donhang", {
            templateUrl: "/admin/View/DonHang.html",
            controller: "donHangCtrl"
        })
        .otherwise({
            templateUrl: "/admin/View/MotobikeManager.html",
            controller: "motoCtrl"
        });
});

//motobike Controller
admin.controller("motoCtrl", function($scope) {
    $scope.list_xe = [];
    if (localStorage.getItem("bikes")) {
        $scope.list_xe = angular.fromJson(localStorage.getItem("bikes"));
    }
    console.log($scope.list_xe);
    //Hiển thị ảnh
    $scope.setFile = function(element) {
        $scope.currentFile = element.files[0];
        var reader = new FileReader();

        reader.onload = function(event) {
                $scope.image_source = event.target.result
                $scope.$apply()
                console.log(event.target.result)

            }
            // when the file is read it triggers the onload event above.
        reader.readAsDataURL(element.files[0]);
    }

    //xóa 1 xe trong list_xe
    $scope.deleteXe = function(index) {
        $scope.list_xe.splice(index, 1);
        localStorage.setItem("bikes", angular.toJson($scope.list_xe))
    }


    //hiển thị xe lên form
    $scope.displayXe = function(index) {

        var tempXe = {
            id: "",
            Brand: "",
            name: "",
            Price: "",
            dungTich: "",
            image: ""
        }

        tempXe.id = $scope.list_xe[index].id;
        tempXe.Brand = $scope.list_xe[index].Brand;
        tempXe.name = $scope.list_xe[index].name;
        tempXe.Price = $scope.list_xe[index].Price;
        tempXe.dungTich = $scope.list_xe[index].dungTich;
        tempXe.image = $scope.list_xe[index].image;

        $scope.xe = tempXe;
        $scope.image_source = tempXe.image;
    }

    //thêm 1 xe vào list
    //image phải có sẵn trong forder images
    //kiểm tra $scope.image_source nếu quá dài thì nó đang được mã hóa base64 không lấy tên file từ đây mà lấy trong $scope.currentFile.name
    $scope.addXe = function() {

        var dem = 0;
        angular.forEach($scope.list_xe, function(value, key) {

            if (value.id == $scope.xe.id) {
                dem++;
                alert("Sản phẩm đã tồn tại");
                return;
            }
        })
        if (dem == 0) {
            $scope.list_xe.push($scope.xe);
            if ($scope.image_source.length > 500) {
                console.log("./images/" + $scope.currentFile.name);
                $scope.xe.image = "../images/" + $scope.currentFile.name;
            } else {
                console.log($scope.image_source);
                $scope.xe.image = $scope.image_source;
            }
        }
        localStorage.setItem("bikes", angular.toJson($scope.list_xe))
    }

    $scope.updateXe = function() {
        angular.forEach($scope.list_xe, function(value, key) {
            if (value.id == $scope.xe.id) {
                value.Brand = $scope.xe.Brand;
                value.name = $scope.xe.name;
                value.Price = $scope.xe.Price;
                value.dungTich = $scope.xe.dungTich;

                if ($scope.image_source.length > 500) {

                    value.image = "../images/" + $scope.currentFile.name;
                } else {

                    value.image = $scope.image_source;
                }
            }
            localStorage.setItem("bikes", angular.toJson($scope.list_xe))
        });
    }

})


//account Controller
//Function: add(), display(), delete(),update();
//
//
//
admin.controller("accountCtrl", function($scope) {
    $scope.list_account = [];
    if (localStorage.getItem("accounts")) {
        $scope.list_account = angular.fromJson(localStorage.getItem("accounts"));
    }

    $scope.add = function() {



        var dem = 0;
        angular.forEach($scope.list_account, function(value, key) {

            if (value.username == $scope.user.username) {
                dem++;
                alert("Tài khoản đã tồn tại");
                return;
            }
        })
        if (dem == 0) {
            $scope.list_account.push($scope.user);
            localStorage.setItem("accounts", angular.toJson($scope.list_account))
        }
        $scope.user = null;

    };


    $scope.delete = function(index) {
        $scope.list_account.splice(index, 1);
        localStorage.setItem("accounts", angular.toJson($scope.list_account))

    }
    $scope.display = function(index) {

        var temp = {
            username: "",
            password: "",
            name: "",
            age: "",
            phone: "",
            address: ""
        }

        temp.username = $scope.list_account[index].username;
        temp.password = $scope.list_account[index].password;
        temp.name = $scope.list_account[index].name;
        temp.age = $scope.list_account[index].age;
        temp.phone = $scope.list_account[index].phone;
        temp.address = $scope.list_account[index].address;

        $scope.user = temp;


    }

    $scope.update = function() {

        angular.forEach($scope.list_account, function(value, key) {
            if (value.username == $scope.user.username) {
                value.password = $scope.user.password;
                value.name = $scope.user.name;
                value.age = $scope.user.age;
                value.phone = $scope.user.phone;
                value.address = $scope.user.address;
            }
        });
        localStorage.setItem("accounts", angular.toJson($scope.list_account))
    }

})

admin.controller("donHangCtrl", function($scope) {
    $scope.list_donhang = [];
    if (localStorage.getItem("KhachHang")) {
        $scope.list_donhang = angular.fromJson(localStorage.getItem("KhachHang"));
    }




    $scope.delete = function(index) {
        $scope.list_donhang.splice(index, 1);
        localStorage.setItem("KhachHang", angular.toJson($scope.list_donhang))

    }
    $scope.display = function(index) {

        var temp = {
            maDH: "",
            email: "",
            name: "",
            phone: "",
            address: "",
            ngay: "",
            tongtien: "",
            trangthai: ""
        }
        temp.maDH = "DH" + index;
        temp.email = $scope.list_donhang[index].email;
        temp.name = $scope.list_donhang[index].name;
        temp.phone = $scope.list_donhang[index].phone;
        temp.address = $scope.list_donhang[index].address;
        temp.ngay = $scope.list_donhang[index].ngay;
        temp.tongtien = $scope.list_donhang[index].tongtien;
        temp.trangthai = $scope.list_donhang[index].trangthai;
        $scope.donhang = temp;


    }

    $scope.update = function() {

        angular.forEach($scope.list_donhang, function(value, key) {
            if (value.email == $scope.donhang.email) {
                value.name = $scope.donhang.name;
                value.phone = $scope.donhang.phone;
                value.address = $scope.donhang.address;
                value.ngay = $scope.donhang.ngay;
                value.tongtien = $scope.donhang.tongtien;
                value.trangthai = $scope.donhang.trangthai;
            }
        });
        localStorage.setItem("KhachHang", angular.toJson($scope.list_donhang))
    }
})