import { addImageAppClasses } from "./imageApp.js";
import { addNotesClasses } from "./notesApp.js";
import { addFormAppClasses } from "./formApp.js";
import { exitApp, minimiseApp, makeElement } from "./globalFunctions.js";
import { addIconToFooter } from "./footerFunctions.js";

const makeAppControl = (container, className, iconClass1, iconClass2) => {
    const controlContainer = document.createElement("div");
    controlContainer.classList.add(className);
    const sym = document.createElement("i");
    sym.classList.add(iconClass1, iconClass2);
    controlContainer.appendChild(sym);
    container.appendChild(controlContainer);
    return controlContainer;
};

export const makeAppBase = (classList, bodyTag) => {
    const classString = classList.value;
    const appContainer = makeElement(bodyTag, "app-container", "div");
    const newAppHead = makeElement(appContainer, "app-head", "div");
    const newAppTitle = makeElement(newAppHead, "app-head__title", "div");
    const newAppControls = makeElement(newAppHead, "app-head__controls", "div");
    const newAppBody = makeElement(appContainer, "app-body", "div");

    const minimiseContainer = makeAppControl(
        newAppControls,
        "app-head__controls--minimise",
        "fa-solid",
        "fa-window-minimize"
    );

    // needs no return as expand button non-functional
    makeAppControl(
        newAppControls,
        "app-head__controls--expand",
        "fa-regular",
        "fa-square"
    );

    const exitContainer = makeAppControl(
        newAppControls,
        "app-head__controls--exit",
        "fa-solid",
        "fa-xmark"
    );

    // add some event listeners
    exitContainer.addEventListener("click", (e) => {
        exitApp(appContainer, classString);
        e.stopPropagation();
    });
    minimiseContainer.addEventListener("click", (e) => {
        minimiseApp(appContainer);
        e.stopPropagation();
    });

    // select which app to complete further non-generic elements
    if (classString.includes("notes-app")) {
        addNotesClasses(
            appContainer,
            newAppBody,
            newAppHead,
            newAppControls,
            newAppTitle
        );
        addIconToFooter("notes-app");
    } else if (classString.includes("form-app")) {
        addFormAppClasses(
            appContainer,
            newAppBody,
            newAppHead,
            newAppControls,
            newAppTitle
        );
        addIconToFooter("form-app");
    } else if (classString.includes("image-app")) {
        addImageAppClasses(
            appContainer,
            newAppBody,
            newAppHead,
            newAppControls,
            newAppTitle
        );
        addIconToFooter("image-app");
    }
};
