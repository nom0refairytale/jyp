
$(function(){

    $(".main_slider").slick({
        arrows:false,
        //dots:true,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnFocus:false,
        centerMode:true,
        centerPadding:"300px",
    });

    $("#visual .xi-angle-left-thin").on("click", function(){
        $(".main_slider").slick("slickPrev");
    });

    $("#visual .xi-angle-right-thin").on("click", function(){
        $(".main_slider").slick("slickNext");
    });

    $("#visual figure").eq(2).addClass("on")
    $("#visual .main_slider").on("afterChange", function(e,s,c){
        $("#visual figure").eq(c+2).addClass("on").siblings().removeClass("on");
    });




    $("#content01 .container").slick({
        arrows:false,
        //dots:true,
        slidesToShow: 5,
        autoplay:true,
    });


    $("#content01 .xi-angle-left-thin").on("click", function(){
        $("#content01 .container").slick("slickPrev");
    });

    $("#content01 .xi-angle-right-thin").on("click", function(){
        $("#content01 .container").slick("slickNext");
    });


$("#content01 figure").eq(7).addClass("on")
$("#content01 .container").on("afterChange", function(e,s,c){
    $("#content01 figure").eq(c+7).addClass("on").siblings().removeClass("on");
});






});


