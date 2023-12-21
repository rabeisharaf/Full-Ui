const video = document.querySelector("video");
const loading = document.querySelector(".loading");
const shadow = document.querySelector(".shadow");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  if (shadow.classList.contains("turn") != true) {
    shadow.classList.add("turn");
    video.pause();
  } else {
    shadow.classList.remove("turn");
    video.play();
  }
});

// loading
window.addEventListener("load", () => {
  loading.classList.add("hide-loading");
});
