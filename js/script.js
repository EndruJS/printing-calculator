
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

document.getElementById('celebrate').innerHTML = "Свято Святого Миколая";