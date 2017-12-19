                
    

                $(document).ready(function () {
                    $('.slider-content').slick({
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true,
                        responsive: [
                            {
                                breakpoint: 769,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                    autoplay: true
                                }

                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    autoplay: true
                                }
                            }
                        ]
                    });
                });


                $(document).ready(function () {
                    $('.two-villas').slick({
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true,
                        centerMode: true,
                        responsive: [
                            {
                                breakpoint: 769,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                    centerMode: false,
                                    autoplay: true
                                }

                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    centerMode: false,
                                    autoplay: true
                                }
                            }
                        ]
                    });
                });

                $('.images').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    fade: true,
                    asNavFor: '.images-nav',
                    draggable: true
                });
                $('.images-nav').slick({
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    asNavFor: '.images',
                    centerMode: true,
                    focusOnSelect: true,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 1,
                                centerMode: true
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        }

                    ]
                });
