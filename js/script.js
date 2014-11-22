$(document).ready(function() {

    var stickyNavTop = $('#navbar').offset().top;

    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();
         
        if (scrollTop > stickyNavTop) { 
            $('#navbar').addClass('sticky');
            $("#container").css("margin-top", "111px");
        } else {
            $('#navbar').removeClass('sticky'); 
            $("#container").css("margin-top", "0px");
        }
    };

    // stickyNav();


    $(window).scroll(function() {
        stickyNav();
        var scrollTop = $(window).scrollTop();

        // Raise footer when near bottom of the page.
        if (scrollTop + $(window).height() > $(document).height() - 250) {
            $("#before-footer").animate({top: "0px"}, 500);
        };

        // Fade out fist when you scroll downwards.
        var headerTop = $("#header").offset().top;
        if (scrollTop > headerTop) {
            var pixelsPastHeader = scrollTop - headerTop;
            $("#header").css({'opacity': 1 - (pixelsPastHeader/500)});
        };

    });
});
