const navbtn = document.querySelector(".navbtn");
const navLinks = document.querySelector(".navlinks");
const links = document.querySelector(".links");

navbtn.addEventListener("click", (e) => {
  let linksHeight = links.getBoundingClientRect().height;
  let navlinksHeight = navLinks.getBoundingClientRect().height;
  if (navlinksHeight == 0) {
    navLinks.style.height = `${linksHeight}px`;
  } else {
    navLinks.style.height = `0px`;
  }
});
