let menuBar = document.querySelector(".menuBar");
menuBar.addEventListener("click", openNavBar);

function openNavBar() {
  menuBar.classList.toggle("active");

  let utility = document.querySelector(".utility");
  utility.classList.toggle("open");
  if (utility.classList.contains("open")) {
    utility.style.maxHeight = utility.scrollHeight + "px";
  } else {
    utility.removeAttribute("style");
  }
}
