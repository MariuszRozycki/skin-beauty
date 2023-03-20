const hamburgerMenu = document.querySelector("#hamburger-menu");
const navMainList = document.querySelector(".nav-main_list");
const navMain = document.querySelector(".nav-main");
const logoParagraph = document.querySelector(".logo p");
const barOne = document.querySelector("#bar-one");
const barTwo = document.querySelector("#bar-two");
const barThree = document.querySelector("#bar-three");
const modal = document.querySelector(".modal");

hamburgerMenu.addEventListener("click", () => {
  navMainList.classList.toggle("show");
  navMain.classList.toggle("background-action");
  modal.classList.toggle("modal-on");
  barOne.classList.toggle("bar-one");
  barTwo.classList.toggle("bar-two");
  barThree.classList.toggle("bar-three");
  logoParagraph.classList.toggle("hamburger-on");

  document.addEventListener("click", function (event) {
    if (
      event.target.matches(".modal")
    ) {
      closeModal()
    }
  },
    false
  )

  function closeModal() {
    modal.classList.remove("modal-on");;
    navMainList.classList.remove("show");
    barOne.classList.remove("bar-one");
    barTwo.classList.remove("bar-two");
    barThree.classList.remove("bar-three");
    navMain.classList.remove("background-action");
    logoParagraph.classList.remove("hamburger-on");
  }
});