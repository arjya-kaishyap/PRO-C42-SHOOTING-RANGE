var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup;

var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2

  heading = createElement("h1");
  scoreoard = createElement("h1")
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  
}

function draw() {
  background("#BDA297");

  //display Score and number of lifes
    //showLife() 

    scoreoard.html("score: "+score)
    scoreoard.style('color:red');
    scoreoard.position(width-200,20)
    
    drawSprites();
  }
   
    function shootBullet(){
      bullet.x = mouseX
      bullet.x = mouseY
    }
   
  function handBubbleCollision(bubbleGroup){
    if(life>0) {
      score = score+1;
    }
  }

  swal({
    title: "GAME OVER",
    text: "Oops you lost the game.....!!!!",
    text:"Your score is" + score,
    imageUrl:
    "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios"

  });
  if(blueBubbleGroup.colide(bulletGroup)){
    handBubbleCollision(blueBubbleGroup);
  }
  if(blueBubbleGroup.colide(backBoard)){
    handleGameover(blueBubbleGroup);
  }

  function drawblueBubble(){
    blueBubble = createSprite(800,random(20,780),40,40);
    bluebubble.addImage(blueBubbleImg);
    bluebubble.scale = 0.1;
    bluebubble.velocityX = -8;
    bluebubble.lifetime = 400;
    blueBubbleGroup.add(bluebubble);
  }

  if(gameState === 1){
    gun.y = mouseY

    if(frameCount % 80 === 0){
      drawblueBubble();

    }
   
    if(frameCount % 100 === 0){
      drawredBuble()
    }


  }
     


