        $(document).ready(function() {
            $('.text-entry').each(function() {
                $(this).focus(function() {
                    $(this).next().addClass('active');
                });
                $(this).click(function() {
                    $(this).next().addClass('active');
                });
                $(this).focusout(function() {

                    if ($(this).val() == '') {
                        $(this).next().removeClass('active filled');
                        console.log('empty');
                    } else {
                        $(this).next().addClass('filled');
                        console.log('filled');
                    };
                });
            });
        });