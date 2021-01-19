class Food {

    preload(){
    milkimage = loadImage("Milk.png");
    }

    constructor() {
     var foodStock ;
     var lastFed;
    }

    getFoodStock(){
        var foodstock1 = database.ref('Food');
        foodstock1.on("value",(data)=>{
          foodS = data.val();
        })
      }
    
      updateFoodStock(count){
        database.ref('/').update({
          foodS: count
        });
      }

    display(){
milk1 = createSprite("200,200,20,20");
milk2 = createSprite("200,200,20,20");
milk3 = createSprite("200,200,20,20");
milk4 = createSprite("200,200,20,20");
milk5 = createSprite("200,200,20,20");
milk6 = createSprite("200,200,20,20");
milk7 = createSprite("200,200,20,20");
milk8 = createSprite("200,200,20,20");
milk9 = createSprite("200,200,20,20");
milk10 = createSprite("200,200,20,20");

    }
}