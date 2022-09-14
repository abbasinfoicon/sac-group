// startup-slider-slider
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $("header").addClass('sticky');

        } else {
            $("header").removeClass('sticky');

        }
    });

    // autocounter 
    if ($(".counter").length) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
        $('.counter').addClass('animated fadeInDownBig');
        $('.autoCounter h3').addClass('animated fadeIn');
    }

    // handle links with @href started with '#' only
    $(document).on('click', 'a[href^="#"]', function (e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $id.offset().top;

        // animated top scrolling
        $('body, html').animate({ scrollTop: pos });
    });
});



