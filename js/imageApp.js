import { addIconToFooter, exitApp } from "./globalFunctions.js";

// adds image to image app
export const fillImageApp = (container) => {
    const image = document.createElement("img");
    image.src = "http://placekitten.com/g/200/300";
    container.classList.add("open-image-app");
    container.appendChild(image);
};

export const addImageAppClasses = (
    appContainer,
    newAppBody,
    newAppHead,
    newAppControls
) => {
    appContainer.classList.add("image-app-container");
    newAppBody.classList.add("image-app-container__body");
    newAppHead.classList.add("image-app-container__head");
    newAppControls.classList.add("image-app-container__head--controls");
    addIconToFooter("imageApp");
    fillImageApp(newAppBody);
};
