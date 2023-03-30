import { addIconToFooter, exitApp } from "./globalFunctions.js";
import { savedElements } from "./formApp.js";

export const fillNotesApp = (container) => {
    // creates a new header and para element for each index in saved elements array

    for (let i = 0; i < savedElements.length; i++) {
        const header = document.createElement("h1");
        const headerText = document.createTextNode(savedElements[i][0]);
        header.appendChild(headerText);
        container.appendChild(header);

        const para = document.createElement("p");
        const paraText = document.createTextNode(savedElements[i][1]);
        para.appendChild(paraText);
        container.appendChild(para);
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

    addIconToFooter("notesApp");
    fillNotesApp(newAppBody);
};

// export const makeNotesApp = (classString, savedElements, bodyTag) => {
//     const appContainer = document.createElement("div");
//     appContainer.classList.add("app-container");
//     appContainer.classList.add("notes-app-container");
//     bodyTag.appendChild(appContainer);

//     const newAppBody = document.createElement("div");
//     newAppBody.classList.add("app-body");
//     newAppBody.classList.add("notes-app-container__body");
//     appContainer.appendChild(newAppBody);

//     const newAppHead = document.createElement("div");
//     newAppHead.classList.add("app-head");
//     newAppHead.classList.add("notes-app-container__head");
//     appContainer.appendChild(newAppHead);
//     const newAppControls = document.createElement("div");
//     newAppControls.classList.add("app-head__controls");
//     newAppControls.classList.add("notes-app-container__head--controls");
//     newAppHead.appendChild(newAppControls);
//     const exitContainer = document.createElement("p");
//     exitContainer.classList.add("app-head__controls--exit");
//     newAppControls.appendChild(exitContainer);
//     const exitSym = document.createTextNode("x");
//     exitContainer.appendChild(exitSym);

//     addIconToFooter("notesApp");
//     fillNotesApp(newAppBody, savedElements);
//     exitContainer.addEventListener("click", exitApp(appContainer, classString));
// };
