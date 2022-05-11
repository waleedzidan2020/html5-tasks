function Draw(){

    var ct = document.getElementById("draw")
    var ctx = ct.getContext("2d")
    var col = document.getElementById("co").value
    ctx.fillStyle = `${col}`;
    var x =Math.floor(Math.random()*300)
    var y =Math.floor(Math.random()*300)
    var r = Math.floor(Math.random()*20)
    ctx.clearRect(500,500,500,500)
    ctx.arc(x,y,r,0,2*Math.PI)
    
    
    ctx.stroke()
    ctx.beginPath()
    //ctx.clear()
    //console.log(ct)
   
}
// setInterval(function(){var ct = document.getElementById("draw")
// var ctx = ct.getContext("2d")
// var col = document.getElementById("co").value
// ctx.fillStyle = `${col}`;
// var x =Math.floor(Math.random()*300)
// var y =Math.floor(Math.random()*300)
// var r = Math.floor(Math.random()*20)
// ctx.clearRect(500,500,500,500)
// ctx.arc(x,y,r,0,2*Math.PI)


// ctx.stroke()
// ctx.beginPath()},1000)