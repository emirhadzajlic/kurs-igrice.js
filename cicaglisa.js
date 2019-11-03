let canvas=document.getElementById("myCanvas");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.arc(200,70,40,0,Math.PI * 2);
ctx.fill();
ctx.closePath();

ctx.fillRect(145,110,110,130);
ctx.fillRect(145,240,40,120);
ctx.fillRect(215,240,40,120);