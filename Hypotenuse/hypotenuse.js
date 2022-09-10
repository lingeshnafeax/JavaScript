let a;
let b;
let c;
document.getElementById("submit").onclick=function(){
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    // a=Number(a); we dont need this because we get input from html as a number
    // b=Number(b);
    c=Math.pow(a,2)+Math.pow(b,2);
    c=Math.sqrt(c);
    console.log("The hypotenuse is",c); // for console log
    document.getElementById("result").innerHTML="The hypotenuse value is"+c; // inside a label in html
}