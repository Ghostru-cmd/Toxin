$( document ).ready(function(){
	$( ".text_dropdown_guest" ).click(function(){ // задаем функцию при нажатиии на элемент с классом toggle
		$( ".dropdown_content_dropdown_guest" ).toggle();
	})
	$conteiner1 = parseInt($(".count_1").text());
	$conteiner2 = parseInt($(".count_2").text());
	$conteiner3 = parseInt($(".count_3").text());
	$text = $(".text_in_dropdown_guest").text();
	function count_guest(){
		if ($conteiner1 == 0) {$(".minus_1").prop('disabled', true)}else{$(".minus_1").prop('disabled', false)}
		if ($conteiner2 == 0) {$(".minus_2").prop('disabled', true)}else{$(".minus_2").prop('disabled', false)}
		if ($conteiner3 == 0) {$(".minus_3").prop('disabled', true)}else{$(".minus_3").prop('disabled', false)}
		$conteiner = $conteiner1 + $conteiner2 + $conteiner3;
		if ($conteiner == 1) {
			$(".text_in_dropdown_guest").text($conteiner + ' гость');
		}	
		if (1 < $conteiner && $conteiner < 5) {
			$(".text_in_dropdown_guest").text($conteiner + ' гостя');
		}
		if ($conteiner >= 5 || $conteiner == 0) {
			$(".text_in_dropdown_guest").text($conteiner + ' гостей');
		}
		$(".cancel_guest").css("display", "block");

	}
	$(".minus_1").click(function(){
		$conteiner1 = parseInt($(".count_1").text());
		$conteiner1 = $conteiner1 - 1;
		$(".count_1").text($conteiner1);
		count_guest();
	})
	$(".pls_1").click(function(){
		$conteiner1 = parseInt($(".count_1").text());
		$conteiner1 = $conteiner1 + 1;
		$(".count_1").text($conteiner1);
		count_guest();
	})
	$(".minus_2").click(function(){
		$conteiner2 = parseInt($(".count_2").text());
		$conteiner2 = $conteiner2 - 1;
		$(".count_2").text($conteiner2);
		count_guest();
	})
	$(".pls_2").click(function(){
		$conteiner2 = parseInt($(".count_2").text());
		$conteiner2 = $conteiner2 + 1;
		$(".count_2").text($conteiner2);
		count_guest();
	})
	$(".minus_3").click(function(){
		$conteiner3 = parseInt($(".count_3").text());
		$conteiner3 = $conteiner3 - 1;
		$(".count_3").text($conteiner3);
		count_guest();
	})
	$(".pls_3").click(function(){
		$conteiner3 = parseInt($(".count_3").text());
		$conteiner3 = $conteiner3 + 1;
		$(".count_3").text($conteiner3);
		count_guest();
	})
	$(".cancel_guest").click(function(){
		$(".count_1").text(0);
		$(".count_2").text(0);
		$(".count_3").text(0);
		$conteiner1 = 0;
		$conteiner2 = 0;
		$conteiner3 = 0;
		$(".minus_1").prop('disabled', true);
		$(".minus_2").prop('disabled', true);
		$(".minusus_3").prop('disabled', true);
		$(".text_in_dropdown_guest").text($text);
		$(".cancel_guest").css("display", "none");
	})
	$(".apply_guest").click(function(){
		$( ".dropdown_content_dropdown_guest" ).toggle();
	})
});