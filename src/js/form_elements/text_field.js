$(document).ready(function(){
    $('.text_field').each(function(){
        name_text_field = $(this).children('.name_text_field').text();
        if (name_text_field == ''){
            $(this).css("height", "44px")
            $(this).children('.input_text_field').css("top", "0px")
        }
    });
});