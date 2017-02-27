var xspacing = 10;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;  // Start angle at 0
var period = 200.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
var wiggle = 20;

function setup() {
  var cnv = createCanvas(1200, 400);
  ampslide = createSlider(20,100,50,2); // Height of wave
  perslide = createSlider(100,300,50,2)
  colorMode(HSB)
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background(0);
  calcWave();
  renderWave();
  finalBall();
    var period = perslide.value()
    dx = (TWO_PI / period) * xspacing;
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.05;
  amplitude = ampslide.value()


  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
  noStroke();
  fill(255)
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(1200-x*xspacing, height/2+yvalues[x], 16, 16);
  }

}
function finalBall() {
  var period= perslide.value()
  color = map(period,100,300,70,10) + map(amplitude,20,100,10,70)
  fill(360 ,100,color)
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(width-25,height/2+yvalues[2],50,50)
  }

  wiggle = map(period,100,300,70,10) + map(amplitude,20,100,10,70)

  wiggle += random(0,wiggle/3)
  for (var x = 0; x < 30; x++){

    ellipse(width-25,wiggle+height-x*50,50,50)
  }
}
