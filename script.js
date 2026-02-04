function startSurprise() {
  document.getElementById("message").classList.remove("hidden");
  document.getElementById("bg-music").play();
}

// Create falling hearts
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  heart.style.fontSize = (Math.random() * 20 + 10) + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 250);
let boyPos = 10;
let solved = false;

function startSurprise() {
  document.getElementById("message").classList.remove("hidden");
  document.getElementById("game").classList.remove("hidden");
  document.getElementById("bg-music").play();
}

document.addEventListener("keydown", (e) => {
  if (solved) return;

  const boy = document.getElementById("boy");

  if (e.key === "ArrowRight") boyPos += 10;
  if (e.key === "ArrowLeft") boyPos -= 10;

  boy.style.left = boyPos + "px";

  if (boyPos > 160) {
    solved = true;
    document.getElementById("game").classList.add("hidden");
    document.getElementById("reward").classList.remove("hidden");
  }
});

