$(function(){
    ////////////////////
    
    
    $("#main").fullpage({
        anchors:['xm01','xm02','xm03','xm04','xm05','xm06','xm07'],
        afterLoad: function(origin, destination, direction){
            $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
            $("nav li").eq(destination.index).addClass("on").siblings().removeClass("on");
            if(destination.index===6) {
                $("footer").css({color:"#fff"})
            }else{
                $("footer").removeAttr("style")
            }
        },
    
    });
    


$("#mopen").on("click", function(){
    $(this).toggleClass("on");
    $("#cover_nav").toggleClass("on");
});

$("#cover_nav .link a").on("click",function(){
    $("#cover_nav").removeClass("on");
    $("#mopen").removeClass("on");
});


$(".pt_slider").slick({
    arrows:false,
    slidesToShow: 3,
    dots:true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            
          },
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});

$(".pf04 i.xi-caret-down-square").on("click", function(){
    $(".pt_slider").slick("slickPrev");
});

$(".pf04 i.xi-caret-up-square").on("click", function(){
    $(".pt_slider").slick("slickNext");
});



$(".pt_slider02").slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    //dots:true,
    
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,          }
        },
      ]
});


//pf05 슬릭 방향
$(".xi-caret-down-square").on("click", function(){
    $(".pt_slider02").slick("slickPrev");
});

$(".xi-caret-up-square").on("click", function(){
    $(".pt_slider02").slick("slickNext");
});

///////
});