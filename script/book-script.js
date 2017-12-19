        // TOOLTIP 

        $(document).ready(function () {
            $('.tooltip').tooltipster({
                side: 'left',
                trigger: "custom",
                triggerOpen: {
                    click: true, // For mouse
                    tap: true,
                    focus: true // For touch device
                },
                triggerClose: {
                    click: true, // For mouse
                    tap: true // For touch device
                }
            });
        });


        // MODAL

        var modal = $('#myModal');
        var btn = $("#myBtn");
        var span = $(".close");

        btn.click(function () {
            modal.fadeIn();
        });

        span.click(function () {
            modal.fadeOut();
        });

        // When the user clicks anywhere outside of the modal, close it
        $("body").click(function (event) {
            if (event.target.id == "myModal") {
                modal.fadeOut();
            }
        });

        // END OF MODAL

        //DECLARE VARIABLES
        var userTitle,
            userFirstName,
            userLastName,
            userEmail,
            userCardNumber,
            userCardHolderName,
            userSecurityCode,
            userExpDate,
            userExpYear,
            userAgreed,
            depDate,
            arrDate,
            days,
            c = 24 * 60 * 60 * 1000,
            price,
            villaChecked,
            arrDateFilled,
            depDateFilled;


        // CHECK IF OTHER FIELDS ARE FILLED AND SHOW NIGHTS / PRICE
        function appendToForm(a, b) {
            if (a == "" || a == undefined || a == null || b == "" || b == undefined || b == null) {
                return;
            } else {
                $('#numOfDays').text(days);
                $('#chosenVilla').text($('input[name=choose-your-villa]:checked').val());
                $('#totalPrice').text(days * price + "$");
                $('.stay-price').fadeIn();
            }
        }


        // CHANGE PRICE FOR DIFFERENT VILLAS
        $('input[name=choose-your-villa]').click(function () {
            villaChecked = $('input[name=choose-your-villa]:checked').val();
            switch ($('input[name=choose-your-villa]:checked').val()) {
                case 'Royal Spa Pool Villa':
                    price = 2350
                    break;
                case 'Presidential Spa Pool Villa':
                    price = 2200
                    break;
                case 'Beach View Pool Villa':
                    price = 2095
                    break;
            };
            arrDateFilled = $('#from').val();
            depDateFilled = $('#to').val();
            appendToForm(arrDateFilled, depDateFilled);
        })


        // DATEPICKER 

        $(function () {
            var dateFormat = "dd/mm/yy",
                from = $("#from")
                .datepicker({
                    minDate: 0,
                    dateFormat: "dd/mm/yy"
                })
                .on("change", function () {
                    to.datepicker("option", "minDate", getDate(this));
                    arrDateFilled = $('#from').val();
                    console.log(arrDateFilled);
                      arrDate = getDate(this).getTime();
                    //CHANGE CLASS IF DATE IS FILLED
                    if ($(this).val() == '') {
                        $(this).next().removeClass('active filled');
                    } else {
                        $(this).next().addClass('filled');
                    };

                    // COUNT DAYS BETWEEN SELECTED DATES
                    if ($('#to').val() == "" || $('#to').val() == null) {
                        return;
                    } else {
                        days = Math.round(Math.abs((arrDate - depDate) / (c)));
                        console.log(days);
                    }

                    appendToForm(villaChecked, depDateFilled);
                }),
                to = $("#to").
            datepicker({
                    minDate: "+1d",
                    dateFormat: "dd/mm/yy"
                })
                .on("change", function () {
                    from.datepicker("option", "maxDate", getDate(this));
                 
                    depDateFilled = $(this).val();
                    console.log(depDateFilled);
                       depDate = getDate(this).getTime();
                    //CHANGE CLASS IF DATE IS FILLED
                    if ($(this).val() == '') {
                        $(this).next().removeClass('active filled');

                    } else {
                        $(this).next().addClass('filled');
                    };

                    // COUNT DAYS BETWEEN SELECTED DATES
                    if ($('#from').val() == "" || $('#to').val() == null) {
                        return;
                    } else {
                        days = Math.round(Math.abs((arrDate - depDate) / (c)));

                    }
                    appendToForm(villaChecked, arrDateFilled);

                });

            //

            //GET DATE
            function getDate(element) {
                var date;
                try {
                    date = $.datepicker.parseDate(dateFormat, element.value);
                } catch (error) {
                    date = null;
                }

                return date;
            }

        });

        // FORM INPUT SCRIPT - ADD/REMOVE CLASSES
        $(document).ready(function () {
            $('.text-entry').each(function () {
                $(this).focus(function () {
                    $(this).next().addClass('active');
                });
                $(this).click(function () {
                    $(this).next().addClass('active');
                });
                var datePicker = $('#ui-datepicker-div');
                var isMouseOnDate = false;
                datePicker.mouseenter(function () {
                    isMouseOnDate = true;

                });
                datePicker.mouseleave(function () {
                    isMouseOnDate = false;


                });
                if ($(window).width() < 480) {
                    $(this).on('touchend', function () {
                        isMouseOnDate = false;

                    })
                }
                datePicker.click(function () {
                    isClicked = true;
                })
                $(this).focusout(function () {
                    if (!isMouseOnDate) {
                        if ($(this).val() == '') {
                            $(this).next().removeClass('active filled');

                        } else {
                            $(this).next().addClass('filled');
                        };
                    };
                });
            });
        });



        var x = $(".form-section");
        var y = $('.form-btn');
        var validGood;
        var slideIndex = 1;
        var i, currIndex;

        //CHANGE BOOKING

        function showDivs(n) {
            if (n > x.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = x.length;
            };
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
                y[i].style.backgroundColor = '#9DBBDF';
                y[i].style.color = '#fff';
            }
            currIndex = slideIndex - 1;
            x[slideIndex - 1].style.display = "block";
            x[slideIndex - 1].focus();
            y[slideIndex - 1].style.backgroundColor = "#fff";
            y[slideIndex - 1].style.color = "#3B5C8A"
        }
        showDivs(slideIndex);

        function plusDivs(n) {
            showDivs(slideIndex += n);
        }

        //VALIDATE BOOKING DETAILS INPUTS
        function checkDates() {
            if (!villaChecked) {
                alert('Please choose a Villa');
                validGood = false;
            } else if (arrDateFilled == "" || arrDateFilled == null) {
                alert('Please enter your arrival date');
                $('#from').focus();
                validGood = false;
            } else if (depDateFilled == "" || depDateFilled == null) {
                alert('Please enter your departure date');
                $('#to').focus();
                validGood = false;
            } else if (days == 0) {
                alert('You must select at least 1 night');
                //  $('#numOfDays').css('border', '3px solid red');
                validGood = false;
            } else {
                validGood = true;
            }
        }

        //VALIDATE PERSONAL INFO INPUTS
        function personalInfoVal() {
            if (userFirstName == "") {
                alert('Please enter your first name');
                $('#fName').focus();
                validGood = false;
            } else if (userLastName == "") {
                alert('Please enter your last name');
                $('#lName').focus();
                validGood = false;
            } else if (userEmail == "" || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(bookNowForm.eMail.value) == false) {
                alert('Please enter valid e-mail');
                $('#eMail').focus();
                validGood = false;
            } else if ($('#num').val() == "" || /^\d+$/.test(bookNowForm.num.value) == false) {
                alert('Please enter a valid phone number');
                $('#num').focus();
                validGood = false;
            } else {
                validGood = true;
            }
        };

        //VALIDATE PAYMENT INPUTS
        function paymentVal() {
            userCardNumber = $('#cardNumber').val();
            userCardHolderName = $('#cardHolder').val();
            userSecurityCode = $('#cardCode').val();
            userExpDate = $('#mmCard').val();
            userExpYear = $('#yyCard').val();
            userAgreed = $('#readTermsAndCon').prop("checked");
            if (userCardNumber == '' || /^[0-9]{16}$/.test(bookNowForm.cardNumber.value) == false) {
                alert('Please enter valid card number');
                $('#cardNumber').focus();
                validGood = false;
            } else if (userCardHolderName == '' || /^[a-zA-Z]+\s[a-zA-Z]+\s?$/.test(bookNowForm.cardHolder.value) == false) {
                alert('Please enter valid card holder name');
                $('#cardHolder').focus();
                validGood = false;
            } else if (userSecurityCode.length != 3 || /^\d+$/.test(bookNowForm.cardCode.value) == false) {
                alert('Please enter a valid security code');
                $('#cardCode').focus();
                validGood = false;
            } else if (userExpDate.length != 2 || /^\d+$/.test(bookNowForm.mmCard.value) == false) {
                alert('Please enter a valid Expiration Date code');
                $('#mmCard').focus();
                validGood = false;
            } else if (userExpYear.length != 2 || /^\d+$/.test(bookNowForm.yyCard.value) == false) {
                alert('Please enter a valid Expiration Year');
                $('#yyCard').focus();
                validGood = false;
            } else if (!userAgreed) {
                alert('You must read and agree with Terms and Conditions.');
                validGood = false;
            } else {
                validGood = true;
            }
        }

        //SHOW USER INFO ON THIRD DIV
        function appendUserInfo() {
            userTitle = $('input[name=titles]:checked').val();
            userFirstName = $('#fName').val();
            userLastName = $('#lName').val();
            userEmail = $('#eMail').val();
            $('#bdTitle').text(userTitle);
            $('#bdFirstName').text(userFirstName);
            $('#bdLastName').text(userLastName);
            $('#bdEmail').text(userEmail);
            $('#bdVilla').text($('input[name=choose-your-villa]:checked').val());
            $('#bdArrDate').text(arrDateFilled);
            $('#bdDepDate').text(depDateFilled);
            $('#priceTotal').text(days * price + "$");
            $('#nights').text(days + " nights");
        }



        $('#next-to-second').click(function () {
            checkDates();
            if (validGood) {
                plusDivs(1);
                $('#halfPrice').text((days * price) / 2 + "$");
                $('#fName').focus();
            }
        });

        $('#next-to-third').click(function () {
            appendUserInfo();
            personalInfoVal();
            if (validGood) {
                plusDivs(1);
            }
            // $('#fName').focus();
        })

        //SUBMIT FORM

        $('#bookNowForm').submit(function () {
            paymentVal();
            if (validGood) {
                alert("Your reservation was successful! You'll be now redirected to our home page");
                window.location.href = "index.html";
            }
            return false;
        })
