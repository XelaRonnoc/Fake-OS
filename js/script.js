import { updateDateTime } from "./dateTime.js";
import { notesApp } from "./notesApp.js";
import { imageApp } from "./imageApp.js";
import { formApp } from "./formApp.js";
import { savedElements } from "./formApp.js";

const menuButton = document.getElementById("menuButton");
const menuPopUp = document.getElementById("menuPopUp");
const appShortcuts = document.getElementsByClassName("app-shortcut");
const bodyTag = document.getElementsByTagName("body")[0];
const dateTimeContatiner = document.getElementsByClassName(
    "foot-container__time"
)[0];

menuButton.addEventListener("click", (e) => {
    menuPopUp.classList.toggle("foot-container__menu--hide");
    e.stopPropagation();
});

const exitApp = (app) => {
    return function () {
        console.log("exit");
        bodyTag.removeChild(app);
    };
};

const makeAppBase = (list) => {
    const classString = list.value;
    console.log(classString);
    const appContainer = document.createElement("div");
    appContainer.classList.add("app-container");
    bodyTag.appendChild(appContainer);

    const newAppBody = document.createElement("div");
    newAppBody.classList.add("app-body");
    appContainer.appendChild(newAppBody);

    const newAppHead = document.createElement("div");
    newAppHead.classList.add("app-head");
    appContainer.appendChild(newAppHead);
    const newAppControls = document.createElement("div");
    newAppControls.classList.add("app-head__controls");
    newAppHead.appendChild(newAppControls);
    const exitContainer = document.createElement("p");
    exitContainer.classList.add("app-head__controls--exit");
    newAppControls.appendChild(exitContainer);
    const exitSym = document.createTextNode("X");
    exitContainer.appendChild(exitSym);

    exitContainer.addEventListener("click", exitApp(appContainer));

    if (classString.includes("chrome")) {
        formApp(newAppBody);
    } else if (classString.includes("stylus")) {
        notesApp(newAppBody, savedElements);
    } else if (classString.includes("unity")) {
        imageApp(newAppBody);
    }
};

for (let i = 0; i < appShortcuts.length; i++) {
    appShortcuts[i].addEventListener("click", (e) => {
        makeAppBase(e.target.classList);
        console.log("app Opened");
    });
}

document.getElementsByTagName("body")[0].addEventListener("click", (e) => {
    e.stopPropagation();
    menuPopUp.classList.add("foot-container__menu--hide");
});

updateDateTime(dateTimeContatiner);
