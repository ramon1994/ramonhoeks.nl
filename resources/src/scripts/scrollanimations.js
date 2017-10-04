$(function () {
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({triggerElement: ".overflow-content", duration: "100%"})
        .setPin("#pin")
        .addIndicators({name: "pin"}) // add indicators (requires plugin)
        .addTo(controller);

    $('#content').fullpage({
        scrollOverflow: true,
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
            click: true
        }
    });
});