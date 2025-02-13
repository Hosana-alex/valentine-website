document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("starsCanvas");
  const ctx = canvas.getContext("2d");
  const textContainer = document.getElementById("text-container");
  const playButton = document.getElementById("playMessageButton");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let stars = [];

  // Create stars
  function createStars(count) {
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2,
      });
    }
  }

  function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    stars.forEach((star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();

      // Twinkling effect
      star.radius += (Math.random() - 0.5) * 0.05;
      if (star.radius < 1) star.radius = 1;
      if (star.radius > 3) star.radius = 3;
    });

    requestAnimationFrame(animateStars);
  }

  createStars(200); // Number of stars
  animateStars();

  // Messages
  const messages = [
    "Hi my love",
    "Everyday I cannot believe how lucky I am.",
    "To have someone like you in my life,",
    "You are the light that brightens my darkest days,",
    "And the warmth that fills my heart with joy,",
    "I love you more than words can express,",
    "I love you in every way I know possible,",
    "And I promise to cherish you forever",
    "Spooky😘",
  ];

  let index = 0;

  function showNextMessage() {
    if (index < messages.length) {
      textContainer.innerText = messages[index];
      index++;
      setTimeout(showNextMessage, 3000); // Adjust duration per message
    }
  }

  playButton.addEventListener("click", function () {
    playButton.style.display = "none"; // Hide button
    textContainer.style.display = "block"; // Show text
    showNextMessage(); // Start message display
  });

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createStars(200);
  });
});
