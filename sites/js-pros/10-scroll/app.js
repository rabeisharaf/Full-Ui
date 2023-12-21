const navbtn = document.querySelector(".navbtn");
const navlinks = document.querySelector(".navlinks");
const links = document.querySelector(".links");
const links_a = document.querySelectorAll(".links a");
const nav = document.querySelector("nav");
const navlogo = document.querySelector(".navlogo");

// navbtn
navbtn.addEventListener("click", () => {
  let linksHight = links.getBoundingClientRect().height;
  let navlinksHight = navlinks.getBoundingClientRect().height;

  if (navlinksHight == 0) {
    navlinks.style.height = `${linksHight}px`;
  } else {
    navlinks.style.height = "0";
  }
});

// a action
links_a.forEach((item) => {
  item.addEventListener("click", (e) => {
    navlinks.style.height = "0px";
    e.preventDefault();
    const selectedItem = document.querySelector(
      `#${item.textContent.toLowerCase()}`
    );
    let selectedItemTop = selectedItem.offsetTop;
    if (nav.style.position == "fixed") {
      let navHeight = navlogo.getBoundingClientRect().height;
      let target = selectedItemTop - navHeight;
      window.scrollTo({ left: 0, top: target, behavior: "smooth" });
    } else {
      let navHeight = nav.getBoundingClientRect().height;
      let target = selectedItemTop - navHeight;
      window.scrollTo({ left: 0, top: target, behavior: "smooth" });
    }
  });
});

// nav Scroll
window.addEventListener("scroll", (e) => {
  let navHeight = nav.getBoundingClientRect().height;
  let windowScroll = window.pageYOffset;
  if (windowScroll > navHeight) {
    nav.style.position = "fixed";
  } else {
    nav.style.position = "static";
  }
});
