    // Dropdown menu nav for Villas 
    $(document).ready(function () {
        $('#dropdown').hover(function () {
            $('#dropdown-content').stop(true).toggle(500);
        });

        //DROPDOWN FOR MOBILE
        $('.hamburger-btn').click(function () {
            $('.main-nav').slideToggle();
            console.log('clicked');
        });
    });
