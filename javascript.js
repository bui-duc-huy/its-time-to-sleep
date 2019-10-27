var check = true
var action
var hourThisTime
var minuteThisTime
var timeToWord1, timeToWord2, timeToWord3
var timeToWeakUp
var message
var count=0;
var type
var width = $(window).width()
function getTime () {
    var time = new Date()
    var hour, minute, second
    if (time.getHours() < 10) {
        hour = "0" + time.getHours() 
    }
    else{
        hour = time.getHours()
    }
    if (time.getMinutes() < 10) {
        minute = "0" + time.getMinutes() 
    }
    else{
        minute = time.getMinutes()
    }
    if (time.getSeconds() < 10) {
        second = "0" + time.getSeconds() 
    }
    else{
        second = time.getSeconds()
    }
    hourThisTime = hour
    minuteThisTime = minute
    document.getElementById("showtime").innerHTML = hour + ":" + minute + ":" + second
    action = setTimeout(getTime,1000)
}
function main() {  
    getTime()
    if (hourThisTime > 5 && hourThisTime < 17) {
        document.getElementById("main").style.backgroundImage = "url(image/day.jpg)"
    }else if(hourThisTime >17 || hourThisTime < 5){
        document.getElementById("main").style.backgroundImage = "url(image/night.png)"
    }

}
function sleep(){
    if (check) {
        let hour = hourThisTime
        let minute = minuteThisTime
        for (let index = 1; index <= 450; index++) {
            minute++ 
            if (minute >=60) {
                hour++
                minute = 0
            }
            if (hour >=24) {
                hour=0
            }

            if (index === 90) {
                if (minute < 10) {
                    timeToWord1 = hour + ":" + "0" + minute
                }
                else {
                    timeToWord1 = hour + ":"  + minute
                }
            }
            if (index === 180){
                if (minute < 10) {
                    timeToWord2 = hour + ":" + "0" + minute
                }
                else {
                    timeToWord2 = hour + ":"  + minute
                }
            }
            if (index === 270) {
                if (minute < 10) {
                    timeToWord3 = hour + ":" + "0" + minute
                }
                else {
                    timeToWord3 = hour + ":"  + minute
                }
            }
            if (index === 450) {
                if (minute < 10) {
                    timeToWeakUp = hour + ":" + "0" + minute
                }
                else {
                    timeToWeakUp = hour + ":"  + minute
                }
            }
        }
        clearTimeout(action)
        if (hourThisTime > 5 && hourThisTime < 17) {
            message = "Bây giờ là " + hourThisTime + ":" + minuteThisTime + " nếu bạn muốn nghỉ ngơi lúc này bạn nên thức dậy vào 1 trong cách thời điểm sau " + timeToWord1 + " hoặc " +timeToWord2 +" để bắt đầu làm việc trong trạng thái hoàn hảo nhất nhé "
        }else if(hourThisTime >17 || hourThisTime < 5){
            message = "Bây giờ là " + hourThisTime + ":" + minuteThisTime + " nếu bạn đi ngủ lúc này bạn nên thức dậy vào lúc " +timeToWeakUp + " để trong trạng thái tốt nhất để cho 1 ngày làm việc dài.<br> Nếu bạn cần làm việc vào ban đêm hãy thức dậy vào 1 trong các thời điểm sau " +timeToWord1 + " hoặc " +  timeToWord2 + " hoặc " +timeToWord3 + " để có thể làm việc hiệu quả nhất nhé"
        }
        if (width < 500) {
            document.getElementById("showtime").style.fontSize = "1.6em"
            document.getElementById("btn").style.top = "13em"
            
        }
        if (width >= 500 && width < 1000) {
            document.getElementById("showtime").style.fontSize = "2em"
            document.getElementById("message").style.fontSize = "0.5em"
            document.getElementById("btn").style.top = "13em"
        }
        if(width >= 1000){
            document.getElementById("showtime").style.fontSize = "2.5em"
            document.getElementById("message").style.fontSize = "1.2em"
            document.getElementById("btn").style.top = "10em"
            document.getElementById("showtime").style.top = "2em"
        }

        document.getElementById("showtime").style.color = "white"
        type =  setInterval(
            typeMessage,
            20
        );
        document.getElementById("message").innerHTML = "Chúc Bạn Ngủ Ngon !!!"
        check = false
    }else{
        count = 0
        clearInterval(type)
        if (width < 500) {
            document.getElementById("showtime").style.fontSize = "550%"
            document.getElementById("btn").style.top = "17em"
        }
        if(width >=500 && width < 1000){
            document.getElementById("showtime").style.fontSize = "8em"
            document.getElementById("btn").style.top = "13em"
        }
        if (width >= 1000) {
            document.getElementById("showtime").style.fontSize = "10em"
            document.getElementById("btn").style.top = "9em"
            document.getElementById("showtime").style.top = "0.8em"
        }
        
        document.getElementById("showtime").style.color = "aquamarine"
        document.getElementById("message").innerHTML = ""
        main()
        check = true
    }
}
function typeMessage()
{
    document.getElementById('showtime').innerHTML=message.substring(0,count++);
}