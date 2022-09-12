let temp ;
document.getElementById("submit").onclick=function(){ 
    temp=document.getElementById("userinput").value
    iscelsius=document.getElementById("cbutton").checked
    isfahrenheit=document.getElementById("fbutton").checked

    if (iscelsius){
        temp=document.getElementById("userinput").value
        temp=celsius(temp);
        document.getElementById("result").innerHTML=`The Fahrenheit to Celsius is ${temp} \u00B0C`
    }
    else if (isfahrenheit){
        temp=document.getElementById("userinput").value
        temp=fahrenheit(temp);
        document.getElementById("result").innerHTML=`The Celsius to Fahrenheit is ${temp} \u00B0F`
    }
    else {
        temp=document.getElementById("userinput").value
        document.getElementById("result").innerHTML=`Select a unit`
    }
}
function celsius(temp){
    return (temp-32) * (5/9)
}
function fahrenheit(temp){
    return (temp*9/5) + 32 
}


