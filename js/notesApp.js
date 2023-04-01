import { savedElements } from "./formApp.js";
import { makeElement } from "./globalFunctions.js";

const referenceArray = [
    '<a target="_blank" href="https://icons8.com/icon/XTwDewtklGCW/reminders">Reminders icon by Icons8</a>',
    '<a target="_blank" href="https://icons8.com/icon/52562/pictures-folder">Pictures Folder icon by Icons8</a>',
    '<a target="_blank" href="https://icons8.com/icon/JrInpv4e05vK/windows-notepad">Windows Notepad icon by Icons8</a>',
    '<a target="_blank" href="https://icons8.com/icon/wUAGUBXx2syB/office-365">Office 365 icon by Icons8</a>',
    '<a target="_blank" href="https://icons8.com/icon/48184/microsoft-word">Microsoft Word icon by Icons8</a>',
    '<a target="_blank" href="https://icons8.com/icon/oLry165Qopkd/microsoft-edge">Microsoft Edge icon by Icons8</a>',
    '<a target="_blank" href="https://icons8.com/icon/5CLSNos6pTuq/doom-logo">Doom Logo icon by Icons8</a>',
    '<a target="_blank" href="https://icons8.com/icon/44029/music">Music icon by Icons8</a>',
    '<a target="_blank" href="https://icons8.com/icon/q729jEheSR92/knight">Knight icon by Icons8</a>',
    '<a target="_blank" href="https://icons8.com/icon/69442/dropbox">Dropbox icon by Icons8</a>',
    '<a target="_blank" href="https://icons8.com/icon/2a1IfE0f2djh/shop-local">Shop Local icon by Icons8</a>',
    '<a target="_blank" href="https://icons8.com/icon/44826/clapperboard">Clapperboard icon by Icons8</a>',
    '<a target="_blank" href="https://icons8.com/icon/43655/restart">Restart icon by Icons8</a>',
    '<a target="_blank" href="https://icons8.com/icon/43681/protect">Protect icon by Icons8</a>',
    '<a target="_blank" href="https://icons8.com/icon/44037/plus">Plus icon by Icons8</a>',
];

export const fillNotesApp = (container) => {
    // creates a new header and para element for each index in saved elements array
    const references = makeElement(container, "reference-list", "div");
    const refHeader = makeElement(references, "reference-header", "h1");
    refHeader.innerHTML = "References";

    const refPara = document.createElement("ul");
    for (let i = 0; i < referenceArray.length; i++) {
        refPara.innerHTML += "<li>" + referenceArray[i];
        ("</li>");
    }
    references.appendChild(refPara);

    for (let i = 0; i < savedElements.length; i++) {
        const log = makeElement(container, "logs", "div");
        const header = makeElement(log, "log-header", "h1");
        header.innerHTML = savedElements[i][0];
        const para = makeElement(log, "log-para", "p");
        para.innerHTML = savedElements[i][1];
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

    const titleImage = makeElement(newAppTitle, "title-image", "img");
    titleImage.src = "https://img.icons8.com/nolan/64/windows-notepad.png";

    const titleTextContainer = makeElement(newAppTitle, "-title-text", "h2");
    titleTextContainer.innerHTML = "References - Notepad";

    fillNotesApp(newAppBody);
};
