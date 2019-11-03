 let canvas=document.getElementById("myCanvas");

 canvas.width=window.innerWidth;
 canvas.height=window.innerHeight;

 let ctx=canvas.getContext("2d");


 let ballRadius=15;
 let x=canvas.width / 2;
 let y=canvas.height-30;

 let dx=250;
 let dy=-250;

 let paddleHeight=20;
 let paddleWidth=150;
 let paddleX=(canvas.width-paddleWidth)/2;

 let leftPressed=false;
 let rightPressed=false;

 let brickRowCount=3;
 let brickColumnCount=5;
 let brickWidth=175;
 let brickHeight=50;
 let brickPadding=10;
 let brickOffsetTop=30;
 let brickOffsetLeft=150;

 let score=0;

 let bricks = [];
 for(let c=0;c<brickColumnCount;c++){
     bricks[c]=[];
     for(let r=0;r<brickRowCount;r++){
         bricks[c][r]={x: 0, y: 0, status:1};
     }
 }

 function drawBall(){
     ctx.beginPath();
     ctx.arc(x,y,ballRadius,0,Math.PI*2);
     ctx.fillStyle="#0095DD";
     ctx.fill();
     ctx.closePath();
 }

function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
    ctx.fillStyle="#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBricks(){
    for(let c=0;c<brickColumnCount;c++){
        for(let r=0;r<brickRowCount;r++){
            if(bricks[c][r].status === 1){
                bricks[c][r].x = c * (brickWidth + brickPadding) + brickOffsetLeft;
                 bricks[c][r].y = r * (brickHeight + brickPadding) + brickOffsetTop;
             ctx.beginPath();
            ctx.rect(bricks[c][r].x,bricks[c][r].y, brickWidth, brickHeight);
            ctx.fillStyle="#0095DD";
            ctx.fill();
            ctx.closePath();
            }
        }
    }
}

function collisionDetection(){
    for(let c = 0; c<brickColumnCount;c++){
        for(let r=0;r<brickRowCount;r++){
            let b = bricks[c][r];
            if(b.status === 1){
                if(x > b.x && x < b.x + brickWidth && y > b.y && y< b.y + brickHeight){
                    dy=-dy;
                    b.status=0;
                    score++;
                    if(score === brickColumnCount*brickRowCount){
                        alert("You win the game!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

function drawScore(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Score:"+score,8,20);
}

 //drawBall();

 function draw(animationTime){
     ctx.clearRect(0,0,canvas.width,canvas.height);
     let deltaTime=(Date.now() - (animationTime || Date.now()))/1000;
     let lastAnimationTime=Date.now();
     drawBall();
     drawPaddle();
     drawBricks();
     collisionDetection();
     drawScore();

    if (x >= canvas.width - ballRadius || x <= ballRadius){
    dx=-dx;
    }

    if (y >= canvas.height - ballRadius || y <= ballRadius){
        dy=-dy;
    }
    else if(y+ballRadius > canvas.height - paddleHeight){
        if(x >= paddleX && x <= paddleWidth + paddleX){
            dy=-dy;
        }
        else{
            alert("GAME OVER");
            document.location.reload();
        }
    }

     x += (dx*deltaTime);
     y += (dy*deltaTime);

     if (rightPressed){
         paddleX += 7;
         if (paddleWidth+paddleX>canvas.width){
             paddleX=canvas.width-paddleWidth;
         }
     }
     else if(leftPressed){
         paddleX -= 7;
         if (paddleX < 0){
             paddleX=0;
         }
     }

     window.requestAnimationFrame(() => draw(lastAnimationTime))
 }
 draw();

 document.addEventListener("keydown", keyDownHandler)
 document.addEventListener("keyup", keyUpHandler)

 function keyDownHandler(event){
    if (event.key === "Right" || event.key === "ArrowRight"){
        rightPressed=true;
    }
    else if (event.key === "Left" || event.key === "ArrowLeft"){
            leftPressed=true;
    }
    console.log("keydown");
 }
 function keyUpHandler(event){
    if (event.key === "Right" || event.key === "ArrowRight"){
        rightPressed=false;
    }
    else if (event.key === "Left" || event.key === "ArrowLeft"){
            leftPressed=false;
    }
     console.log("keyup");
 }