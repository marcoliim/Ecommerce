$(document).ready(function () {


    let $btns = $('.product-area .button-group button');

    $btns.click(function (e) {

        $('.product-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.product-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $("x.zoom, .xzoom-gallery").xzoom({
        zoomWidth: 500,
        title: false,
        tint: "#333",
        xoffset: 15
    })

})