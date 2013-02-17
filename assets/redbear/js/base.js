$(document).ready(function(){

    var label = $('#small_label').html();

    $('#page_title').mouseover(function(){
        $('#small_label').html("Grrr!");
    });

    $('#page_title').mouseout(function(){
        $('#small_label').html(label);
    });
});