
var counter = 0;

function invoke1(){
    
    correct(this);
}

function correct(recive) {
   
 var imgE = document.createElement('img');
 
 imgE.setAttribute('src', 'images/correct.png');
 recive.appendChild(imgE);
 recive.removeAttribute("id");
  
  var allBoxes = document.getElementsByClassName("box1");
 
  for(var i=0; i< allBoxes.length; i++){
      
    var singleBox = allBoxes[i];
    
    singleBox.removeEventListener('click', invoke1);
    
  }
  
    var item1 = document.getElementsByClassName("box1")[0];
    var item2 = document.getElementsByClassName("box1")[1];
    var item3 = document.getElementsByClassName("box1")[2];
    var item4 = document.getElementsByClassName("box1")[3];
    var item5 = document.getElementsByClassName("box1")[4];
    var item6 = document.getElementsByClassName("box1")[5];
    var item7 = document.getElementsByClassName("box1")[6];
    var item8 = document.getElementsByClassName("box1")[7];
    var item9 = document.getElementsByClassName("box1")[8];
    
     if(item1.isEqualNode(item2) == true && item2.isEqualNode(item3) == true){
     
       alert("1st Player Win");
     }
     else if(item1.isEqualNode(item5) == true && item5.isEqualNode(item9) == true){
         
        alert("1st Player Win");
     }
     else if(item1.isEqualNode(item4) == true && item4.isEqualNode(item7) == true){
         
        alert("1st Player Win");
     }
     else if(item2.isEqualNode(item1) == true && item1.isEqualNode(item3) == true){
         
         alert("1st Player Win");
     }
     else if(item2.isEqualNode(item5) == true && item5.isEqualNode(item8) == true){
         
        alert("1st Player Win");
     }
     else if(item3.isEqualNode(item2) == true && item2.isEqualNode(item1) == true){
         
        alert("1st Player Win");
     }
     else if(item3.isEqualNode(item5) == true && item5.isEqualNode(item7) == true){
         
        alert("1st Player Win");
     }
     else if(item3.isEqualNode(item6) == true && item6.isEqualNode(item9) == true){
         
        alert("1st Player Win");
     }
     else if(item4.isEqualNode(item1) == true && item1.isEqualNode(item7) == true){
         
        alert("1st Player Win");
     }
     else if(item4.isEqualNode(item5) == true && item5.isEqualNode(item6) == true){
         
         alert("1st Player Win");
     }
     else if(item5.isEqualNode(item2) == true && item2.isEqualNode(item8) == true){
         
        alert("1st Player Win");
     }
     else if(item5.isEqualNode(item6) == true && item6.isEqualNode(item4) == true){
         
        alert("1st Player Win");
     }
     else if(item6.isEqualNode(item3) == true && item3.isEqualNode(item9) == true){
         
        alert("1st Player Win");
     }
     else if(item6.isEqualNode(item5) == true && item5.isEqualNode(item4) == true){
         
        alert("1st Player Win");
     }
     else if(item7.isEqualNode(item4) == true && item4.isEqualNode(item1) == true){
         
        alert("1st Player Win");
     }
     else if(item7.isEqualNode(item8) == true && item8.isEqualNode(item9) == true){
         
        alert("1st Player Win");
     }
     else if(item7.isEqualNode(item5) == true && item5.isEqualNode(item3) == true){
         
        alert("1st Player Win");
     }
     else if(item8.isEqualNode(item9) == true && item9.isEqualNode(item7) == true){
         
        alert("1st Player Win");
     }
     else if(item8.isEqualNode(item5) == true && item5.isEqualNode(item2) == true){
         
        alert("1st Player Win");
     }
     else if(item9.isEqualNode(item5) == true && item5.isEqualNode(item1) == true){
         
        alert("1st Player Win");
     }
     else if(item9.isEqualNode(item6) == true && item6.isEqualNode(item3) == true){
         
        alert("1st Player Win");
     }
     else if(item9.isEqualNode(item8) == true && item8.isEqualNode(item7) == true){
         
        alert("1st Player Win");
     }
     else{
      
         secondMan();  
         var Divs = document.getElementsByTagName("div");
         var fstPlayer = Divs[0];
         fstPlayer.removeAttribute('id');
         counter++;
     }

     if(counter == 5){
         
         alert('DRAW');
     }

}

function firstMan(){
      
  var Divs = document.getElementsByTagName("div");
  
  var fstPlayer = Divs[0];
 
  fstPlayer.setAttribute("id", "leftTurn");
 
 var allBoxes = document.getElementsByClassName("box1");
 
  for(var i=0; i< allBoxes.length; i++){
      
    var singleBox = allBoxes[i];
    
    if(singleBox.hasChildNodes("img") == false){
        
    singleBox.addEventListener('click', invoke1);
    }
  }
   
}

