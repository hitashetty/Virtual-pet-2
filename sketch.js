//Create variables here
var dog, happyDog, database, foodS, foodStock,dogimage,happyDogimage,food,milkimage,milk1;
var milk2;
var milk3;
var milk4;
var milk5;
var milk6;
var milk7;
var milk8;
var milk9;
var milk10;
function preload()
{
 dogimage= loadImage("Dog.png");
 happyDogimage= loadImage("happyDog.png");


}

function setup() {
  createCanvas(800, 500);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on('value',readstock);

  dog = createSprite(600, 390,20,20);
  dog.addImage(dogimage);
  dog.scale = 0.3;

}


function draw() {  
background(46,139,87);
this.button = createButton('Feed the dog');
this.button.position(600,300);
this.button = createButton('Add food');
this.button.position(500,300);


if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDogimage);
}
  drawSprites();
  fill("darkblue");
  text("note, tap the up arrow to feed the puppy",300,20);
  text("puppy food left:"+foodS ,540,200);

}

function readstock(data){
  foodS=data.val();
}


function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1;
}
  database.ref("/").update({
    Food : x
  })
}



