const LINK = document.getElementById("lang");

const onChangeLang = function (e) {
  if (e.target.textContent === "en") {
    e.target.textContent = "ru";
  } else {
    e.target.textContent = "en";
  }
};

LINK.addEventListener("click", onChangeLang);

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  if (menuBtn.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
