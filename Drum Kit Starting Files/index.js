for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var a=this.innerHTML;
    check(a);
});
}
function check(a){
   
    switch(a){
        case "w":
            var ws=new Audio("sounds/tom-1.mp3");
            ws.play();
            break;
        case "a":
            var as=new Audio("sounds/tom-2.mp3");
            as.play();
            break;
        case "s":
            var ss=new Audio("sounds/tom-3.mp3");
            ss.play();
            break;
        case "d":
            var ds=new Audio("sounds/tom-4.mp3");
            ds.play();
            break;
        case "j":
            var js=new Audio("sounds/snare.mp3");
            js.play();
            break;
        case "k":
            var ks=new Audio("sounds/kick-bass.mp3");
            ks.play();
            break;
        case "l":
            var ls=new Audio("sounds/crash.mp3");
            ls.play();
            break;
    }
}
document.addEventListener("keypress",function(e){
   check(e.key);
});