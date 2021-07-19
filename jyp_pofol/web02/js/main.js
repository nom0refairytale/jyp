$(function(){


    $("#Wrap").fullpage({
        //sections Color: ['#f2f2f2','#4BBFC3','#7BAABE','whitesmoke','#000'],
        navigation: true,
        afterLoad: function(origin, destination, direction){
            $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
        },
    });

});