


function setup(){
createCanvas(1400,650);
}
function draw(){
 
   background(51);
   stroke(225);
   translate(625,height);
   branch(100);

}

 function branch(len) {
     fill(20, 205, 28)
     line(0,0,0,-len);
     translate(0,-len);
     rotate(PI/4);
     branch(len*0.67);
 

 
 }



    


