$(document).ready(function()
{

    //slider
    $('.carousel').carousel({
        interval: 5000
    });


    //home menu button animation
    if ($(window).width()>992) {

        $(".lines-button" ).click(function() {
            $( this ).toggleClass("close-button");
            $(".slide-down-menu").toggleClass("animate");
            $(".animate-menu-mob").toggleClass("animate");
            $(".animate-menu-mob .main-list").addClass("list-inline");
        });
    }


    if ($(window).width()<992) {

        $(".lines-button" ).click(function() {
            $( this ).toggleClass("close-button");
            $(".animate-menu-mob").toggleClass("animate");
            $(".slide-down-menu").toggleClass("animate");
            $(".animate-menu-mob .main-list").removeClass("list-inline");

        });

    }

});//end of document.ready function



//fade out success message of form in wrapper
$("#send_button").click(function(){
    setTimeout(function() {
        $('#success_message').fadeOut();

    }, 10000 );
});


//preloader
$(document).imagesLoaded( function() {
    $('.pre-loader').fadeOut(1000);
});//end of preloader



//shiksha menu down in mobile
$(".icon-plus" ).click(function() {
    $( this ).toggleClass("icon-minus");
    $(".menu-down-mob").toggleClass("height-menu");

});


$(window).load(function(){


    var url = window.location.href;

    $(".event-hover-div a").click(function(){
        var substr_href=this.hash.substr(1);
        var hash="#";
        var res_id = hash.concat(substr_href);
        var top_of_div =$(res_id).offset().top;
        var actual_position=top_of_div-74;
        $('html, body').animate({
            scrollTop: actual_position
        }, 2000);
    });
    //hover of event menu in header
    $(".event-menu").hover(function(){

        $(".event-hover-div").stop().slideDown(500);
    }, function(){

        $(".event-hover-div").stop().slideUp(500);
    });

    $(".hover-sub-menu").hover(function(){


        $(this).find(".event-sub-menu-list").stop().slideDown(100);
    }, function(){

        $(this).find(".event-sub-menu-list").stop().slideUp(100);
    });



    if ($(window).width()>768) {


        //slider height
        windowheight=$(window).height();
        $("#slider").css("height",windowheight);
        $(".slider-content-wrapper").css("height",windowheight);

        $(".animation-text").animate({ marginTop: '320px', opacity: 1}, 2000);
        $(".arrow-one").animate({ marginTop: '184px', opacity: 1}, 2000);
        $(".arrow-two").animate({ marginTop: '212px', opacity: 1}, 2000);
        $(".arrow-three").animate({ marginTop: '-55px', opacity: 1}, 2000);
        $(".arrow-four").animate({ marginTop: '99px', opacity: 1}, 2000);

        //home page announcement section height
        var left_col_height=$('.left-col-content').height();
        $(".right-col-content").css("height",left_col_height-"20");

        // adding list-inline class to make menu item display horizontally in large devices
        $(".slide-down-menu .main-list").addClass("list-inline");


        $(".action").addClass("animate-icon");
        /*calendar-icon*/
    }


    if ($(window).width()<992)
    {

        //slide up menu in mobile on clik anywhere in the window
        $('body').click(function(evt){
            if(evt.target.id == "menu_button")
                return;

            if($(evt.target).closest('#menu_button').length)
                return;
            var position = $('.menu-animation').position();
            var top_value=  position.top;
            if (top_value=="46")
            {
                $(".lines-button").toggleClass("close-button");
                $(".menu-animation").toggleClass("animate");
                $(".header-wrapper").toggleClass("bg-color");
            }
        });

        //removing list-inline class to make menu item display like list in mobile devices
        $(".slide-down-menu .main-list").removeClass("list-inline");


        //give rose color to menubar in mobile devices on button click
        $(".lines-button" ).click(function() {
            $(".header-wrapper").toggleClass("bg-color");
        });

    }

});//end of window.load


$( window ).resize(function() {


    if ($(window).width()>992) {

        //slider height
        windowheight=$(window).height();
        /* $("#slider").css("height",windowheight); */
        $(".slider-content-wrapper").css("height",windowheight);
        $(".animate-menu-mob .main-list").addClass("list-inline");

        //home page announcement section height
        var left_col_height=$('.left-col-content').height();
        $(".right-col-content").css("height",left_col_height-"20");

        // adding list-inline class to make menu item display horizontally in large devices
        $(".slide-down-menu .main-list").addClass("list-inline");

    }
    if ($(window).width()<992)
    {

        //removing list-inline class to make menu item display like list in mobile devices
        $(".slide-down-menu .main-list").removeClass("list-inline");
    }

})//end of window.resize



var nav_visible=false;
var nav_animation=false;
var calender_animation=false;

$(window).scroll(function(){

    var scroll_top = $(window).scrollTop();

    if ($(window).width()>992) {

        if(scroll_top>550 && calender_animation==false){
            $(".action").addClass("animate-icon");
            calender_animation=true;
        }
        else if(scroll_top<550 && calender_animation==true){
            $(".action").removeClass("animate-icon");
            calender_animation=false;
        }

        if(scroll_top>$("#slider").height() && nav_animation==false){

            $(".animate-header").stop().animate({ top: '0px'}, 1000);
            nav_animation=true;

        }

        else  if(nav_animation==true && scroll_top<$("#slider").height()){

            $(".animate-header").stop().animate({ top: '-700'}, 1000);
            nav_animation=false;
        }

    }

    else {
        if(scroll_top>100 && nav_visible==false){

            $(".header-wrapper").addClass("change-header");
            $(".header-wrapper").css("margin-top",-"200");
            nav_visible=true;

        }

        else  if(nav_visible==true && scroll_top<100){

            $(".header-wrapper").removeClass("change-header");
            $(".header-wrapper").css("margin-top","0");
            nav_visible=false;
        }

        if(scroll_top>$("#slider").height() && nav_animation==false){

            $(".change-header").css("margin-top","0");
            nav_animation=true;

        }

        else  if(nav_animation==true && scroll_top<$("#slider").height()){

            $(".change-header").css("margin-top",-"200");
            nav_animation=false;
        }
    }

}); //end window.scrolltop


