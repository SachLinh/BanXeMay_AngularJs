app.controller('myCtrl', function($scope){
    // $scope.products = listLT;
    // $scope.brands = listBrand;

    $scope.products = [];
    $scope.brands = [];
    if(localStorage.getItem('brands')) {
        $scope.brands = angular.fromJson(localStorage.getItem('brands'));
    }
    
    if(localStorage.getItem('bikes')) {
        $scope.products = angular.fromJson(localStorage.getItem('bikes'));
    }


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