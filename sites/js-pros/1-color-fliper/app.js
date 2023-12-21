const simpleColorsValues = ["rgba(133,122,200)", "#f15025", "red", "green"];
const hexColorsValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
const simpleBtn = document.querySelector(".simplebtn");
const hexBtn = document.querySelector(".hexbtn");
const colorValue = document.querySelector(".color");
const content = document.querySelector(".content");

if (simpleBtn !== null) {
  simpleBtn.addEventListener("click", () => {
    let color =
      simpleColorsValues[Math.floor(Math.random() * simpleColorsValues.length)];
    while (content.style.backgroundColor == color) {
      color =
        simpleColorsValues[
          Math.floor(Math.random() * simpleColorsValues.length)
        ];
    }
    content.style.backgroundColor = color;
    colorValue.textContent = color;
  });
}

if (hexBtn !== null) {
  const getColor = () => {
    let color = "#";
    for (let i = 0; i <= 5; i++) {
      color +=
        hexColorsValues[Math.floor(Math.random() * hexColorsValues.length)];
    }
    return color;
  };
  hexBtn.addEventListener("click", () => {
    let color = getColor();
    while (content.style.backgroundColor == color) {
      color = getColor();
    }
    content.style.backgroundColor = color;
    colorValue.textContent = color;
  });
}

// add text to clipboard
colorValue.addEventListener("click", () => {
  navigator.clipboard.writeText(colorValue.textContent);
  alert("color copied");
});
