var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

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
 
if(localStorage.getItem('brands') == null) {
    localStorage.setItem('brands', angular.toJson(listBrand));
}
if(localStorage.getItem('bikes') == null) {
    localStorage.setItem('bikes', angular.toJson(listLT));
}