let guess=6;
let user_guess;
let no_of_guess=0;
document.getElementById("submit").onclick=function(){
user_guess=document.getElementById("userinput").value;
user_guess=Number(user_guess);
no_of_guess+=1;
if (user_guess==guess){
    document.getElementById("msg").innerHTML=`${guess} is the correct answer.You took ${no_of_guess} tries`
}
else if (guess>user_guess){
    document.getElementById("msg").innerHTML=`Small`
}
else {
    document.getElementById("msg").innerHTML=`Large`
}
}