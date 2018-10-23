// global variables declaration
// sound
var song;
var beat;
// string
var myText;
// counters
var i = -1;
var j = 0;
// position
var x;
var y;
var breakline;
// image
var leroy;
var hand;
var stick;

function preload() {
  // loading sound
  song = loadSound('./assets/the-typewriter.mp3');
  // loading image
  leroy = loadImage('./assets/leroy-anderson.png');
  hand = loadImage('./assets/leroy-anderson_hand.png');
  stick = loadImage('./assets/leroy-anderson_stick.png');
}

function setup() {
  // canvas
  createCanvas(windowWidth, windowHeight);
  background(0);
  // sound play and amplitude
  song.play();
  beat = new p5.Amplitude();
  beat.setInput(song);
  // text position variables
  x = width / 3;
  y = height / 4;
  frameRate(10);
  breakline = [127, 157, 187, 220, 280, 330, 337, 345, 380, 410, 440, 500, 530, 560, 565, 620, 650, 680, 685, 780, 820, 850, 900, 907, 914, 921, 928];
  // image
  image(leroy, 95, height / 2 - 200, 186, 457);

}

function draw() {
  // console.log(frameCount);
  // string of text
  myText = ('The Typewriter is a short composition of light music by American composer Leroy Anderson, which features an actual typewriter as a percussion instrument. Anderson completed "The Typewriter" in October 9 1950 in Woodbury, Connecticut. "The Typewriter" received its first performance on September 8, 1953 during a recording Anderson and Boston Pops Orchestra made in New York City for Decca Records. Anderson composed melody for symphony and pops orchestras, William Zinn and Floyd Werle arranged it for string orchestras and wind bands respectively. Enjoy!');
  // volume mapping
  var volume = beat.getLevel();
  volume = map(volume, 0, 1, 0, 100);
  image(hand, 260 + volume, height / 2, 120, 175);
  image(stick, 77, height / 2 + 125 + volume, 248, 181);
  // ifs cycles
  if (frameCount > 100 && frameCount < 730 || frameCount > 750) {
    if (volume > 4) {
      x = x + 14;
      i++;
    }
    if (frameCount == breakline[j]) {
      x = width / 3;
      y = y + 20;
      j++;
    }
    // console.log(volume);
    var letter = myText.substring(i, i + 1);
    fill(240);
    textSize(20);
    textFont('Special Elite');
    text(letter, x, y);
  }
}
