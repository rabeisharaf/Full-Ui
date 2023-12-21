const btns = document.querySelectorAll(".btns button");
const value = document.querySelector(".value");

const dec = (num) => {
  num.textContent = Number(num.textContent) - 1;
  if (num.textContent < 0) {
    num.style.color = "red";
  }
  if (num.textContent == 0) {
    num.style.color = "black";
  }
};
const reset = (num) => {
  num.style.color = "black";
  num.textContent = 0;
};
const inc = (num) => {
  num.textContent = Number(num.textContent) + 1;
  if (num.textContent > 0) {
    num.style.color = "green";
  }
  if (num.textContent == 0) {
    num.style.color = "black";
  }
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.textContent) {
      case "decrease":
        dec(value);
        break;
      case "increase":
        inc(value);
        break;
      case "reset":
        reset(value);
        break;
    }
  });
});
