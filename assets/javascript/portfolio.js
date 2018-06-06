var slide1 = function () {
    $(".drop1").slideToggle("slow");
};
var slide2 = function () {
    $(".drop2").slideToggle("slow");
};
var slide3 = function () {
    $(".drop3").slideToggle("slow");
};
var slide4 = function () {
    $(".drop4").slideToggle("slow");
};
var slide5 = function () {
    $(".drop5").slideToggle("slow");
};
var slide6 = function () {
    $(".drop6").slideToggle("slow");
};

$(document).ready(function () {
    $("#flip1").on("click", slide1);
    $("#flip2").on("click", slide2);
    $("#flip3").on("click", slide3);
    $("#flip4").on("click", slide4);
    $("#flip5").on("click", slide5);
    $("#flip6").on("click", slide6);

});