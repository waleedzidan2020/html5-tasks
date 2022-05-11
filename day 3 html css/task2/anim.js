document.getElementById("pic").addEventListener("click" ,function(){
    

    this.style.animationPlayState="paused";
 
})
document.getElementById("pic").addEventListener("mouseleave" ,function(){

    this.style.animationPlayState="running";
   })