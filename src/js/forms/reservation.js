$(document).ready(function(){
    $('.apply_data_dropdown').click(function(){
        let text_date_dropdown1 = document.querySelector('.date_comein').querySelector('.date_dropdown').querySelector('.data_dropdown').querySelector('.data_number').textContent
        let text_date_dropdown2 = document.querySelector('.date_comeout').querySelector('.date_dropdown').querySelector('.data_dropdown').querySelector('.data_number').textContent
        let data_date_dropdown1 = parseInt(text_date_dropdown1.slice(0, 2))
        let data_date_dropdown2 = parseInt(text_date_dropdown2.slice(0, 2))
        let month_date_dropdown1 = parseInt(text_date_dropdown1.slice(4, 6))
        let month_date_dropdown2 = parseInt(text_date_dropdown2.slice(4, 6))
        let year_date_dropdown1 = parseInt(text_date_dropdown1.slice(7, 11))
        let year_date_dropdown2 = parseInt(text_date_dropdown2.slice(7, 11))
        let total_day = 0
        if (text_date_dropdown1 !== text_date_dropdown2){
            if (data_date_dropdown1 > data_date_dropdown2 && month_date_dropdown1 >= month_date_dropdown2 && year_date_dropdown1 >= year_date_dropdown2 || month_date_dropdown1 > month_date_dropdown2 && year_date_dropdown1 >= year_date_dropdown2 || year_date_dropdown1 > year_date_dropdown2){
                document.querySelector('.date_comein').querySelector('.date_dropdown').querySelector('.data_dropdown').querySelector('.data_number').textContent = text_date_dropdown2
                document.querySelector('.date_comeout').querySelector('.date_dropdown').querySelector('.data_dropdown').querySelector('.data_number').textContent = text_date_dropdown1
                let temp
                temp = text_date_dropdown1
                text_date_dropdown1 = text_date_dropdown2
                text_date_dropdown1 = temp
            }
        }
        if (month_date_dropdown1 == month_date_dropdown2){
            total_day = (data_date_dropdown2 - data_date_dropdown1)
        }
        number_cost = $('.reservation').children('.numbers').children('.numbers_cost').text()
        $('.reservation').children('.cost_count').children('.cost_count_count').text(number_cost + ' x ' + total_day + ' суток')

        let number_cost_index = ''

        for (var index in number_cost) {
            if (parseInt(number_cost[index]) || parseInt(number_cost[index]) == 0) {
                number_cost_index += number_cost[index]
            }
        }

        row_total_cost = number_cost_index * total_day
        countNubres = String(row_total_cost).length
        row_total_cost = String(row_total_cost).split('')

        if (countNubres > 6){
            row_total_cost.splice( -6, 0, " ")
            row_total_cost.splice( -5, 0, " ")
        }else if (countNubres > 3){
            row_total_cost.splice( -3, 0, " ")
        }
        row_total_cost = row_total_cost.join('')

        $('.reservation').children('.cost_count').children('.cost_count_cost').text(row_total_cost + '₽')

        let total_cost = ''

        for (var index in row_total_cost) {
            if (parseInt(row_total_cost[index]) || parseInt(row_total_cost[index]) == 0) {
                total_cost += row_total_cost[index]
            }
        }

        total_cost = total_cost - 2179 + 300;

        countNubres = String(total_cost).length
        total_cost = String(total_cost).split('')

        if (countNubres > 6){
            total_cost.splice( -6, 0, " ")
            total_cost.splice( -5, 0, " ")
        }else if (countNubres > 3){
            total_cost.splice( -3, 0, " ")
        }
        total_cost = total_cost.join('')

        $('.reservation').children('.total').children('.total_cost').text(total_cost + '₽')
    })
})