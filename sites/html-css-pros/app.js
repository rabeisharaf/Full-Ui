// variables
const _navbtn = document.querySelector(".navbtn");
const _navlinks = document.querySelector(".navlinks");
const _links = document.querySelector(".navlinks > div");
const _links_a = document.querySelectorAll(".navlinks .links a");

// local storage
const sites = document.querySelector(".body .sites");
const items = [
  {
    id: 1,
    link: "./1-color-fliper/index.html",
    img: "../../assets/color-fliper.PNG",
    name: "color fliper",
  },
  {
    id: 2,
    link: "./2-counter/index.html",
    img: "../../assets/counter.PNG",
    name: "counter",
  },
  {
    id: 3,
    link: "./3-task-manager/index.html",
    img: "../../assets/task-manager.PNG",
    name: "task manager",
  },
  {
    id: 4,
    link: "./4-reviews/index.html",
    img: "../../assets/reviews.PNG",
    name: "reviews",
  },
  {
    id: 5,
    link: "./5-navbar/index.html",
    img: "../../assets/navbar.PNG",
    name: "navbar",
  },
  {
    id: 6,
    link: "./6-sidebar/index.html",
    img: "../../assets/sidebar.PNG",
    name: "sidebar",
  },
  {
    id: 7,
    link: "./7-modal/index.html",
    img: "../../assets/modal.PNG",
    name: "modal",
  },
  {
    id: 8,
    link: "./8-questions/index.html",
    img: "../../assets/questions.PNG",
    name: "questions",
  },
  {
    id: 9,
    link: "./9-menu/index.html",
    img: "../../assets/menu.PNG",
    name: "menu",
  },
  {
    id: 10,
    link: "./10-grocery-bud/index.html",
    img: "../../assets/grocery-bud.PNG",
    name: "grocery bud",
  },
];
const newItems = items.map((item) => {
  return `<a href="${item.link}" target="_blank">
  <div class="card">
    <img src="${item.img}" alt="${item.name}" />
    <caption>
      ${item.name}
    </caption>
  </div>
</a>`;
});
sites.innerHTML = newItems.join("");
// end of local storage

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

// set local storage
