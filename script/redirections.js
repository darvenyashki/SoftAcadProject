             // REDDIRECT TO ANOTHER PAGE ON CLICK

             $('.for-whyVilla').click(function () {
                 window.location.href = "whyVilla.html";
             });
             $('.for-elafonisiBeach').click(function () {
                 window.location.href = "elafonisiBeach.html";
             });
             $('.for-crete').click(function () {
                 window.location.href = "visitCrete.html";
             });
             $('.for-cretanCuisine').click(function () {
                 window.location.href = "cretanCuisine.html";
             });
             $('.for-royal').click(function () {
                 window.location.href = "royal.html";
             });
             $('.for-presidential').click(function () {
                 window.location.href = "presidential.html";
             });
             $('.for-beach').click(function () {
                 window.location.href = "beach.html";
             });
             $('.book-now-btn').click(function () {
                 window.location.href = "bookNow.html";
             });
             $('.page-back').click(function () {
                 window.location.href = "index.html#interesting";
             });

             //SHOW / HIDE TOP ARROW
             $(window).scroll(function () {
                 var y = $(this).scrollTop();
                 if (y > 100) {
                     $('.page-top').fadeIn();
                 } else {
                     $('.page-top').fadeOut();
                 }
             });

            //SCROLL TOP ON CLICK TOP ARROW
             $('.page-top').click(function () {
                 $('html,body').animate({
                     scrollTop: 0
                 }, 800);
                 return false;
             });
            
        //SHOW / HIDE BACK ARROW
             var bodyHeight = $(document).height();
             $(document).scroll(function () {
                 if ($(window).scrollTop() + $(window).height() > bodyHeight - 100) {
                     $('.page-back').fadeIn();
                 } else {
                     $('.page-back').fadeOut();
                 }
             });
