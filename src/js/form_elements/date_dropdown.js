$( document ).ready(function (){

	$year = new Date().getFullYear();
	$month = new Date().getMonth();
	$data = new Date().getDate();
	$this_calendar = $('.dropdown_calendar');

	$(".data_number").text(formatDate($data, $month + 1, $year))

	$(".data_dropdown").click(function(){ // задаем функцию при нажатиии на элемент с классом toggle
		$('.dropdown_calendar').css("display", "none")
		$(this).siblings('.dropdown_calendar').toggle()//css("display", "block")
		$calendar = $(this).siblings('.dropdown_calendar').children('#calendar')
		$data_number = $(this).children(".data_number").text();
		$year_dropdown = parseInt($data_number.slice(6, 10));
		$for_row_data = data_dropdown();
		$for_row_month = month_dropdown();
		$for_row_year = $year_dropdown
		createCalendar($calendar, $year_dropdown, $month_dropdown)

		if ($data_dropdown !== $data || $month_dropdown > $month + 1){
			$(this).siblings('.dropdown_calendar').find('.day:not(.past, .future)').each(function(){
				if ($(this).text() == $data_dropdown){
					$(this).toggleClass('choosing');
				}
			})
		}

		appdate_cal($(this).siblings('.dropdown_calendar').children('.month_name_data_dropdown'))

		$this_calendar = $(this).siblings('.dropdown_calendar')
		$this_data_number = $(this).children('.data_number')

		$children = $(this).siblings('.dropdown_calendar').find('.n_week').length
		if ($children > 5) {
			$(this).siblings('.dropdown_calendar').css("height","409px");
		}else{
			$(this).siblings('.dropdown_calendar').css("height","369px");
		}
	})
	
	function data_dropdown(){
		if ($data_number[0]=='0'){
			return $data_dropdown = parseInt($data_number[1])
		}else{
			return $data_dropdown = parseInt(($data_number[0] + $data_number[1]))
		} 
	};
	function month_dropdown(){
		if ($data_number[3]=='0'){
			return $month_dropdown = parseInt($data_number[4] - 1)
		}else{
			return $month_dropdown = parseInt(($data_number[3] + ($data_number[4] - 1)))
		} 
	};

	$this_calendar.children('.row_left_calendar').on('click',function(){
		if ($month_dropdown != 0){
			$month_dropdown = $month_dropdown - 1;
		}else{
			$year_dropdown = $year_dropdown - 1;
			$month_dropdown = 11;	
		}
		$row = $(this).siblings(".month_name_data_dropdown")
		
		createCalendar($calendar, $year_dropdown, $month_dropdown);
		if ($month_dropdown == $for_row_month && $year_dropdown == $for_row_year){
			$(this).siblings('#calendar').find('.day:not(.past, .future)').each(function(){
				if ($(this).text() == $data_dropdown){
					$(this).toggleClass('choosing');
				}
			})
		}
		appdate_cal($row)

		$children = $(this).parent().children('#calendar').find('.n_week').length
		if ($children > 5) {
			$(this).parent().css("height","409px");
		}else{
			$(this).parent().css("height","369px");
		}
		$choosing = 0
	})

//----------------------------------------------------------------------------------------

	$this_calendar.children('.row_right_calendar').on('click',function(){
		if ($month_dropdown != 11){
			$month_dropdown = $month_dropdown + 1;
		}else{
			$year_dropdown = $year_dropdown + 1;
			$month_dropdown = 0;	
		}
		$row = $(this).siblings(".month_name_data_dropdown")
		
		createCalendar($calendar, $year_dropdown, $month_dropdown);
		if ($month_dropdown == $for_row_month && $year_dropdown == $for_row_year){
			$(this).siblings('#calendar').find('.day:not(.past, .future)').each(function(){
				if ($(this).text() == $data_dropdown){
					$(this).toggleClass('choosing');
				}
			})
		}
		appdate_cal($row)
		
		$children = $(this).parent().children('#calendar').find('.n_week').length
		if ($children > 5) {
			$(this).parent().css("height","409px");
		}else{
			$(this).parent().css("height","369px");
		}
		$choosing = 0
	})

	function formatDate(dd, mm, yy) {

		if (dd < 10) dd = '0' + dd;

		if (mm < 10) mm = '0' + mm;

		return dd + '.' + mm + '.' + yy;
	}
	
	function createCalendar(elem, year, mon) {

		elem.children('.calendar').remove()

		let d = new Date(year, mon);
		let past_mon = mon;
		let past_d = new Date(year, past_mon);
		let second_mon = mon;
		let second_d = new Date(year, second_mon);
		let table = '<table class="calendar"><tbody class="c_week"><tr class="week"><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr><tr class="n_week">';
		function f(x) {
			x = x + 1;
			return 28 + (x + Math.floor(x/8)) % 2 + 2 % x + 2 * Math.floor(1/x); 
			}
		// пробелы для первого ряда
		// с понедельника до первого дня месяца
		// * * * 1  2  3  4
		let z = 1;
		for (let i = 0; i < getDay(d); i++) {
			y = getDay(d) + z;
			z = z - 1;
			past_d.setDate(f(past_mon) - y);
			table += '<td class="day past">' + past_d.getDate() + '</td>';
		}

		// <td> ячейки календаря с датами
		while (d.getMonth() == mon) {
			if (new Date().getDate() == d.getDate()){
				if (new Date().getMonth() == d.getMonth()) {
					table += '<td class="day today">' + d.getDate() + '</td>';
				}else{
					table += '<td class="day">' + d.getDate() + '</td>';
				}
			}else{
				table += '<td class="day">' + d.getDate() + '</td>';
			}
			if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
				if (d.getDate() != 31){
					table += '</tr><tr class="n_week">';
				}
			}

			d.setDate(d.getDate() + 1);
		}

		// добить таблицу пустыми ячейками, если нужно
		// 29 30 31 * * * *
		if (getDay(d) != 0) {
			for (let i = getDay(d); i < 7; i++) {
				table += '<td class="day future">' + second_d.getDate() + '</td>';
				second_d.setDate(second_d.getDate() + 1);
			}
		}

		// закрыть таблицу
		table += '</tr></tbody></table>';

		elem.append(table);

		function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
			let day = date.getDay();
			if (day == 0) day = 7; // сделать воскресенье (0) последним днем
			return day - 1;
		}
	}

	function appdate_cal(row){
		switch ($month_dropdown) {
			case 0:
				$month_name = 'Январь '
				break;

			case 1:
				$month_name = 'Февраль '
				break;

			case 2:
				$month_name = 'Март '
				break;

			case 3:
				$month_name = 'Апрель '
				break;

			case 4:
				$month_name = 'Май '
				break;

			case 5:
				$month_name = 'Июнь '
				break;

			case 6:
				$month_name = 'Июль '
				break;

			case 7:
				$month_name = 'Август '
				break;

			case 8:
				$month_name = 'Сентябрь '
				break;

			case 9:
				$month_name = 'Октябрь '
				break;

			case 10:
				$month_name = 'Ноябрь '
				break;

			case 11:
				$month_name = 'Декабрь '
				break;
		}
		
		row.text($month_name + $year_dropdown);
	}

	$('.dropdown_calendar').on('click','.day', function(){
		$mm = new Date().getMonth();
		$yy = new Date().getFullYear();
		if ($(this).hasClass('future') || $(this).text() >= $data && $month_dropdown == $mm || $month_dropdown > $mm || $year_dropdown > $yy){
			$choosing = $( '.choosing' ).length;
			if ($choosing >= 1){
				$('.day').removeClass('choosing');
			}

			$(this).toggleClass('choosing');

			$choosing = $('.choosing').length;

			if ($choosing != 0){
				$(".cancel_data_dropdown").css("display", "block");
			}else{
				$(".cancel_data_dropdown").css("display", "none");
			}
			$data_dropdown = $(this).text()
			/*
			if ($choosing == 1){											// только для двух дат
				$(".choosing").removeClass("choosing_f");
				$(".choosing").removeClass("choosing_l");
			}

			if ($choosing == 2){

				$(".choosing:first").addClass("choosing_f");
				$(".choosing:last").addClass("choosing_l");

				$i = 0;
				$('.day').each(function() {
					$i++;
					if ($(this).hasClass("choosing_f")){
						$('.day').each(function(index){					
							if ($(this).hasClass("choosing_l")){
								return false;
							}
							if ($i <= index){
								if (index != 0){
									$(this).addClass('choosen');
								}
							}
						})
					}	
				})
			}
			if($( '.choosing' ).length != 2){
				$(".day").removeClass("choosing_f");
				$(".day").removeClass("choosing_l");
				$('.day').removeClass('choosen');
			}*/	
		} 
	})

	$this_calendar.find('.choosing').click(function(){
		$(this).removeClass('choosing');
		$choosing -= 1;
	})

	$this_calendar.find('.cancel_data_dropdown').click(function(){
		$('.day').removeClass('choosing');
//		$('.day').removeClass('choosen');				// только для двух дат
		$('.cancel_data_dropdown').css("display","none");
		$('.data_number').text(formatDate($data, $month + 1, $year));
	})

	$this_calendar.find('.apply_data_dropdown').click(function(){

		$month1 = $month_dropdown;
		$month2 = $month_dropdown;

		if ($('.choosing:first').hasClass('future')){
			$month1++;
		}
		if ($('.choosing:last').hasClass('future')){
			$month2++;
		}
		if ($('.choosing:first').hasClass('past')){
			$month1--;
		}
		if ($('.choosing:last').hasClass('past')){
			$month2--;
		}

		$dd1 = $('.choosing:first').text();
		$dd2 = $('.choosing:last').text();
		if ($dd1 == 0){
			$month1 = new Date().getMonth();
			$dd1 = new Date().getDate();
		}
			
		$this_data_number.text(formatDate($dd1, $month1 + 1, $year_dropdown));// + ' - ' + formatDate($dd2, $month2, $year));	// только для двух дат

		$this_calendar.toggle();

	})
});