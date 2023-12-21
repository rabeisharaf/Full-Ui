// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
let currentItem = 0;
const cardImg = document.querySelector(".card img");
const cardName = document.querySelector(".card .name");
const cardJob = document.querySelector(".card .job");
const cardInfo = document.querySelector(".card .info");
const randomBtn = document.querySelector(".btn");
const rightBtn = document.querySelector(".icons .right");
const leftBtn = document.querySelector(".icons .left");

// setNewValues
const setNewValues = (index) => {
  cardImg.src = reviews[index].img;
  cardName.textContent = reviews[index].name;
  cardJob.textContent = reviews[index].job;
  cardInfo.textContent = reviews[index].text;
};
// randomIndex
const randomIndex = () => Math.floor(Math.random() * reviews.length);

// default view
window.addEventListener("DOMContentLoaded", () => {
  setNewValues(currentItem);
});

// randomBtn
randomBtn.addEventListener("click", () => {
  let newItem = randomIndex();
  while (newItem == currentItem) {
    newItem = randomIndex();
  }
  currentItem = newItem;
  setNewValues(currentItem);
});

// leftBtn
leftBtn.addEventListener("click", () => {
  if (currentItem != 0) {
    currentItem--;
  } else {
    currentItem = reviews.length - 1;
  }
  setNewValues(currentItem);
});
// rightBtn
rightBtn.addEventListener("click", () => {
  if (currentItem != reviews.length - 1) {
    currentItem++;
  } else {
    currentItem = 0;
  }
  setNewValues(currentItem);
});
