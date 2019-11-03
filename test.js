let canvas=document.getElementById("myCanvas");

// canvas.width=canvas.scrollWidth;
canvas.width=window.innerWidth;
//canvas.height=canvas.scrollHeight;
canvas.height=window.innerHeight;

let ctx=canvas.getContext("2d");



function drawCircle(x,y,r=50,start=0,end=Math.PI*2)
{
    ctx.beginPath();
    // console.log(x,y);
    ctx.fillStyle="red";
    ctx.arc(x,y,r,start,end);
    ctx.fill();
}
for(let i=0;i<20;i++)
{
    let x=Math.random()*canvas.width;
    let y=Math.random()*canvas.height;
    drawCircle(x,y);
}




ctx.fillStyle="blue";
ctx.fillRect(10,10,200,200); 

ctx.strokeStyle="red";
ctx.strokeRect(220,10,200,200);

ctx.strokeStyle="green";
ctx.beginPath();
ctx.arc(100,350,50,0,Math.PI * 2);
ctx.stroke();
ctx.closePath();

ctx.fillStyle="green";
ctx.beginPath();
ctx.arc(250,350,50,0,Math.PI * 2);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(100,500);
ctx.lineTo(200,500);
ctx.lineTo(100,600);
ctx.lineTo(100,500);
ctx.strokeStyle="blue";
ctx.stroke();
ctx.closePath();


/* let i=0;
while(i<20)
{
    ctx.beginPath();
    ctx.arc(Math.random()*canvas.width,Math.random()*canvas.height,50,0,Math.PI*2);
    ctx.stroke();
    ctx.closePath();
    i++;
} */





