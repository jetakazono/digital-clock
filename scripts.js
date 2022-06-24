
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var period = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h -= 12;
        period = "PM";
    }
    
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    
    var time = `${h} : ${m} : ${s} ${period}`;
   
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    var weekDay = days[date.getDay()];
    var day = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    date = ` ${weekDay}, ${day} ${month} ${year}`;

    document.getElementById("clockDisplay").innerHTML = time;
    document.getElementById("clockDisplay-date").innerHTML = date;
    

    setTimeout(showTime, 1000);
}

showTime();