//Create variables here
var foodStock, foodCount;
function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  
}


function draw() {  
background("green");
  foodStock=database.ref('foodCount');
  foodStock.on("value", readStock);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("dogHappy");
  }
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    foodCount:x
  })

}

