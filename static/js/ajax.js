$('#button1').click(function(e) {
    e.preventDefault();

    $('.ajax').remove();
    $('.cssload-thecube').attr("class", function() {
        return "cssload-thecube"
    })

    $.ajax({
        method: "GET",
        url: "http://127.0.0.1:8000/general",
        dataType: "html",
        success: function(data) {
            setTimeout(function() {
                $('.ajax').remove();
                $('.cssload-thecube').attr("class", function() {
                    return "cssload-thecube hidden"
                })
                $('.main').append(data)
            }, 2000)
        },
        error: function(er) {
            console.log(er);
        }
    });
})

$('#button2').click(function(e) {
    e.preventDefault();

    $('.ajax').remove();
    $('.cssload-thecube').attr("class", function() {
        return "cssload-thecube"
    })
})


$('.dropdown-item').each(function() {
    $(this).click(function(e) {
        e.preventDefault();

        $('.ajax').remove();
        $('.cssload-thecube').attr("class", function() {
            return "cssload-thecube"
        })
    })
});