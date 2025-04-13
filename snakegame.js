//variable declaration.

var cvs=document.getElementById("canavas").getContext("2d")
var sposx=80;
var sposy=80;
var nposx=0;
var nposy=0;
var fposx=140;
var fposy=140;
var snakeTail = [];
var snakesize =1;
var score =0;
var gameStatus = "Ready";
var gameend ="Game Over";



//onload function.
window.onload=function()
{
    document.addEventListener("keydown",inputControl);
    game = setInterval(maingame,200);
}



//main game function.

function maingame()
{
    document.getElementById("score").innerHTML = score;
    document.getElementById("game-status").innerHTML=gameStatus;

    //game area 



//auto move snake
    sposx+=nposx;
    sposy+=nposy;

//snake moving loop
if(sposx>400)
{
    sposx=0
}
if(sposx<0)
{
    sposx=400
}
if(sposy>400)
{
    sposy=0
}
if(sposy<0)
{
    sposy=400
}



//bg-color
    cvs.fillStyle="black";
    cvs.fillRect(0,0,400,400);

    for(var cl=0; cl<400;cl+=20)
    {
        cvs.moveTo(cl, 0);
        cvs.lineTo(cl, 400);
    }

    for(var rl=0; rl<400;rl+=20)
        {
            cvs.moveTo(0, rl);
            cvs.lineTo(400, rl);            
        }
    
    cvs.strokeStyle="black"    
    cvs.stroke();


    //snake

    cvs.fillStyle="yellow";
    for(var i=0; i < snakeTail.length; ++i) 
    {
        cvs.fillRect(
            snakeTail[i].X, snakeTail[i].y, 20, 20);
        
        if(sposx==snakeTail[i].X && sposy==snakeTail[i].y && snakesize>1)
        {
            clearInterval(game)
            document.getElementById("game-status").innerHTML=gameend;
        }



    }

    
    //fruit

    cvs.fillStyle="red";
    cvs.fillRect(fposx,fposy,20,20); 
    
    
    //snake eats fruit
    if(sposx==fposx && sposy == fposy)
    {
        snakesize++;
        fposx=Math.floor(Math.random()*20)*20
        fposy=Math.floor(Math.random()*20)*20
        score+=10;
        

    }

    snakeTail.push({X: sposx, y:sposy});
    while(snakeTail.length>snakesize)
    {
        snakeTail.shift();
    }
}


function inputControl(e)
{
    console.log(e.keyCode);
    console.log(e.key);

    
    switch(e.keyCode)
    {
        case 38:
            //up
            nposy-=20;
            nposx=0;
            break;
        case 40:
            //down
            nposy+=20;
            nposx=0;
            break;
        case 39:
            //right
            nposx+=20
            nposy=0;
            break;
        case 37:
            //left
            nposx-=20;
            nposy=0;
            break;
    }
    
    
    if(e.keyCode==37||e.keyCode==38||e.keyCode==39||e.keyCode==40);
    {
        gameStatus="Game Started";
        document.getElementById("game-status").innerHTML=gamesStatus;
    }   
}










//input control.
