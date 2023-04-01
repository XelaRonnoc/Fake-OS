import { makeAppBase } from "./appCreation.js";
import { removeItemFromFooter, addIconToFooter } from "./footerFunctions.js";

export const makeElement = (container, className, elType) => {
    const appSection = document.createElement(elType);
    appSection.classList.add(className);
    container.appendChild(appSection);
    return appSection;
};

export const exitApp = (container, classString) => {
    const bodyTag = document.getElementsByTagName("body")[0];
    console.log("exit");
    bodyTag.removeChild(container);
    removeItemFromFooter(classString);
};

export const minimiseApp = (container) => {
    container.classList.add("hide");
    console.log("minimise");
};

export const openApp = (classList, bodyTag) => {
    const allAppsOpen = document.getElementsByClassName("app-container");
    const curAppClass = classList[classList.length - 1];
    const appsOfClass = document.getElementsByClassName(
        `${curAppClass}-container`
    );
    for (let i = 0; i < allAppsOpen.length; i++) {
        minimiseApp(allAppsOpen[i]);
    }
    if (appsOfClass.length === 0) {
        makeAppBase(classList, bodyTag);
    } else {
        appsOfClass[0].classList.remove("hide");
    }
};
