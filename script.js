var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 700; // Increased number of stars
var colorrange = [0, 60, 240];
var starArray = [];

// Function to get a random number within a range
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
  var x = Math.random() * canvas.offsetWidth;
  var y = Math.random() * canvas.offsetHeight;
  var radius = Math.random() * 1.2;
  var hue = colorrange[getRandom(0, colorrange.length - 1)];
  var sat = getRandom(50, 100);
  var opacity = Math.random();
  starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;

// New text array
var messages = [
  "Hi my love",
  "Everyday I cannot believe how lucky I am.",
  "to have someone like you in my life,",
  "you are the light that brightens my darkest days,",
  "and the warmth that fills my heart with joy,",
  "I love you more than words can express,",
  "I love you in every way I know possible,",
  "and I promise to cherish you forever",
  "spooky😘",
];

var currentMessageIndex = 0;

function drawStars() {
  for (var i = 0; i < stars; i++) {
    var star = starArray[i];

    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, 360);
    context.fillStyle =
      "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
    context.fill();
  }
}

// Function to display text with fade-in and fade-out effect
function drawText() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawStars();

  var fontSize = Math.min(30, window.innerWidth / 24);
  context.font = fontSize + "px Comic Sans MS";
  context.textAlign = "center";
  context.fillStyle = `rgba(255, 255, 255, ${opacity})`; // White text

  context.fillText(
    messages[currentMessageIndex],
    canvas.width / 2,
    canvas.height / 2
  );

  if (frameNumber < 100) {
    opacity += 0.01; // Fade in
  } else if (frameNumber >= 200) {
    opacity -= 0.01; // Fade out
  }

  if (opacity <= 0 && frameNumber > 200) {
    frameNumber = 0;
    opacity = 0;
    currentMessageIndex++;

    if (currentMessageIndex >= messages.length) {
      currentMessageIndex = 0; // Loop back to the first message
    }
  }

  frameNumber++;
  requestAnimationFrame(drawText);
}

// Start animation
drawText();
