import { addIconToFooter, exitApp } from "./globalFunctions.js";

// adds image to image app
export const fillImageApp = (container) => {
    addIconToFooter("imageApp");
    const image = document.createElement("img");
    image.src = "http://placekitten.com/g/200/300";
    container.classList.add("open-image-app");
    container.appendChild(image);
};

export const makeImageApp = (classString, bodyTag) => {
    const appContainer = document.createElement("div");
    appContainer.classList.add("app-container");
    appContainer.classList.add("image-app-container");
    bodyTag.appendChild(appContainer);

    const newAppBody = document.createElement("div");
    newAppBody.classList.add("app-body");
    newAppBody.classList.add("image-app-container__body");
    appContainer.appendChild(newAppBody);

    const newAppHead = document.createElement("div");
    newAppHead.classList.add("app-head");
    newAppHead.classList.add("image-app-container__head");
    appContainer.appendChild(newAppHead);
    const newAppControls = document.createElement("div");
    newAppControls.classList.add("app-head__controls");
    newAppControls.classList.add("image-app-container__head--controls");
    newAppHead.appendChild(newAppControls);
    const exitContainer = document.createElement("p");
    exitContainer.classList.add("app-head__controls--exit");
    newAppControls.appendChild(exitContainer);
    const exitSym = document.createTextNode("x");
    exitContainer.appendChild(exitSym);

    addIconToFooter("imageApp");
    fillImageApp(newAppBody);
    exitContainer.addEventListener("click", exitApp(appContainer, classString));
};
