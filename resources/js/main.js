$(function () {
    "use strict";

    $(".popup img").click(function () {
        var $src = $(this).attr("src");

        $(".show-modal").fadeIn(0);
        $(".img-show img").attr("src", $src);
        $("header").addClass("hide");
        $("header").removeClass("show");
        $("#worksbg").addClass("stopscroll");
    });

    $("span, .overlay").click(function () {
        $(".show-modal").fadeOut(0);
        $("header").removeClass("hide");
        $("header").addClass("show");
        $("#worksbg").removeClass("stopscroll");
    });

});

$("footer").hover(function(){
    //alert("hover");
    $(".shark").animate({marginBottom: "40"});

});
$("footer").mouseleave(function(){

    $(".shark").animate({marginBottom: "0"});

});

$(window).scroll(
    {
        previousTop: 0
    },
    function () {
    // get current distance from top of viewport
    var currentTop = $(window).scrollTop();
    // define the header height here
    var headerHeight = 200;
    // if user has scrolled past header, initiate the scroll up/scroll down hide show effect
    if( $(window).scrollTop() > headerHeight ) {
      if (currentTop < this.previousTop) {
        $("header").removeClass("hide");
        $("header").addClass("show");
      } else {
        $("header").addClass("hide");
        $("header").removeClass("show");

      }
    }
    this.previousTop = currentTop;
});
