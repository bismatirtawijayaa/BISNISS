// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika jualan menu di klik
document.querySelector("#jualan-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar site bar untuk keluar
const jualan = document.querySelector("#jualan-menu");

document.addEventListener("click", function (e) {
  if (!jualan.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
