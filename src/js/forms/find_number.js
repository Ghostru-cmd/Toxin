window.onload = function() {
    var anchors = document.getElementsByClassName('button_long1');
    for(var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        anchor.onclick = function() {
            let text_date_dropdown1 = document.querySelector('.date_dropdown1').querySelector('.date_dropdown').querySelector('.data_dropdown').querySelector('.data_number').textContent
            let text_date_dropdown2 = document.querySelector('.date_dropdown2').querySelector('.date_dropdown').querySelector('.data_dropdown').querySelector('.data_number').textContent
            let data_date_dropdown1 = parseInt(text_date_dropdown1.slice(0, 2))
            let data_date_dropdown2 = parseInt(text_date_dropdown2.slice(0, 2))
            let month_date_dropdown1 = parseInt(text_date_dropdown1.slice(4, 6))
            let month_date_dropdown2 = parseInt(text_date_dropdown2.slice(4, 6))
            let year_date_dropdown1 = parseInt(text_date_dropdown1.slice(7, 11))
            let year_date_dropdown2 = parseInt(text_date_dropdown2.slice(7, 11))
            if (text_date_dropdown1 !== text_date_dropdown2){
                if (data_date_dropdown1 < data_date_dropdown2 && month_date_dropdown1 <= month_date_dropdown2 && year_date_dropdown1 <= year_date_dropdown2 || month_date_dropdown1 < month_date_dropdown2 && year_date_dropdown1 <= year_date_dropdown2 || year_date_dropdown1 < year_date_dropdown2){
                    document.querySelector('.date_dropdown1').querySelector('.date_dropdown').querySelector('.data_dropdown').querySelector('.data_number').textContent = text_date_dropdown2
                    document.querySelector('.date_dropdown2').querySelector('.date_dropdown').querySelector('.data_dropdown').querySelector('.data_number').textContent = text_date_dropdown1
                }
            }
        }
    }
};