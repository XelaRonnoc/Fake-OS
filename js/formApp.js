import { addIconToFooter, exitApp } from "./globalFunctions.js";

export const savedElements = [];

// saves what is entered in the form to the savedElements array
const save = (header, bodyText) => {
    console.log("save");
    const textArray = [header, bodyText];
    savedElements.push(textArray);
    console.log(savedElements);
};

// creates a form object that allows for entering of header and paragraph that can be saved into the notes app
export const fillFormApp = (container) => {
    console.log("chrome");
    const form = document.createElement("form");
    form.classList.add("form-container");
    container.appendChild(form);

    const headerInput = document.createElement("input");
    headerInput.type = "text";
    headerInput.placeholder = "Entry Header";
    form.appendChild(headerInput);

    const entryInput = document.createElement("textarea");
    form.appendChild(entryInput);
    const saveBtn = document.createElement("button");
    const btnText = document.createTextNode("Save");
    saveBtn.appendChild(btnText);
    saveBtn.value = "save";

    form.appendChild(saveBtn);
    saveBtn.addEventListener("click", (e) => {
        // change this to submit instead of click
        save(headerInput.value, entryInput.value);
        e.preventDefault();
        e.stopPropagation();
    });
};

export const makeFormApp = (classString, bodyTag) => {
    const appContainer = document.createElement("div");
    appContainer.classList.add("app-container");
    appContainer.classList.add("form-app-container");
    bodyTag.appendChild(appContainer);

    const newAppBody = document.createElement("div");
    newAppBody.classList.add("app-body");
    newAppBody.classList.add("form-app-container__body");
    appContainer.appendChild(newAppBody);

    const newAppHead = document.createElement("div");
    newAppHead.classList.add("app-head");
    newAppHead.classList.add("form-app-container__head");
    appContainer.appendChild(newAppHead);
    const newAppControls = document.createElement("div");
    newAppControls.classList.add("app-head__controls");
    newAppControls.classList.add("form-app-container__head--controls");
    newAppHead.appendChild(newAppControls);
    const exitContainer = document.createElement("p");
    exitContainer.classList.add("app-head__controls--exit");
    newAppControls.appendChild(exitContainer);
    const exitSym = document.createTextNode("x");
    exitContainer.appendChild(exitSym);

    addIconToFooter("formApp");
    fillFormApp(newAppBody);
    exitContainer.addEventListener("click", exitApp(appContainer, classString));
};
