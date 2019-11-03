let canvas=document.getElementById("myCanvas");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let ctx=canvas.getContext("2d");

let image = new Image();
image.src="slika11.jpg";

/*function draw(ctx,image)
{
    if(!image.complete){
        setTimeout(function() {
            draw(ctx,image);
        },50)
        return;
    }
    ctx.drawImage(image, 20, 20, 300, 200);

}
draw(); */

function drawRotateImage(ctx,image,x,y,w,h,rotation){
    let halfW=w/2;
    let halfH=h/2;

    ctx.save();
    ctx.translate(x+halfW,y+halfH);

    ctx.rotate(rotation);
    ctx.drawImage(image,-halfW,-halfH,w,h);

    ctx.restore();
}

image.addEventListener("load",function(){
    ctx.drawImage(image,20,20,300,200);
    drawRotateImage(ctx,image,450,20,300,200,Math.PI/2);
})
