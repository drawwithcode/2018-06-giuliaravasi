var myData1;
var myData2;
var myData3;

var myImage1;
var myImage2;
var myImage3;

function preload(){
  myData1 = loadJSON('./assets/simple-recipe-1.json');
  myData2 = loadJSON('./assets/simple-recipe-2.json');
  myData3 = loadJSON('./assets/recipe-short-version.json');

  myImage1 = loadImage('./assets/dish.png');
  myImage2 = loadImage('./assets/fruit-salad.png');
  myImage3 = loadImage('./assets/salmorejo.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#A6B2FF');
  textFont('Quicksand');
}

function draw() {
  push();
  fill(0);
  textSize(22);
  textAlign(CENTER);
  textStyle(BOLD);
  text('Choose your favourite dish and discover the recipe!', width/2, height/12);
  pop();

  push();
  fill(0);
  textSize(17);
  textAlign(CENTER);
  text('Crock Pot Roast', width/2 - 450, height/2 - 210);
  text('Basic Fruit Salad', width/2, height/2 - 210);
  text('Tomato Basil Soup', width/2 + 450, height/2 - 210);
  pop();

   var x1 = width/2 - 450;
   var y1 = height/2 - 100;
   var radius = 160;
   var d = dist(x1, y1, mouseX, mouseY);

   if(d < radius) {
     fill(0);
   } else if (d > radius){
     fill('#A6B2FF');
   }
   push();
   noStroke();
   fill('#A6B2FF');
   ellipse(x1, y1, radius);
   pop();
   var recipe1 = myData1.recipe[0];
   var line1_1 = recipe1.directions[0];
   var line2_1 = recipe1.directions[1];
   var line3_1 = recipe1.directions[2];
   var line4_1 = recipe1.directions[3];
   textAlign(CENTER);
   text(line1_1, width/2 - 450, height/3 + 200);
   text(line2_1, width/2 - 450, height/3 + 230);
   text(line3_1, width/2 - 450, height/3 + 260);
   text(line4_1, width/2 - 450, height/3 + 290);


   var x2 = width/2;
   var y2 = height/2 - 100;
   var radius = 160;
   var d = dist(x2, y2, mouseX, mouseY);

   if(d < radius) {
     fill(0);
   } else if (d > radius){
     fill('#A6B2FF');
   }
   push();
   noStroke();
   fill('#A6B2FF');
   ellipse(x2, y2, radius);
   pop();
  var recipe2 = myData2.recipe[0];
  var line1_2 = recipe2.directions[0];
  var line2_2 = recipe2.directions[1];
  var line3_2= recipe2.directions[2];
  var line4_2= recipe2.directions[3];
  textAlign(CENTER);
  text(line1_2, width/2, height/3 + 200);
  text(line2_2, width/2, height/3 + 230);
  text(line3_2, width/2, height/3 + 260);
  text(line4_2, width/2, height/3 + 290);


  var x3 = width/2 + 450;
  var y3 = height/2 - 100;
  var radius = 160;
  var d = dist(x3, y3, mouseX, mouseY);

  if(d < radius) {
    fill(0);
  } else if (d > radius){
    fill('#A6B2FF');
  }
  push();
  noStroke();
  fill('#A6B2FF');
  ellipse(x3, y3, radius);
  pop();
  var recipe3 = myData3.recipe[0];
  var line1_3 = recipe3.directions[0];
  var line2_3 = recipe3.directions[1];
  var line3_3= recipe3.directions[2];
  var line4_3= recipe3.directions[3];
  var line5_3= recipe3.directions[4];
  textAlign(CENTER);
  text(line1_3, width/2 + 450, height/3 + 200);
  text(line2_3, width/2 + 450, height/3 + 230);
  text(line3_3, width/2 + 450, height/3 + 260);
  text(line4_3, width/2 + 450, height/3 + 290);
  text(line5_3, width/2 + 450, height/3 + 320);



  imageMode(CENTER);
  image(myImage1, width/2 - 450, height/2 - 100, 160, 160);
  image(myImage2, width/2, height/2 - 100, 160, 160);
  image(myImage3, width/2 + 450, height/2 - 100, 160, 160);
}
