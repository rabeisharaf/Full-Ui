const icon = document.querySelectorAll(".icon");
const infocontainer = document.querySelectorAll(".infocontainer");

icon.forEach((item) => {
  item.addEventListener("click", (e) => {
    let _info = item.parentElement.parentElement.querySelector(".info");
    let _infocontainer =
      item.parentElement.parentElement.querySelector(".infocontainer");
    let infoHeight = _info.getBoundingClientRect().height;
    let infocontainerHeight = _infocontainer.getBoundingClientRect().height;
    if (item.textContent == "+") {
      if (infocontainerHeight == 0)
        infocontainer.forEach((container) => (container.style.height = "0px"));
      icon.forEach((icon) => (icon.textContent = "+"));
      _infocontainer.style.height = `${infoHeight}px`;
      e.target.textContent = "-";
    } else {
      _infocontainer.style.height = `0px`;
      item.textContent = "+";
    }
  });
});
