window.addEventListener("load", start);

let ham = document.querySelector("#ham");
let btnClose = document.querySelector(".btn_close");
let hamMenu = document.querySelector("#ham_menu");

function start() {
  console.log("start");
  ham.addEventListener("click", openMenu);
  btnClose.addEventListener("click", closeMenu);
}

function openMenu() {
  console.log("openmenu");
  hamMenu.classList.remove("ham_menu_close");
  hamMenu.classList.add("ham_menu_open");
}

function closeMenu() {
  console.log("close menu");
  hamMenu.classList.remove("ham_menu_open");
  hamMenu.classList.add("ham_menu_close");
}
