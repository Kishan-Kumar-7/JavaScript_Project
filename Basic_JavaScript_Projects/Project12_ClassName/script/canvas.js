var c = document.getElementById("id_name");
var ctx = c.getContext('2d');
//create gradiant
var lgrd = ctx.createLinearGradient(0, 0, 500, 0);
lgrd.addColorStop(0, "red");
lgrd.addColorStop(1, "blue");


ctx.fillStyle = lgrd;
ctx.fillRect(0, 0, 500, 250);

 ctx.moveTo(0, 0);
 ctx.lineTo(250, 250);
 ctx.moveTo(250, 0);
 ctx.lineTo(0, 250);
 ctx.moveTo(250,250);
 ctx.lineTo(500, 0);
 ctx.moveTo(250, 0);
 ctx.lineTo(500, 250);
 ctx.stroke();


 ctx.beginPath();
 ctx.arc(125, 125, 100, 0, 360, false);
 ctx.stroke();
 ctx.beginPath();
 ctx.arc(125, 125, 50, 0, 360, false); 
 ctx.stroke();

 ctx.beginPath();
 ctx.arc(375, 125, 100, 0, 360, false);
 ctx.stroke();
 ctx.beginPath();
 ctx.arc(375, 125, 50, 0, 360, false);
 ctx.stroke();

