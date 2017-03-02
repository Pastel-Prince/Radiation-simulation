var xspacing = 7;
var w;                // Width of entire wave
var theta = 0.0;  // Start angle at 0
var period = 200.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
var wiggle = 20;

function setup() {
  var cnv = createCanvas(1200, 400);
  slider = createSlider(0,100,50,1)
  // ampslide = createSlider(20,100,50,2); // Height of wave
  // perslide = createSlider(100,300,50,2)
  colorMode(HSB)
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  ampslide = map(slider.value(),0,100,20,100)
  perslide = map(slider.value(),0,100,300,100)
  background(0);
  calcWave();
  renderWave();
  initialBall();
  finalBall();
    var period = perslide
    dx = (TWO_PI / period) * xspacing;
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.05;
  amplitude = ampslide


  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
  noStroke();
  var period = perslide
  var color= map(period,100,300,187,0)
  fill(color,100,50)
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(1200-x*xspacing, height/2+yvalues[x], 16, 16);
  }

}
function initialBall() {
    var period = perslide;
    var amplitude = ampslide;
    var wig = map(period,100,300,10,0) + map(amplitude,20,100,0,10)
    wiggle = random(0,wig)
    // size = map(period,100,300,100,0) + map(amplitude,20,100,0,100)
    size = 200
    color = color = map(period,100,300,25,0) + map(amplitude,20,100,0,25)
    fill(360,100,color+25)
    ellipse(0+wiggle,height/2,size+30,size+30)
}

function finalBall() {
  var period= perslide
  color = map(period,100,300,65,10) + map(amplitude,20,100,10,65)
  fill(360 ,100,color)

  wiggle = map(period,100,300,70,10) + map(amplitude,20,100,10,70)

  wiggle += random(0,wiggle/3)
  for (var x = 0; x < 30; x++){

    ellipse(width-25,wiggle+height-x*50,50,50)
  }
}
