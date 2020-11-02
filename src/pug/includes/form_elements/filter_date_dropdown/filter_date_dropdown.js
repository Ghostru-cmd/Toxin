$( document ).ready(function(){

	$year = new Date().getFullYear();
	$month = new Date().getMonth();
	$data = new Date().getDate();

	$(".filter_data_number").click(function(){ // задаем функцию при нажатиии на элемент с классом toggle
		$(".filter_dropdown_calendar").toggle();
		createCalendar(filter_date_calendar, $year, $month);
	})

	function formatDate(dd, mm) {

		if (dd < 10) dd = '0' + dd;

		mm = text_formatDate(mm)

		return dd + ' ' + mm;
	}

	$(".filter_data_number").text(formatDate($data, $month))

	appdate_cal();
	
	function createCalendar(elem, year, mon) {

		let d = new Date(year, mon);
		let past_mon = mon;
		let past_d = new Date(year, past_mon);
		let second_mon = mon;
		let second_d = new Date(year, second_mon);
		let table = '<table class="filter_date_calendar"><tbody class="c_week"><tr class="week"><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr><tr class="n_week">';
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

		elem.innerHTML = table;

		function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
			let day = date.getDay();
			if (day == 0) day = 7; // сделать воскресенье (0) последним днем
			return day - 1;
		}
	}

	$year = new Date().getFullYear();
	$month = new Date().getMonth();
	$data = new Date().getDate();

	function appdate_cal(){
		switch ($month) {
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
		
		$(".filter_date_dropdown_month").text($month_name + $year);
	}
	
	function text_formatDate(month){
		switch (month) {
			case 0:
				month = 'янв '
				break;

			case 1:
				month = 'фев '
				break;

			case 2:
				month = 'мар '
				break;

			case 3:
				month = 'апр '
				break;

			case 4:
				month = 'май '
				break;

			case 5:
				month = 'июнь '
				break;

			case 6:
				month = 'июль '
				break;

			case 7:
				month = 'авг '
				break;

			case 8:
				month = 'сен '
				break;

			case 9:
				month = 'окт '
				break;

			case 10:
				month = 'ноя '
				break;

			case 11:
				month = 'дек '
				break;
		}
		
		return month
	}

	$(".row_left").click(function(){
		if ($month != 0){
			$month = $month - 1;
		}else{
			$year = $year - 1;
			$month = 11;	
		}
		appdate_cal()
		createCalendar(filter_date_calendar, $year, $month);
		$children = $(".c_week").children('.n_week').length
		if ($children > 5) {
			$('.filter_dropdown_calendar').css("height","409px");
		}else{
			$('.filter_dropdown_calendar').css("height","369px");
		}
		$choosing = 0;	
	})

	$(".row_right").click(function(){
		if ($month != 11){
			$month = $month + 1;
		}else{
			$year = $year + 1;
			$month = 0;	
		}
		appdate_cal()
		createCalendar(filter_date_calendar, $year, $month);
		$children = $(".c_week").children('.n_week').length
		if ($children > 5) {
			$('.filter_dropdown_calendar').css("height","409px");
		}else{
			$('.filter_dropdown_calendar').css("height","369px");
		}
		$choosing = 0;
	})

	createCalendar(filter_date_calendar, $year, $month);
	$d = true
	$(document).on('click','.day', function(){
		$mm = new Date().getMonth();
		$yy = new Date().getFullYear();
		if ($(this).text() >= $data || $month > $mm || $year > $yy || $(this).hasClass('future')){
			$choosing = $( '.choosing' ).length;
			if ($choosing < 2){
				$(this).toggleClass('choosing');
 				if ($d == true){
					$dd1 = $(this).text();
					$d = false;
				}else{
					if ($('.choosing:first').hasClass('future')){
						$dd1_f = $('.choosing:last').text();
					}else{
						$dd1 = $('.choosing:first').text();
					}

					if ($('.choosing:first').hasClass('future')){
						$dd2_f = $('.choosing:last').text();
					}else{
						$dd2 = $('.choosing:last').text();
					}
				} 
			}
			if ($choosing == 2){
				$(this).removeClass('choosing');
			}

			$choosing = $('.choosing').length;

			if ($choosing != 0){
				$(".filter_date_dropdown_cancel").css("display", "block");
			}else{
				$(".filter_date_dropdown_cancel").css("display", "none");
			}

			if ($choosing == 1){
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
			}	
		} 
	})

	$('.choosing').click(function(){
		$(this).removeClass('choosing');
		$choosing -= 1;
	})

	$('.filter_date_dropdown_cancel').click(function(){
		$('.day').removeClass('choosing');
		$('.day').removeClass('choosen');
		$('.filter_date_dropdown_cancel').css("display","none");
		$('.filter_data_number').text(formatDate($data, $month,));
	})

	$('.filter_date_dropdown_apply').click(function(){
		$choosing = $( '.choosing' ).length;
		if ($choosing == 2){

			$month1 = $month;
			$month2 = $month;

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
				
			$('.filter_data_number').text(formatDate($dd1, $month1) + ' - ' + formatDate($dd2, $month2));
		}

		if ($choosing == 1) {

			$month1 = $month;

			if ($('.choosing:first').hasClass('future')){
				$month1++;
			}
			if ($('.choosing:first').hasClass('past')){
				$month1--;
			}

			$dd1 = $('.choosing').text();

			$('.filter_data_number').text(formatDate($dd1, $month1))
		}

		if ($choosing == 0) {
			$('.filter_data_number').text(formatDate($data, $month))
		}

		$(".filter_dropdown_calendar").toggle();
		
	})
});