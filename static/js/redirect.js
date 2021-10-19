$('#button-elem').click(function(e) {
    e.preventDefault();

    $('.ajax').remove();
    $('.cssload-thecube').attr("class", function() {
        return "cssload-thecube"
    })

    setTimeout(function() {
        $(location).attr('href', "http://127.0.0.1:8000/charges");
    }, 2000)
});

$('#button-elem-ajax').click(function(e) {
    e.preventDefault();

    $('.ajax').remove();
    $('.cssload-thecube').attr("class", function() {
        return "cssload-thecube"
    })

    setTimeout(function() {
        $(location).attr('href', "http://127.0.0.1:8000/charges");
    }, 2000)
});

$('#button-elem-2').click(function(e) {
    e.preventDefault();

    $('.ajax').remove();
    $('.cssload-thecube').attr("class", function() {
        return "cssload-thecube"
    })

    setTimeout(function() {
        $(location).attr('href', "http://127.0.0.1:8000/path");
    }, 2000)
});

$('#button-elem-ajax-2').click(function(e) {
    e.preventDefault();

    $('.ajax').remove();
    $('.cssload-thecube').attr("class", function() {
        return "cssload-thecube"
    })

    setTimeout(function() {
        $(location).attr('href', "http://127.0.0.1:8000/path");
    }, 2000)
});