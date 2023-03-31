import { addIconToFooter, exitApp } from "./globalFunctions.js";
import { savedElements } from "./formApp.js";

export const fillNotesApp = (container) => {
    // creates a new header and para element for each index in saved elements array

    if (savedElements.length === 0) {
        const placeHolder = document.createElement("h1");
        placeHolder.classList.add("placeholder");
        const placeholderText = document.createTextNode(
            "No Notes have been saved"
        );
        placeHolder.appendChild(placeholderText);
        container.appendChild(placeHolder);
    } else {
        for (let i = 0; i < savedElements.length; i++) {
            const log = document.createElement("div");
            const header = document.createElement("h1");
            const headerText = document.createTextNode(savedElements[i][0]);
            header.appendChild(headerText);

            const para = document.createElement("p");
            const paraText = document.createTextNode(savedElements[i][1]);
            para.appendChild(paraText);

            log.appendChild(header);
            log.appendChild(para);
            container.appendChild(log);
        }
    }
};

export const addNotesClasses = (
    appContainer,
    newAppBody,
    newAppHead,
    newAppControls,
    newAppTitle
) => {
    appContainer.classList.add("notes-app-container");
    newAppBody.classList.add("notes-app-container__body");
    newAppHead.classList.add("notes-app-container__head");
    newAppControls.classList.add("notes-app-container__head--controls");
    newAppTitle.classList.add("notes-app-container__head--title");
    const titleImage = document.createElement("img");
    titleImage.src = "https://img.icons8.com/nolan/64/windows-notepad.png";
    newAppTitle.appendChild(titleImage);
    const titleTextContainer = document.createElement("h2");
    const titleText = document.createTextNode("Untitled - Notepad");
    titleTextContainer.appendChild(titleText);
    newAppTitle.appendChild(titleTextContainer);

    fillNotesApp(newAppBody);
};
