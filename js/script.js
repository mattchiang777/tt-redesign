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
        console.log($(window).height());
        console.log($(document).height());

        // Raise footer when near bottom of the page.
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 250) {
            // alert("near bottom!");
        }
    });
});
