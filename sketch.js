// global variables declaration
// sound
var song;
var beat;
// strings
var inst;
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
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(togglePlay);
  background(0);
  // sound play and amplitude
  song.play();
  beat = new p5.Amplitude();
  beat.setInput(song);
  // text position variables
  x = width / 3;
  y = height / 4;
  frameRate(10);
  breakline = [129, 159, 187, 231, 282, 330, 337, 345, 380, 410, 440, 500, 530, 560, 565, 620, 650, 680, 685, 797, 827, 857, 900, 907, 914, 921, 928];
  // image
  image(leroy, 95, height / 2 - 200, 186, 457);

}

function draw() {
     console.log(frameCount);
  // strings of text
  inst = ('To play the song, click two times')
  myText = ('The Typewriter is a short composition of light music by American composer Leroy Anderson, which features an actual typewriter as a percussion instrument. Anderson completed "The Typewriter" in October 9 1950 in Woodbury, Connecticut. "The Typewriter" received its first performance on September 8, 1953 during a recording Anderson and Boston Pops Orchestra made in New York City for Decca Records. Anderson composed melody for symphony and pops orchestras, William Zinn and Floyd Werle arranged it for string orchestras and wind bands respectively. Enjoy!');

  // instructions
  fill(240);
  textSize(20);
  textFont('Special Elite');
  text(inst, 50, 50);

  // image animation
  // volume mapping
  var volume = beat.getLevel();
  volume = map(volume, 0, 1, 0, 100);
  image(hand, 260 + volume, height / 2, 120, 175);
  image(stick, 77, height / 2 + 125 + volume, 248, 181);

  //text animation
  // ifs cycles
  if (frameCount > 100 && frameCount < 730 || frameCount > 760) {
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
    // text function
    var letter = myText.substring(i, i + 1);
    text(letter, x, y);
  }
}

// function to play the song (after 2018)
function togglePlay() {
  if (song.isPlaying() ){
    song.pause();
  } else {
    song.loop();
		amplitude = new p5.Amplitude();
		amplitude.setInput(song);
    frameCount = 0;
  }
}
