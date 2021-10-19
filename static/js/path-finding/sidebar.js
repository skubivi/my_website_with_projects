var buttons = $('.header-btn');

var dropdownBtn = $('#dropdownMenu');

buttons.each(function(i) {
    $(this).click(function(e) {
        var classes = $(this).attr("class");
        index = classes.indexOf('btn-active');
        if (index === -1) {
            buttons.each(function(j) {
                $(this).attr('class', classes);
            });
            $(this).attr('class', classes + ' btn-active');
        }
        dropdownBtn.attr('class', function() {
            return 'header-btn btn btn-outline-dark shadow-none dropdown-toggle';
        });
        $('.dropdown-menu').attr('class', function() {
            return 'dropdown-menu';
        });
    });
});

var buttons2 = $('.sidebar-btn');

buttons2.each(function(i) {
    $(this).click(function(e) {
        var classes = $(this).attr("class");
        index = classes.indexOf('btn-active');
        if (index === -1) {
            buttons2.each(function(j) {
                $(this).attr('class', classes);
            });
            $(this).attr('class', classes + ' btn-active');
        }
        dropdownBtn.attr('class', function() {
            return 'header-btn btn btn-outline-dark shadow-none dropdown-toggle';
        });
        $('.dropdown-menu').attr('class', function() {
            return 'dropdown-menu';
        });
    });
});

$('#clear-btn').click(function() {
    buttons.each(function() {
        $(this).attr('class', 'header-btn btn btn-outline-dark shadow-none sidebar-inside');
    });
    dropdownBtn.attr('class', function() {
        return 'header-btn btn btn-outline-dark shadow-none dropdown-toggle';
    });
    $('.dropdown-menu').attr('class', function() {
        return 'dropdown-menu';
    });
});

dropdownBtn.click(function() {
    dropdownBtn.attr('class', function() {
        return 'header-btn btn btn-outline-dark shadow-none dropdown-toggle show';
    });
    $('.dropdown-menu').attr('class', function() {
        return 'dropdown-menu show';
    });
});