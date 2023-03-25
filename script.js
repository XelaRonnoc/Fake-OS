const menuButton = document.getElementById("menuButton");
const menuPopUp = document.getElementById("menuPopUp");
// console.log(menuPopUp);
// console.log(menuButton);

const openMenu = () => {
    menuPopUp.classList.toggle("foot-container__menu--hide");
    console.log(menuPopUp);
};

menuButton.addEventListener("click", openMenu);
