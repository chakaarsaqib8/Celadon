let pos = 0;
function moveright(){

let cont = document.querySelector(".boxess")
let items = document.querySelector(".items")
let maxMove = items.scrollWidth - cont.clientWidth;
  
    pos -= 326;
   
   if(Math.abs(pos) > maxMove){
    pos =- maxMove;
   }
    items.style.transform = `translateX(${pos}px)`;
    document.querySelector("#move").classList.add("active")
}

function moveleft(){
    pos += 326;
    if(pos>0){
        pos = 0
    }
   document.querySelector(".items").style.transform = `translateX(${pos}px)`;
  

     
}
function years(){
    document.getElementById("inner").classList.toggle("active1")
    document.querySelector(".month").classList.toggle("active3")
    document.querySelector(".yearly").classList.toggle("active2")
}