// variables
const _navbtn = document.querySelector(".navbtn");
const _navlinks = document.querySelector(".navlinks");
const _links = document.querySelector(".navlinks > div");
const _links_a = document.querySelectorAll(".navlinks .links a");

// actions
// methods
let showLinks = () => {
  let linksHeight = _links.getBoundingClientRect().height;
  let navlinksHeight = _navlinks.getBoundingClientRect().height;
  if (navlinksHeight != 0) {
    _navlinks.style.height = "0px";
  } else {
    _navlinks.style.height = `${linksHeight}px`;
  }
};
// navbtn
_navbtn.addEventListener("click", (e) => {
  showLinks();
});

// links
_links_a.forEach((item) => {
  item.addEventListener("click", (e) => {
    showLinks();
  });
});
