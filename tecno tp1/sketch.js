let trazo1, trazo2, trazo3, trazo4, trazo5, trazo6;
let nivel = 0;
let violeta = color(128, 82, 209);
let random1, random2, random3, random4;

function preload() {
  trazo1 = loadImage("trazo1.png");
  trazo2 = loadImage("trazo2.png");
  trazo3 = loadImage("trazo3.png");
  trazo4 = loadImage("trazo4.png");
  trazo5 = loadImage("trazo5.png");
  trazo6 = loadImage("trazo6.png");  
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  pantalla1();
  console.log(frameCount);
  console.log(nivel);
}

function mouseClicked() {
  click();
}

function pantalla1() {
  if (nivel === 0) {    // Inicio de la interacción, las figuras se pintan aleatoriamente
    fill(255);        // y el color cambia con mouseX y mouseY --> esto pasa a ser por voz
    noStroke();
    square(0, 0, width);
    if (frameCount > 70) {
      estado1();
      violeta = color(mouseX, mouseY, 255);
      if (frameCount > 70 && frameCount < 130) {
        random1 = random(-10, 300);      // Rangos para que los trazos se dibujen aleatoriamente
        random2 = random(300, 590);      // dentro de ciertos límites
        random3 = random(-100, 500);
        random4 = random(-200, 200);
      }
    }
  }

  if (nivel === 1) {              // Segundo nivel de la interacción, se dibujan las líneas
    stroke(255);
    strokeWeight(10);
    for (let y = 30; y < height; y += 30) {
      line(y, height, y, 0);
      let d = dist(mouseX, mouseY, y, width/2);
      if (d < 30) { 
        stroke(255, 215, 0); // Pinta la línea de dorado
      } 
    }
  }
}

function click() {        // Cambiar de nivel. Después de definir los colores, se hace clic para armar las líneas
  if (mouseX > 0 && mouseY > 0) {
    nivel += 1;
  }
}

function estado1() {
  tint(234, 245 - mouseX, 158 - mouseY);
  image(trazo4, random1, random3, 500, 500);

  tint(167, mouseX, 79);  // Marrón
  image(trazo5, random4,)
}
