import { addIconToFooter, exitApp } from "./globalFunctions.js";

export const fillNotesApp = (container, savedElements) => {
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

export const makeNotesApp = (classString, savedElements, bodyTag) => {
    const appContainer = document.createElement("div");
    appContainer.classList.add("app-container");
    appContainer.classList.add("notes-app-container");
    bodyTag.appendChild(appContainer);

    const newAppBody = document.createElement("div");
    newAppBody.classList.add("app-body");
    newAppBody.classList.add("notes-app-container__body");
    appContainer.appendChild(newAppBody);

    const newAppHead = document.createElement("div");
    newAppHead.classList.add("app-head");
    newAppHead.classList.add("notes-app-container__head");
    appContainer.appendChild(newAppHead);
    const newAppControls = document.createElement("div");
    newAppControls.classList.add("app-head__controls");
    newAppControls.classList.add("notes-app-container__head--controls");
    newAppHead.appendChild(newAppControls);
    const exitContainer = document.createElement("p");
    exitContainer.classList.add("app-head__controls--exit");
    newAppControls.appendChild(exitContainer);
    const exitSym = document.createTextNode("x");
    exitContainer.appendChild(exitSym);

    addIconToFooter("notesApp");
    fillNotesApp(newAppBody, savedElements);
    exitContainer.addEventListener("click", exitApp(appContainer, classString));
};
