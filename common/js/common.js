(function () {
    $(document).ready(function () {
        if ($('.product-description__gallary')) {
            $('.product-description__gallary').slick({
                dots: false,
                arrows: false,
                infinite: false,
                slidesToShow: 5,
                slidesToScroll: 1,
                vertical: true,
                verticalSwiping: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            dots: false,
                            arrows: false,
                            infinite: false,
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            vertical: true,
                            verticalSwiping: true
                        }
    },
                    {
                        breakpoint: 600,
                        settings: {
                            dots: false,
                            arrows: false,
                            infinite: false,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            verticalSwiping: true,
                            vertical: true
                        }
    },
                    {
                        breakpoint: 480,
                        settings: {
                            dots: false,
                            arrows: false,
                            infinite: false,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            verticalSwiping: true,
                            vertical: true
                        }
    }
]

            });
        }
        if ($('.goods__also-like')) {
            $('.goods__also-like').slick({
                dots: false,
                arrows: true,
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            dots: false,
                            arrows: false,
                            infinite: false,
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
    },
                    {
                        breakpoint: 600,
                        settings: {
                            dots: false,
                            arrows: false,
                            infinite: false,
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
    },
                    {
                        breakpoint: 480,
                        settings: {
                            dots: false,
                            arrows: false,
                            infinite: false,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
    }
]

            });
        }
        if ($('.goods__wear-with')) {
            $('.goods__wear-with').slick({
                dots: false,
                arrows: true,
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            dots: false,
                            arrows: false,
                            infinite: false,
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
    },
                    {
                        breakpoint: 600,
                        settings: {
                            dots: false,
                            arrows: false,
                            infinite: false,
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
    },
                    {
                        breakpoint: 480,
                        settings: {
                            dots: false,
                            arrows: false,
                            infinite: false,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
    }
]

            });
        }

        $('.more-info__item').click(function () {
            $(this).next(".more-info__content").slideToggle();
        });

        var productPreview = $('.product-description__product-preview');
        var firstImgSrc = $(".product-description__gallary-img:first-of-type").attr("src");
        productPreview.attr("src", firstImgSrc);


        $('.product-description__gallary-img').click(function () {
            productPreview.attr("src", $(this).attr("src"));
        });


        $('.goods__slider-toggle').click(function () {
            $('.goods__slider-toggle').removeClass("goods__slider-toggle_current");
            $(this).addClass("goods__slider-toggle_current");
            

        });



    });



}());
