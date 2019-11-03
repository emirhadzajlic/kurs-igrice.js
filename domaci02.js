let canvas=document.getElementById("myCanvas");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let ctx=canvas.getContext("2d");

function drawTriangle(j,k,m,n,o,p)
{
    ctx.beginPath();
    ctx.moveTo(j,k);
    ctx.lineTo(m,n);
    ctx.moveTo(m,n);
    ctx.lineTo(o,p);
    ctx.moveTo(o,p);
    ctx.lineTo(j,k);
    ctx.strokeStyle="red";
    ctx.stroke();
    ctx.closePath();
}
for(let i=0;i<20;i++)
{
    let j=Math.random()*canvas.width;
    let k=Math.random()*canvas.height;
    let m=Math.random()*canvas.width;
    let n=Math.random()*canvas.height;
    let o=Math.random()*canvas.width;
    let p=Math.random()*canvas.height;

    drawTriangle(j,k,m,n,o,p);
}


/*for (let i=0;i<30;i++)
{
    let j=Math.random()*canvas.width;
    let k=Math.random()*canvas.height;
    let m=Math.random()*canvas.width;
    let n=Math.random()*canvas.height;
    let o=Math.random()*canvas.width;
    let p=Math.random()*canvas.height;

    ctx.beginPath();
    ctx.moveTo(j,k);
    ctx.lineTo(m,n);
    ctx.moveTo(m,n);
    ctx.lineTo(o,p);
    ctx.moveTo(o,p);
    ctx.lineTo(j,k);
    ctx.strokeStyle="blue";
    ctx.stroke();
    ctx.closePath();
}*/

