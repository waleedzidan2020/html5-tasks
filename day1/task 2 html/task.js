var txt = document.getElementById("t");
var btn=document.getElementById("btn");
var wid =0; 
btn.addEventListener("click",(eo)=>{
    var ct = document.getElementById("canv")
    var com=txt.value;
    var value=wid+20;

    var ctx=ct.getContext("2d");
    ctx.strokeStyle=com;
    
    ctx.rect(value,100,10,com)
    ctx.stroke();
    ctx.beginPath()

})

