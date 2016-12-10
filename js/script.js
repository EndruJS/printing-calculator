
function get_Time () {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours<10) {hours = "0" + hours;}
    if (minutes<10) {minutes = "0" + minutes;}
    if (seconds<10) {seconds = "0" + seconds;}
    document.getElementById('cl_hours').innerHTML = hours + ":";
    document.getElementById('cl_minutes').innerHTML = minutes;
    document.getElementById('cl_seconds').innerHTML = seconds;
    setTimeout("get_Time()", 1000);
}
function get_Date () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var m_day = date.getDate();
    var month_ukr = ["Січня","Лютого","Березня","Квітня","Травня","Червня","Липня","Серпня","Вересня","Жовтня","Листопада","Грудня"];
    month = month_ukr[month];
    if (m_day<10) {m_day = "0" + m_day;}
    document.getElementById('date_m_date').innerHTML = m_day;
    document.getElementById('date_month').innerHTML = month;
    document.getElementById('date_year').innerHTML = year;
}
get_Time();
get_Date();

/*--- BOX-SHADOWS ACTIVE INPUT-SELECT FIELDS ---*/
    function onBlur (field_id) {
        var input = document.getElementById(field_id);
        input.onblur = function () {
            this.className = '';
            this.style.border = '';
        }
        input.onfocus = function () {
            this.className = 'focus_field';
            this.style.border = '';
        }
    }
    onBlur('input_value');
    onBlur('paper_type');
    onBlur('paper_format');
    onBlur('colors_1');
    onBlur('colors_2');
    onBlur('sides_1');
    onBlur('sides_2');
    onBlur('discount');
    onBlur('input_quantity');
    onBlur('paper_type_laser');
    onBlur('paper_format_laser');
    onBlur('input_inkjet');
    onBlur('paper_type_IJ');
    onBlur('paper_format_IJ');
    onBlur('input_height');
    onBlur('input_weight');
    onBlur('type_papers');
/*-----------------------------------------------*/

document.getElementById('celebrate').innerHTML = "Свято Святого Миколая";