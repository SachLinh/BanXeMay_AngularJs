var account = [
    {
        username: "user1",
        password: "abc123",
        name: "Nguyễn Hữu Tài",
        age: "21",
        phone: "0989898989",
        address: "Hà Nội"
    },
    {
        username: "user2",
        password: "abc123",
        name: "Nguyễn Hữu Tài",
        age: "21",
        phone: "0989898989",
        address: "Hà Nội"
    },
    {
        username: "user3",
        password: "abc123",
        name: "Nguyễn Hữu Tài",
        age: "21",
        phone: "0989898989",
        address: "Hà Nội"
    }
]

if(localStorage.getItem('accounts') == null) {
    localStorage.setItem('accounts', angular.toJson(account));
}