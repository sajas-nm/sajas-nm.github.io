document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome To My Profile ");
  ToxProgress.create();
  AOS.init();
  console.log("_>>>", window.location.pathname);
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html" ||
    window.location.hash === "#home"
  ) {
    document.getElementById("index").classList.toggle("nav-active");
  }
});

var prevScrollPosition = window.pageYOffset;

const nav = document.getElementById("nav");
window.onscroll = () => {
  var currentScrollPosition = window.pageYOffset;

  if (prevScrollPosition < currentScrollPosition) {
    nav.classList.remove("bg-nav-transparent");
    nav.classList.add("bg-nav");
  }
  if (currentScrollPosition === 0) {
    nav.classList.remove("bg-nav");
    ToxProgress.create();
    nav.classList.add("bg-nav-transparent");
  }
  if (currentScrollPosition > 900) {
    setTimeout(() => {
      ToxProgress.animate();
    }, 2000);
  }
  // console.log(currentScrollPosition);
  prevScrollPosition = currentScrollPosition;
};

document.getElementById("list1").onmouseover = () => {
  document.getElementById("icon1").classList.add("is-hover");
};
document.getElementById("list1").onmouseout = () => {
  document.getElementById("icon1").classList.remove("is-hover");
};
document.getElementById("list2").onmouseover = () => {
  document.getElementById("icon2").classList.add("is-hover");
};
document.getElementById("list2").onmouseout = () => {
  document.getElementById("icon2").classList.remove("is-hover");
};
document.getElementById("list3").onmouseover = () => {
  document.getElementById("icon3").classList.add("is-hover");
};
document.getElementById("list3").onmouseout = () => {
  document.getElementById("icon3").classList.remove("is-hover");
};
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("show");
  menu.classList.toggle("show");
});
window.onhashchange = function () {
  let nav = document.querySelectorAll("#menu > li > a");
  nav.forEach((element, i) => {
    if (element.hash === window.location.hash) {
      element.classList.toggle("nav-active");
      hamburger.classList.toggle("show");
      menu.classList.toggle("show");
    } else {
      element.classList.remove("nav-active");
    }
  });
};
