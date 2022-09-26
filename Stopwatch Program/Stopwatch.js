const timedisplay=document.querySelector("#timedisplay")
const startbtn=document.querySelector("#startbtn")
const stopbtn=document.querySelector("#stopbtn")
const resetbtn=document.querySelector("#resetbtn")
console.log(timedisplay.textContent);
let start_time=0
let elapsed_time=0
let paused=true;
let intervalID;
let hours=0
let mins=0
let secs=0
startbtn.addEventListener("click",()=>{
    if(paused){
        paused=false
        start_time=Date.now()-elapsed_time
        intervalID=setInterval(updatetime,1000)
    }
})
stopbtn.addEventListener("click",()=>{
    if(!paused){
        paused=true
        elapsed_time=Date.now()-start_time;
        clearInterval(intervalID)
    }
})
resetbtn.addEventListener("click",()=>{
    paused=true
    start_time=0
    clearInterval(intervalID)
    elapsed_time=0
    paused=true;
    intervalID;
    hours=0
    mins=0
    secs=0
    timedisplay.textContent="00:00:00"

})
function updatetime(){
    elapsed_time=Date.now()-start_time;
    secs=Math.floor((elapsed_time/1000)%60)
    mins=Math.floor((elapsed_time/(1000*60))%60)
    hours=Math.floor((elapsed_time/(1000*60*60))%60)
    secs=pad(secs)
    hours=pad(hours)
    mins=pad(hours)
    function pad(unit){
        if((("0"+unit).length)>2){
            return(unit)
        }
        else{
            return "0"+unit
        }
    }
    timedisplay.textContent=`${hours}:${mins}:${secs}`
}

