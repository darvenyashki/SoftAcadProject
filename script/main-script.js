//    JUMBOSLIDER        

var slideIndex = 1;

//To show first div
showDivs(slideIndex);

function currentSlide(n) {
    showDivs(slideIndex = n);
}

function plusDivs(n) {
    showDivs(slideIndex += n);
    console.log(1);
}

//SHOW ONLY SELECTED DIV
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("villa");
    var dots = document.getElementsByClassName("dot");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        dots[i].style.backgroundColor = "#ededed";
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].style.backgroundColor = "#707070";
}

// Auto change slider
var resetInt = setInterval(plusDivs, 5000, 1);


$(document).ready(function () {

    //Show-hide navs
    $('.villas-section').on({
        mouseenter: function () {
            $('.villa-nav, .show-prev, .show-next').fadeIn();
        },
        mouseleave: function () {
            $('.villa-nav, .show-prev, .show-next').fadeOut();
        }
    });

    // Reset slider interval on new div
    $('.dot, .show-prev, .show-next').click(function () {
        window.clearInterval(resetInt)
        setTimeout(function () {
            resetInt = setInterval(plusDivs, 5000, 1);
        });
    })

    //Pause slider interval on hover
    $('.villas-section, .show-prev, .show-next, .dot').on({
        mouseover: function () {
            if ($(window).width() < 480) {
                return;
            } else {
                window.clearInterval(resetInt);
            }

        },
        mouseleave: function () {
            if ($(window).width() < 480) {
                return;
            } else {
                setTimeout(function () {
                    resetInt = setInterval(plusDivs, 5000, 1);
                    console.log('mouseleave');
                });

            }

        }
    })
});
