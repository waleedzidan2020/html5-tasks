var elment = document.getElementById("element")
var boxs = document.getElementsByClassName("tasksSection")

//console.log(boxs)
elment.addEventListener("dragstart",draggable)

function draggable(event){
  event.dataTransfer.setData("mohamed",this.id)
  
}
for(var i =0; i<boxs.length;i++){
   boxs[i].addEventListener("dragover",feeldrag)
   boxs[i].addEventListener("drop",addanddrop)
}

function feeldrag(event){
  event.preventDefault();
}
function addanddrop(event){
  var idelemnt=event.dataTransfer.getData("mohamed")
  this.appendChild(document.getElementById(idelemnt))
}



 



