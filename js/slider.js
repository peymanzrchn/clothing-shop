$(function () {
    new SmoothScroll('a[href*="#"]', {
        easing: "linear",
        speed: 1000,
    });

    new WOW().init();

    $("#r-button").on("click", function () {
        let nav = $("#nav");
        let tog = $("#r-button i");
        if (nav.css("left") === "0px") {
            nav.css("left", "-240px");
            tog.removeClass("fa-times").addClass("fa-bars");
        } else {
            nav.css("left", "0px");
            tog.removeClass("fa-bars").addClass("fa-times");
        }
    });

    $(window).on("scroll load", function () {
        if ($(window).scrollTop() > 120) {
            $("#navbar")
                .css("background-color", "rgba(20,40,60,0.7)")
                .css("padding", "30px 40px");
            $("#top-nav").css("margin", "-10px");
            $("#logo").css("margin", "-3px");
        } else {
            $("#navbar")
                .css("background-color", "rgba(0,0,0,0)")
                .css("padding", "20px 40px");
        }
    });

    lightbox.option({
        resizeDuration: 300,
        albumLabel: "تصویر %1 از %2",
    });
});

$(window).on("load", function () {
    let portfolio = $("#portfolio-container").isotope({
        originLeft: false,
    });

    $("#portfolio-filter li").on("click", function () {
        $("#portfolio-filter li").removeClass("filter-active");
        $(this).addClass("filter-active");

        portfolio.isotope({
            filter: $(this).data("filter"),
        });
    });

    portfolio.on("arrangeComplete", function () {
        if ($(window).scrollTop() % 2 == 0) {
            $(window).scrollTop($(window).scrollTop() - 1);
        } else {
            $(window).scrollTop($(window).scrollTop() + 1);
        }
    });
});

$(".owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    rtl: true,
    responsive: {
        0: {
            items: 2,
        },
        768: {
            items: 4,
        },
        992: {
            items: 6,
        },
    },
});
