$(function newSlide() {
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({triggerElement: ".overflow-content", duration: "100%"})
        .setPin("#pin")
        .addIndicators({name: "pin"}) // add indicators (requires plugin)
        .addTo(controller);

    $('#content').fullpage({

        scrollOverflow: false,
        scrollOverflowOptions: {
            // don't scroll horizontal
            scrollX: false,
            // but do scroll vertical
            scrollY: true,
            // show scrollbars
            scrollbars: false,
            // deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
            // if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
            useTransform: false,
            useTransition: false,
            probeType: 3,
            css: false,
            click: true
        },

        onLeave: function(index, nextIndex, direction) {
            var sections = $('#content').children('');

            // $('body').addClass('koekkoek');
            // window.setTimeout(function(){$('body').removeClass('koekkoek');}, 1500);

            $('.slide-transition').css({transform: "scaleX(1)"});
            $('.slide-transition').css({transformOrigin: "right 100% 0"});
            window.setTimeout(function(){$('.slide-transition').css({transformOrigin: "left 100% 0"});}, 200);
            window.setTimeout(function(){$('.slide-transition').css({transform: "scaleX(0)"});}, 500);
            window.setTimeout(function(){$('.slide-transition').css({transformOrigin: "left 0% 0"});}, 500);
            window.setTimeout(function(){$('.slide-transition').css({transformOrigin: "right 100% 0"});}, 750);

            $(sections[index -1]).addClass('doeidoei');
            $(sections[index -1]).removeClass('slide-in');
            $(sections[nextIndex -1]).removeClass('doeidoei');
            window.setTimeout(function(){$(sections[nextIndex -1]).addClass('slide-in');}, 1000);
        },
    });
});

$('.button-down').click(function(){
    $.fn.fullpage.moveSectionDown();
});