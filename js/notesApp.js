import { addIconToFooter, exitApp } from "./globalFunctions.js";
import { savedElements } from "./formApp.js";

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

    const references = document.createElement("div");
    const refHeader = document.createElement("h1");
    const refHeaderText = document.createTextNode("References");
    refHeader.appendChild(refHeaderText);

    const refPara = document.createElement("ul");
    for (let i = 0; i < referenceArray.length; i++) {
        refPara.innerHTML += "<li>" + referenceArray[i];
        ("</li>");
    }
    references.appendChild(refHeader);
    references.appendChild(refPara);
    container.appendChild(references);

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
        // }
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
    const titleText = document.createTextNode("References - Notepad");
    titleTextContainer.appendChild(titleText);
    newAppTitle.appendChild(titleTextContainer);

    fillNotesApp(newAppBody);
};
