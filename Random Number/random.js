let x,y,z;
document.getElementById("roll").onclick=function(){
    x=(Math.floor(Math.random()*6));
    y=(Math.floor(Math.random()*6));
    z=(Math.floor(Math.random()*6));
    document.getElementById("xlabel").innerHTML=x;
    document.getElementById("ylabel").innerHTML=y;
    document.getElementById("zlabel").innerHTML=z;

}