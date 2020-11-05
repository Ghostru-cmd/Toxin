$( document ).ready(function(){
	$( ".text_dropdown.dropdown_comfort" ).click(function(){
		$( ".dropdown_content.dropdown_comfort" ).toggle();
	})
	$conteiner1 = parseInt($(".counter_1").text());
	$conteiner2 = parseInt($(".counter_2").text());
	$conteiner3 = parseInt($(".counter_3").text());
	$path_one = '2 спальни';
	$path_two = ', 2 кровати';
	$path_three = '';
	function count_bedroom(){
		if ($conteiner1 == 0) {$(".min_1").prop('disabled', true)}else{$(".min_1").prop('disabled', false)}
		if ($conteiner1 == 0 || $conteiner1 >=5) {
			$path_one = $conteiner1 + ' спален';
		}
		if ($conteiner1 == 1) {
			$path_one = $conteiner1 + ' спальня';
		}
		if ($conteiner1 > 1 && $conteiner1 < 5) {
			$path_one = $conteiner1 + ' спальни';
		}
		$(".text").text($path_one + $path_two + $path_three);
	}
	function count_bed(){
		if ($conteiner2 == 0) {$(".min_2").prop('disabled', true)}else{$(".min_2").prop('disabled', false)}
		if ($conteiner2 == 0 || $conteiner2 >=5) {
			$path_two = ', ' + $conteiner2 + ' кроватей';
		}
		if ($conteiner2 == 1) {
			$path_two = ', ' + $conteiner2 + ' кровать';
		}
		if ($conteiner2 > 1 && $conteiner2 < 5) {
			$path_two = ', ' + $conteiner2 + ' кровати';
		}
		$(".text").text($path_one + $path_two + $path_three);
	}
	function count_bathroom(){
		if ($conteiner3 == 0) {$(".min_3").prop('disabled', true)}else{$(".min_3").prop('disabled', false)}
		if ($conteiner3 == 0 || $conteiner3 >=5) {
			$path_three = ', ' + $conteiner3 + ' ванных';
		}
		if ($conteiner3 == 1) {
			$path_three = ', ' + $conteiner3 + ' ванная';
		}
		if ($conteiner3 > 1 && $conteiner3 < 5) {
			$path_three = ', ' + $conteiner3 + ' ванные';
		}
		$(".text").text($path_one + $path_two + $path_three);
	}
	$(".min_1").click(function(){
		$conteiner1 = parseInt($(".counter_1").text());
		$conteiner1 = $conteiner1 - 1;
		$(".counter_1").text($conteiner1);
		count_bedroom();
	})
	$(".plus_1").click(function(){
		$conteiner1 = parseInt($(".counter_1").text());
		$conteiner1 = $conteiner1 + 1;
		$(".counter_1").text($conteiner1);
		count_bedroom();
	})
	$(".min_2").click(function(){
		$conteiner2 = parseInt($(".counter_2").text());
		$conteiner2 = $conteiner2 - 1;
		$(".counter_2").text($conteiner2);
		count_bed()
	})
	$(".plus_2").click(function(){
		$conteiner2 = parseInt($(".counter_2").text());
		$conteiner2 = $conteiner2 + 1;
		$(".counter_2").text($conteiner2);
		count_bed()
	})
	$(".min_3").click(function(){
		$conteiner3 = parseInt($(".counter_3").text());
		$conteiner3 = $conteiner3 - 1;
		$(".counter_3").text($conteiner3);
		count_bathroom();
	})
	$(".plus_3").click(function(){
		$conteiner3 = parseInt($(".counter_3").text());
		$conteiner3 = $conteiner3 + 1;
		$(".counter_3").text($conteiner3);
		count_bathroom();
	})
});