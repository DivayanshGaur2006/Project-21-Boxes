var canvas;

var Movingrect1,Movingrect2,Movingrect3,Movingrect4;

var ball, edges;

var music;

function preload(){

    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

    Movingrect1 = createSprite(0,580,360,30);

    Movingrect1.shapeColor = rgb(0,0,255);


    Movingrect2 = createSprite(295,580,200,30);

    Movingrect2.shapeColor = rgb(255,128,0);


    Movingrect3 = createSprite(515,580,200,30);

    Movingrect3.shapeColor = rgb(153,0,76);


    Movingrect4 = createSprite(740,580,220,30);

    Movingrect4.shapeColor = rgb(0,100,0);


    ball = createSprite(random(20,750),100, 40,40);

    ball.shapeColor = rgb(255,255,255);

    ball.velocityX = 4;

    ball.velocityY = 9;


}


function draw() {

    background(rgb(169,169,169));

    edges=createEdgeSprites();

    ball.bounceOff(edges);

    if(Movingrect1.isTouching(ball) && ball.bounceOff(Movingrect1)){
        ball.shapeColor = rgb(0,0,255);

        music.play();
    }

    if(Movingrect2.isTouching(ball)){

        ball.shapeColor = rgb(255,128,0);

        ball.velocityX = 0;

        ball.velocityY = 0;

        music.stop();
    }

    if(Movingrect3.isTouching(ball) && ball.bounceOff(Movingrect3)){

        ball.shapeColor = rgb(153,0,76);
    }

    if(Movingrect4.isTouching(ball) && ball.bounceOff(Movingrect4)){

        ball.shapeColor = rgb(0,100,0);
    }

    drawSprites();

}