var color= "Orange";
var line_width=15;
var mouseEvent="";
var width=screen.width;
var new_height=screen.height-100;
var new_width=screen.width-250;
var last_position_X;
var last_position_Y;
if(width<992){
  document.getElementById("myCanvas").width=new_width;
  document.getElementById("myCanvas").height=new_height;
  document.body.style.overflow="hidden";
   }

Canvas=document.getElementById("myCanvas");

ctx=Canvas.getContext("2d");

Canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
  console.log("mousedown");
color=document.getElementById("color").value;
line_width=document.getElementById("PenWidth").value;
mouseEvent="mousedown";
}

Canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
  console.log("entered mouse move");
 current_position_X= e.clientX-Canvas.offsetLeft;
 current_position_Y= e.clientY-Canvas.offsetTop;
 if(mouseEvent=="mousedown"){
   console.log("inside mousemove if");
   ctx.beginPath();
   ctx.strokeStyle=color;
   ctx.lineWidth=line_width;
   ctx.moveTo(last_position_X, last_position_Y);
  ctx.lineTo(current_position_X, current_position_Y);
   ctx.stroke();
 }
 last_position_X=current_position_X;
 last_position_Y=current_position_Y;
}
 


// TouchEvent start
Canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
 last_position_X= e.touches[0].clientX-Canvas.offsetLeft;
 last_position_Y= e.touches[0].clientY-Canvas.offsetTop;
}
  

Canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
  current_position_X= e.touches[0].clientX-Canvas.offsetLeft;
 current_position_Y= e.touches[0].clientY-Canvas.offsetTop;
  
  ctx.beginPath();
  ctx.strokeStyle=color;
  ctx.lineWidth=line_width;
  ctx.moveTo(last_position_X, last_position_Y);
  ctx.lineTo(current_position_X, current_position_Y);
  ctx.stroke();

last_position_X=current_position_X;
last_position_X=last_position_Y;
}


