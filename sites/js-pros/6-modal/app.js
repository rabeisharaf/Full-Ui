const modalbtn = document.querySelector(".modalbtn");
const xbtn = document.querySelector(".xbtn");
const modalContent = document.querySelector(".content");

modalbtn.addEventListener("click", (e) => {
  modalContent.classList.toggle("showcontent");
});
xbtn.addEventListener("click", (e) => {
  modalContent.classList.toggle("showcontent");
});
