var cat, mouse
var cat1Image,cat2Image,cat3Image
var mouse1Image,mouse2Image, mouse3Image
var bg,bgImage
function preload() {
    bgImage=loadImage("images/garden.png")
    cat1Image = loadAnimation("images/cat1.png")
    cat2Image =loadAnimation("images/cat2.png","images/cat3.png")
    cat3Image = loadAnimation("images/cat4.png")
    mouse1Image=loadAnimation("images/mouse1.png")
    mouse2Image=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse2Image=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
   cat = createSprite(870,600)
   cat.addAnimation("sittingcat",cat1Image)
   cat.scale=0.2
   mouse=createSprite(200,600)
   mouse.addAnimation("standingmouse",mouse1Image)
   mouse.scale=0.15

}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("catLastImage",cat3Image)
        cat.changeAnimation("catLastImage")
    }
    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        cat.velocityX=-5;
        cat.addAnimation("catRunning",cat2Image)
        cat.changeAnimation("catRunnning")
    }
}
