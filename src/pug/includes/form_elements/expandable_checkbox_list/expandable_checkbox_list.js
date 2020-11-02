$(document).ready(function(){
    $expandable_checkbox_list_hide = true
    $( ".expandable_checkbox_list_header" ).click(function(){

	    $( ".expandable_checkbox_list_checkboxs" ).animate({
	      height: [ "toggle", "swing" ]
        }, 1000, "linear")
        

        if ($expandable_checkbox_list_hide == true){
            $(this).children('.material-icons_expandable_checkbox_list').addClass('rotate180')

            $(this).parent('.expandable_checkbox_list').animate({
                height: '+=172px'
            }, 1000, "linear", function() {
                $expandable_checkbox_list_hide = false
            })
        }else{
            $(this).children('.material-icons_expandable_checkbox_list').removeClass('rotate180')

            $(this).parent('.expandable_checkbox_list').animate({
                height: '-=172px'
            }, 1000, "linear", function() {
                $expandable_checkbox_list_hide = true
            })
        }
	  });
});