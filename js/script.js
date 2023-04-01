import { initialiseDateTime } from "./dateTime.js";
import { openApp } from "./globalFunctions.js";

const menuButton = document.getElementById("menuButton");
const menuPopUp = document.getElementById("menuPopUp");
const appShortcuts = document.getElementsByClassName("app-shortcut");
const bodyTag = document.getElementsByTagName("body")[0];
const timeHolder = document.getElementById("time");
const dateHolder = document.getElementById("date");

menuButton.addEventListener("click", (e) => {
    menuPopUp.classList.toggle("foot-container__menu--hide");
    e.stopPropagation();
});

// adds an event listner to each icon in appShortcuts Array
for (let i = 0; i < appShortcuts.length; i++) {
    appShortcuts[i].addEventListener("click", (e) => {
        openApp(e.target.classList, bodyTag);
        console.log("app Opened");
    });
}

// makes windows menu pop uo
document.getElementsByTagName("body")[0].addEventListener("click", (e) => {
    menuPopUp.classList.add("foot-container__menu--hide");
    e.stopPropagation();
});

initialiseDateTime(timeHolder, dateHolder);
