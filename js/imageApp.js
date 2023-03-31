import { addIconToFooter, exitApp } from "./globalFunctions.js";

// adds image to image app
export const fillImageApp = (container) => {
    const gridHolder = document.createElement("div");
    container.appendChild(gridHolder);
    for (let i = 0; i < 9; i++) {
        const image = document.createElement("img");
        image.src = "http://placekitten.com/g/200/200";
        gridHolder.appendChild(image);
    }
};

export const addImageAppClasses = (
    appContainer,
    newAppBody,
    newAppHead,
    newAppControls,
    newAppTitle
) => {
    appContainer.classList.add("image-app-container");
    newAppBody.classList.add("image-app-container__body");
    newAppHead.classList.add("image-app-container__head");
    newAppControls.classList.add("image-app-container__head--controls");
    newAppTitle.classList.add("notes-app-container__head--title");
    // const titleImage = document.createElement("img");
    // titleImage.src = "https://img.icons8.com/nolan/64/pictures-folder.png";
    // newAppTitle.appendChild(titleImage);
    const titleTextContainer = document.createElement("h2");
    const titleText = document.createTextNode("Photos");
    titleTextContainer.appendChild(titleText);
    newAppTitle.appendChild(titleTextContainer);

    fillImageApp(newAppBody);
};
