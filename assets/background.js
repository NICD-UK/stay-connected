const background = document.getElementById("background");
const year = document.getElementById("year");

const colors = [
  "#56d792",
  "#7fe5bc",
  "#b9dcff",
  "#8fdcc3"
];

const triangleCount = 5;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function randomPosition() {
  let left;
  let top;

  do {
    left = random(5, 95);
    top = random(5, 95);
  } while (left > 28 && left < 72 && top > 25 && top < 75);

  return { left, top };
}

if (background) {
  for (let i = 0; i < triangleCount; i++) {
    const triangle = document.createElement("div");
    const position = randomPosition();

    triangle.className = "triangle";

    const size = random(380, 620);

    triangle.style.width = `${size}px`;
    triangle.style.height = `${size}px`;
    triangle.style.left = `${position.left}%`;
    triangle.style.top = `${position.top}%`;
    triangle.style.background = colors[Math.floor(Math.random() * colors.length)];
    triangle.style.filter = `blur(${random(30, 52)}px)`;
    triangle.style.opacity = random(0.07, 0.15);
    triangle.style.animationDuration = `${random(32, 60)}s`;
    triangle.style.animationDirection = Math.random() > 0.5 ? "normal" : "reverse";
    triangle.style.setProperty("--start-angle", `${random(0, 360)}deg`);

    background.appendChild(triangle);
  }
}

if (year) {
  year.textContent = new Date().getFullYear();
}