$(document).ready(function () {

    var label = $('#small_label').html();

    $('#page_title').mouseover(function () {
        $('#small_label').html("Grrr!");
    });

    $('#page_title').mouseout(function () {
        $('#small_label').html(label);
    });

    var footer_label = $('#footer_small_label').html();

    $('#footer_title').mouseover(function () {
        $('#footer_small_label').html("Grrr!");
    });

    $('#footer_title').mouseout(function () {
        $('#footer_small_label').html(footer_label);
    });
});