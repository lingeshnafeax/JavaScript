const label1=document.getElementById("date")
const label2=document.getElementById("time")
update()
setInterval(update,1000)
function update(){
    let date=new Date()
    label1.innerHTML=display_date(date)
    label2.innerHTML=display_time(date)
    function display_date(){
        let day=date.getDate()
        let month=date.getMonth()
        let year=date.getFullYear()
        return `Date : ${day}:${month}:${year}`
    }
    function display_time(){
        let hour=date.getHours()
        let amORpm=hour>12?"PM":"AM"
        let minutes=date.getMinutes()
        let seconds=date.getSeconds()
        hour=hour>12?hour%12:hour
        hour=rounddigits(hour)
        minutes=rounddigits(minutes)
        seconds=rounddigits(seconds)


        return `Day : ${hour}:${minutes}:${seconds} ${amORpm}`
    }
    function rounddigits(time){
        time=time.toString()
        return time.length==1?"0"+time:time

    }
}