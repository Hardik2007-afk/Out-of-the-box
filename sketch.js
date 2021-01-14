var canvas;
var music;
var block1;
var block2;
var block3;
var block4;
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    block1 = createSprite(0,580,320,30)
    block1.shapeColor = "red"
    block2 = createSprite(280,580,200,30)
    block2.shapeColor = "blue"
    block3 = createSprite(500,580,200,30)
    block3.shapeColor = "green"
    block4 = createSprite(740,580,220,30)
    block4.shapeColor = "yellow"
    ball = createSprite(random(20,750),100,40,40)
    
    ball.velocityX = 4
    ball.velocityY = 9 


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    ball.bounceOff(edges)

    //create 
    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "red"
        music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "blue";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "green";
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "yellow";
    }



drawSprites();
    //add condition to check if box touching surface and make it box
}