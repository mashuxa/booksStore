// document.addEventListener('DOMContentLoaded', () => {

    let productPreviewImg = document.querySelector(".product-card__product-preview");
    let companyName = document.querySelector(".popup__company-name");
    document.querySelector('.product-card__product-preview').setAttribute("src", document.querySelector('.product-card__gallery-img').getAttribute("src"));

    document.body.addEventListener("click", (e) => {
        let elem = e.target;
        let elemClasses = elem.classList;
        if (elemClasses.contains("product-card__btn_personalization")) {
            let currentProductImgSrc = productPreviewImg.getAttribute("src");
            document.querySelector(".popup__current-img").setAttribute("src", currentProductImgSrc);
            document.body.classList.add("blocked");
            document.querySelector(".popup").classList.add("popup_visible");

        } else if (elemClasses.contains("product-card__gallery-img")) {

            productPreviewImg.setAttribute("src", elem.getAttribute("src"));

        } else if (elemClasses.contains("popup__btn_close")) {

            document.body.classList.remove("blocked");
            elem.closest(".popup").classList.remove("popup_visible");

        } else if (elemClasses.contains("goods__slider-toggle") && !elemClasses.contains("goods__slider-toggle_current")) {

            [].forEach.call(document.querySelectorAll(".goods__slider-toggle"), (el) => {
                el.classList.toggle("goods__slider-toggle_current");
            });
            [].forEach.call(document.querySelectorAll(".goods__slider"), (el) => {
                el.classList.toggle("goods__slider_visible");
            });

        } else if (elemClasses.contains("more-info__item")) {

            elem.parentElement.querySelector(".more-info__content").classList.toggle("more-info__content_visible");

        } else if (elemClasses.contains("colors-input")) {
            [].forEach.call(document.querySelectorAll('.colors-input'), (el) => {
                el.classList.remove("colors-input_current");
            });
            elemClasses.add("colors-input_current");
            companyName.style.color = elem.getElementsByTagName("INPUT")[0].value;
        } else if (elemClasses.contains("fonts-input")) {
            [].forEach.call(document.querySelectorAll('.fonts-input'), (el) => {
                el.classList.remove("fonts-input_current");
            });
            elemClasses.add("fonts-input_current");
            companyName.style.fontFamily = elem.getElementsByTagName("INPUT")[0].value;
        }
    });

    document.addEventListener("keyup", (e) => {
        if (e.target.classList.contains("product-card__input")) {
            let txtInput = e.target;
            let txtInputValue = txtInput.value;
            if (txtInputValue.length < 21) {
                document.querySelector(".popup__val-char").innerHTML = txtInputValue.length;
                companyName.innerHTML = txtInputValue;
            } else {
                alert("Max 20 caratteri");
            }
        }
    });
// });


