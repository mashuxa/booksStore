//  $(document).ready(function () {
//      var sliderSettings = {
//          dots: false,
//          arrows: true,
//          infinite: false,
//          slidesToShow: 4,
//          slidesToScroll: 1,
//          responsive: [
//              {
//                  breakpoint: 1024,
//                  settings: {
//                      dots: false,
//                      arrows: false,
//                      infinite: false,
//                      slidesToShow: 3,
//                      slidesToScroll: 1
//                  }
//     },
//              {
//                  breakpoint: 600,
//                  settings: {
//                      dots: false,
//                      arrows: false,
//                      infinite: false,
//                      slidesToShow: 2,
//                      slidesToScroll: 1
//                  }
//     },
//              {
//                  breakpoint: 480,
//                  settings: {
//                      dots: false,
//                      arrows: false,
//                      infinite: false,
//                      slidesToShow: 1,
//                      slidesToScroll: 1
//                  }
//     }
// ]
//
//      };
//      if ($('.product-description__gallary')) {
//          $('.product-description__gallary').slick({
//              dots: false,
//              arrows: false,
//              infinite: false,
//              slidesToShow: 5,
//              slidesToScroll: 1,
//              vertical: true,
//              verticalSwiping: true,
//              responsive: [
//                  {
//                      breakpoint: 1024,
//                      settings: {
//                          dots: false,
//                          arrows: false,
//                          infinite: false,
//                          slidesToShow: 4,
//                          slidesToScroll: 1,
//                          vertical: true,
//                          verticalSwiping: true
//                      }
//     },
//                  {
//                      breakpoint: 600,
//                      settings: {
//                          dots: false,
//                          arrows: false,
//                          infinite: false,
//                          slidesToShow: 3,
//                          slidesToScroll: 1,
//                          verticalSwiping: true,
//                          vertical: true
//                      }
//     },
//                  {
//                      breakpoint: 480,
//                      settings: {
//                          dots: false,
//                          arrows: false,
//                          infinite: false,
//                          slidesToShow: 2,
//                          slidesToScroll: 1,
//                          verticalSwiping: true,
//                          vertical: true
//                      }
//     }
// ]
//
//          });
//      }
//
//      if ($('.goods__wear-with')) {
//          $('.goods__wear-with').slick(sliderSettings);
//      }
//
//
//      function initSliderAlsoLike() {
//          $(".goods__also-like").css("display", "block");
//          $('.goods__also-like').slick(sliderSettings);
//          $('.goods__slider-toggle_also-like').off('click', initSliderAlsoLike);
//      }
//      $('.goods__slider-toggle_also-like').on('click', initSliderAlsoLike);
//
//
//
//
//      $('.more-info__item').click(function () {
//          $(this).next(".more-info__content").slideToggle();
//      });
//
//      var productPreview = $('.product-description__product-preview');
//      productPreview.attr("src", $(".product-description__gallary-img:first-of-type").attr("src"));
//
//
//      $('.product-description__gallary-img').click(function () {
//          productPreview.attr("src", $(this).attr("src"));
//      });
//
//
//      $('.goods__slider-toggle').click(function () {
//          $('.goods__slider-toggle').removeClass("goods__slider-toggle_current");
//          $(this).addClass("goods__slider-toggle_current");
//      });
//
//      $('.goods__slider-toggle').click(function () {
//          if ($(this).hasClass("goods__slider-toggle_wear-with")) {
//              $('.goods__wear-with').fadeIn();
//              $('.goods__also-like').fadeOut();
//          } else {
//              $('.goods__also-like').fadeIn();
//              $('.goods__wear-with').fadeOut();
//          }
//      });
//
//
//      $('.product-description__btn_add-to-cart').click(function () {
//          $('body').addClass("blocked");
//          $('.popup').slideDown();
//          $('.popup__current-img').attr("src", $('.product-description__product-preview').attr("src"));
//      });
//
//
//
//      var companyName = $(".popup__company-name");
//      var valChar = $(".popup__val-char");
//
//      $('.colors-input').click(function () {
//          $('.colors-input').removeClass("colors-input_current");
//          $(this).addClass("colors-input_current");
//          companyName.css("color", $(this).find("input").val());
//      });
//      $('.fonts-input').click(function () {
//          $('.fonts-input').removeClass("fonts-input_current");
//          $(this).addClass("fonts-input_current");
//          companyName.css("font-family", $(this).find("input").val());
//      });
//
//
//      $('#popup__logo-name').keyup(function () {
//          if ($(this).val().length < 21) {
//              valChar.text($(this).val().length);
//              companyName.text($(this).val());
//          } else {
//              alert("Max 20 caratteri");
//          }
//
//      });
//
//
//      $('.popup__btn_close').click(function () {
//          $('body').removeClass("blocked");
//          $('.popup').slideUp();
//      });
//
//
//
//
//  });
