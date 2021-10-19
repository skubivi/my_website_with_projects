var $btn1 = $('#button1');
var $btn2 = $('#button2');
var $btn3 = $('#dropdownMenu');

var $line

var $body = $('.header');

var btn1Pos = $btn1.offset();
var btn1Top = btn1Pos.top;
var btn1Left = btn1Pos.left;
var btn1Height = $btn1.height();
var btn1Width = $btn1.width();

var btn2Pos = $btn2.offset();
var btn2Top = btn2Pos.top;
var btn2Left = btn2Pos.left;
var btn2Height = $btn2.height();
var btn2Width = $btn2.width();

var btn3Pos = $btn3.offset();
var btn3Top = btn3Pos.top;
var btn3Left = btn3Pos.left;
var btn3Height = $btn3.height();
var btn3Width = $btn3.width();

var btn = 'btn1'

function createLine() {
    return $(
        '<hr>', {
            'class': 'black-line'
        }
    )
}

function clickAnimate(t) {
    if (btn == 'btn1') {
        btn1Pos = $btn1.offset();
        btn1Top = btn1Pos.top;
        btn1Left = btn1Pos.left;
        btn1Height = $btn1.height();
        btn1Width = $btn1.width();
        $line.animate({
            left: btn1Left,
            top: btn1Top + btn1Height + 10,
            width: btn1Width + 25
        }, t)
    } else if (btn == 'btn2') {
        btn2Pos = $btn2.offset();
        btn2Top = btn2Pos.top;
        btn2Left = btn2Pos.left;
        btn2Height = $btn2.height();
        btn2Width = $btn2.width();
        $line.animate({
            left: btn2Left,
            top: btn2Top + btn2Height + 10,
            width: btn2Width + 25
        }, t)
    } else {
        btn3Pos = $btn3.offset();
        btn3Top = btn3Pos.top;
        btn3Left = btn3Pos.left;
        btn3Height = $btn3.height();
        btn3Width = $btn3.width();
        $line.animate({
            left: btn3Left,
            top: btn3Top + btn3Height + 10,
            width: btn3Width + 25
        }, t)
    }
}

var $line
$(document).ready(function() {
    $body.prepend(createLine());
    $line = $('.black-line')
    $line.css({
        left: btn1Left,
        top: btn1Top + btn1Height + 10,
        width: btn1Width + 25,
    })
});

$btn1.bind('click', function(e) {
    btn = 'btn1';
    clickAnimate(500)
});

$btn2.bind('click', function(e) {
    btn = 'btn2';
    clickAnimate(500)
});

$('.dropdown-item').each(function() {
    $(this).click(function(e) {
        btn = 'btn3';
        clickAnimate(500);
    })
});

$(window).resize(function() { clickAnimate(0) });