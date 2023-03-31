import { addImageAppClasses } from "./imageApp.js";
import { addNotesClasses } from "./notesApp.js";
import { addFormAppClasses } from "./formApp.js";

const openIconContainer = document.getElementsByClassName(
    "foot-container__icons"
)[0];

//adds coresponding icons to the footer when an app is opened
export const addIconToFooter = (app) => {
    const iconToAdd = document.createElement("div");
    iconToAdd.classList.add("foot-container__icons--holder");
    const image = document.createElement("img");
    iconToAdd.appendChild(image);
    openIconContainer.appendChild(iconToAdd);
    switch (app) {
        case "form-app":
            iconToAdd.classList.add("form-app");
            image.src = "https://img.icons8.com/nolan/64/reminders.png";
            break;

        case "image-app":
            iconToAdd.classList.add("image-app");
            image.src = "https://img.icons8.com/nolan/64/pictures-folder.png";

            break;

        case "notes-app":
            iconToAdd.classList.add("notes-app");
            image.src = "https://img.icons8.com/nolan/64/windows-notepad.png";
            break;
    }

    iconToAdd.addEventListener("click", (e) => {
        const appClass = `${app}-container`;
        const appsOfClass = document.getElementsByClassName(appClass);
        appsOfClass[0].classList.remove("hide");
    });
};

//removes corresponding icon from footer when app closes
export const removeItemFromFooter = (classString) => {
    const reqString = classString.split(" ").filter((item) => {
        return (
            item === "form-app" || item === "image-app" || item === "notes-app"
        );
    });
    const iconArr = openIconContainer.childNodes;
    iconArr.forEach((item) => {
        const curClassString = item.classList.value;
        if (curClassString.includes(reqString)) {
            openIconContainer.removeChild(item);
        }
    });
};

export const exitApp = (container, classString) => {
    return function () {
        const bodyTag = document.getElementsByTagName("body")[0];
        console.log("exit");
        bodyTag.removeChild(container);
        removeItemFromFooter(classString);
    };
};

export const minimiseApp = (container) => {
    return function () {
        container.classList.add("hide");
        console.log("minimise");
    };
};

export const makeAppBase = (classList, bodyTag) => {
    const appContainer = document.createElement("div");
    appContainer.classList.add("app-container");
    bodyTag.appendChild(appContainer);

    const newAppHead = document.createElement("div");
    newAppHead.classList.add("app-head");
    appContainer.appendChild(newAppHead);

    const newAppTitle = document.createElement("div");
    newAppTitle.classList.add("app-head__title");
    newAppHead.appendChild(newAppTitle);

    const newAppControls = document.createElement("div");
    newAppControls.classList.add("app-head__controls");
    newAppHead.appendChild(newAppControls);

    const minimiseContainer = document.createElement("div");
    minimiseContainer.classList.add("app-head__controls--minimise");
    newAppControls.appendChild(minimiseContainer);
    const minimiseSym = document.createElement("i");
    minimiseSym.classList.add("fa-solid");
    minimiseSym.classList.add("fa-window-minimize");
    minimiseContainer.appendChild(minimiseSym);

    const expandContainer = document.createElement("div");
    expandContainer.classList.add("app-head__controls--expand");
    newAppControls.appendChild(expandContainer);
    const expandSym = document.createElement("i");
    expandSym.classList.add("fa-regular");
    expandSym.classList.add("fa-square");
    expandContainer.appendChild(expandSym);

    const exitContainer = document.createElement("div");
    exitContainer.classList.add("app-head__controls--exit");
    newAppControls.appendChild(exitContainer);
    const exitSym = document.createElement("i");
    exitSym.classList.add("fa-solid");
    exitSym.classList.add("fa-xmark");
    exitContainer.appendChild(exitSym);

    const newAppBody = document.createElement("div");
    newAppBody.classList.add("app-body");
    appContainer.appendChild(newAppBody);

    const classString = classList.value;
    exitContainer.addEventListener("click", exitApp(appContainer, classString));
    minimiseContainer.addEventListener("click", minimiseApp(appContainer));
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

export const openApp = (classList, bodyTag) => {
    const appClass = classList[classList.length - 1];
    const appsOfClass = document.getElementsByClassName(
        `${appClass}-container`
    );
    if (appsOfClass.length === 0) {
        makeAppBase(classList, bodyTag);
    } else {
        appsOfClass[0].classList.remove("hide");
    }
};