function secondMan(){
    
  var Divs = document.getElementsByTagName("div");
  
  var secPlayer = Divs[2];
  
  secPlayer.setAttribute("id", "rightTurn");
  
 var allBoxes = document.getElementsByClassName("box1");
 
  for(var i=0; i< allBoxes.length; i++){
      
    var singleBox = allBoxes[i];
    
    if(singleBox.hasChildNodes("img") == false){
        
    singleBox.addEventListener('click', invoke2);
    }
        
  }  
   
}

function invoke2(){
    
    cross(this);
}

function cross(recive) {
    
    
 var imgE = document.createElement('img');
 
 imgE.setAttribute('src', 'images/cross.png');
 recive.appendChild(imgE);
 recive.removeAttribute("id");

 var allBoxes = document.getElementsByClassName("box1");
 
  for(var i=0; i< allBoxes.length; i++){
      
    var singleBox = allBoxes[i];
    
    singleBox.removeEventListener('click', invoke2);
    
  }
  
    var item1 = document.getElementsByClassName("box1")[0];
    var item2 = document.getElementsByClassName("box1")[1];
    var item3 = document.getElementsByClassName("box1")[2];
    var item4 = document.getElementsByClassName("box1")[3];
    var item5 = document.getElementsByClassName("box1")[4];
    var item6 = document.getElementsByClassName("box1")[5];
    var item7 = document.getElementsByClassName("box1")[6];
    var item8 = document.getElementsByClassName("box1")[7];
    var item9 = document.getElementsByClassName("box1")[8];
    
     if(item1.isEqualNode(item2) == true && item2.isEqualNode(item3) == true){
     
       alert("2st Player Win");
     }
     else if(item1.isEqualNode(item5) == true && item5.isEqualNode(item9) == true){
         
         alert("2st Player Win");
     }
     else if(item1.isEqualNode(item4) == true && item4.isEqualNode(item7) == true){
         
         alert("2st Player Win");
     }
     else if(item2.isEqualNode(item1) == true && item1.isEqualNode(item3) == true){
         
          alert("2st Player Win");
     }
     else if(item2.isEqualNode(item5) == true && item5.isEqualNode(item8) == true){
         
         alert("2st Player Win");
     }
     else if(item3.isEqualNode(item2) == true && item2.isEqualNode(item1) == true){
         
        alert("2st Player Win");
     }
     else if(item3.isEqualNode(item5) == true && item5.isEqualNode(item7) == true){
         
         alert("2st Player Win");
     }
     else if(item3.isEqualNode(item6) == true && item6.isEqualNode(item9) == true){
         
        alert("2st Player Win");
     }
     else if(item4.isEqualNode(item1) == true && item1.isEqualNode(item7) == true){
         
         alert("2st Player Win");
     }
     else if(item4.isEqualNode(item5) == true && item5.isEqualNode(item6) == true){
         
         alert("2st Player Win");
     }
     else if(item5.isEqualNode(item2) == true && item2.isEqualNode(item8) == true){
         
         alert("2st Player Win");
     }
     else if(item5.isEqualNode(item6) == true && item6.isEqualNode(item4) == true){
         
         alert("2st Player Win");
     }
     else if(item6.isEqualNode(item3) == true && item3.isEqualNode(item9) == true){
         
        alert("2st Player Win");
     }
     else if(item6.isEqualNode(item5) == true && item5.isEqualNode(item4) == true){
         
         alert("2st Player Win");
     }
     else if(item7.isEqualNode(item4) == true && item4.isEqualNode(item1) == true){
         
         alert("2st Player Win");
     }
     else if(item7.isEqualNode(item8) == true && item8.isEqualNode(item9) == true){
         
         alert("2st Player Win");
     }
     else if(item7.isEqualNode(item5) == true && item5.isEqualNode(item3) == true){
         
        alert("2st Player Win");
     }
     else if(item8.isEqualNode(item9) == true && item9.isEqualNode(item7) == true){
         
         alert("2st Player Win");
     }
     else if(item8.isEqualNode(item5) == true && item5.isEqualNode(item2) == true){
         
         alert("2st Player Win");
     }
     else if(item9.isEqualNode(item5) == true && item5.isEqualNode(item1) == true){
         
        alert("2st Player Win");
     }
     else if(item9.isEqualNode(item6) == true && item6.isEqualNode(item3) == true){
         
         alert("2st Player Win");
     }
     else if(item9.isEqualNode(item8) == true && item8.isEqualNode(item7) == true){
         
         alert("2st Player Win");
     }
     else{
       
        firstMan();
        var Divs = document.getElementsByTagName("div");
        var secPlayer = Divs[2];
        secPlayer.removeAttribute('id');  
         
     }
}

function play(){

firstMan();
var btn = document.getElementById('btn');
btn.removeAttribute('onclick');
}

function restart(){
    
    window.location.assign('index.html');
}






















