const navbtn = document.querySelector(".navbtn");
const xbtn = document.querySelector(".xbtn");
const sidebar = document.querySelector(".sidebar");

navbtn.addEventListener("click", (e) => {
  sidebar.classList.toggle("showsidebar");
});
xbtn.addEventListener("click", (e) => {
  sidebar.classList.toggle("showsidebar");
});
