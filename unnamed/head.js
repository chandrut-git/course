var ran=Math.floor(Math.random()*6)+1;
var ap="dice"+ran+".png";
document.querySelector(".img1").setAttribute("src","images/"+ap);
var ran1=Math.floor(Math.random()*6)+1;
var ap1="dice"+ran1+".png";
document.querySelector(".img2").setAttribute("src","images/"+ap1);
var c=ran>ran1?1:2;
if(ran==ran1) c="drawn"
document.querySelector("h1").innerHTML="Player "+c+" wins";