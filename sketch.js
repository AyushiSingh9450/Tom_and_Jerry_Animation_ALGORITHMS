var jerry, mouseWithGift, mouseTeasing, mouseSearching;
var tom, catSitting, catWalking, catStanding;
var garden, back_groundImage;

function preload() {
    //loading the images here

    //Animation for mouse loaded here
    mouseWithGift = loadAnimation("mouse1.png");
    mouseTeasing = loadAnimation("mouse2.png","mouse3.png");
    mouseSearching = loadAnimation("mouse4.png");

    //Animation for cat loaded here
    catSitting = loadAnimation("cat1.png");
    catWalking = loadAnimation("cat2.png", "cat3.png");
    catStanding = loadAnimation("cat4.png");

    //background loaded here
    back_groundImage = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden = createSprite(500,400);
    garden.scale = 2;
    garden.addImage(back_groundImage);

    tom = createSprite(700,700);
    tom.scale = 0.2;
    tom.debug = false;
    tom.setCollider("aabb",0,0,10,10);
    tom.addAnimation("sitting", catSitting);
    tom.addAnimation("walking", catWalking);
    tom.addAnimation("standing", catStanding);

    jerry = createSprite(100,700);
    jerry.scale = 0.1;
    jerry.debug = false;
    jerry.setCollider("aabb", 10, 10);
    jerry.addAnimation("gift", mouseWithGift);
    jerry.addAnimation("tease", mouseTeasing);
    jerry.addAnimation("searching", mouseSearching);
    

}

function draw() {

    background("white");
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < tom.width/2 + jerry.width/2 &&
        tom.y - jerry.y < tom.height/2 + jerry.height/2 &&
        jerry.x - jerry.x < tom.width/2 + jerry.width/2 &&
        jerry.y - tom.y < tom.height/2 + jerry.height/2){

        //Changing the animation and velocities
        tom.changeAnimation("standing", catStanding);
        tom.velocityX = 0;

        jerry.changeAnimation("searching", mouseSearching);
        jerry.veloxityX = 0;

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyDown("left")){
      //Walking tom
      tom.changeAnimation("walking", catWalking);
      tom.velocityX = -4;

      //Jerry teasing
      jerry.changeAnimation("tease", mouseTeasing);

  }

}
