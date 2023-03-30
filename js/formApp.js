import { addIconToFooter } from "./globalFunctions.js";

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

export const addFormAppClasses = (
    appContainer,
    newAppBody,
    newAppHead,
    newAppControls
) => {
    appContainer.classList.add("form-app-container");
    newAppBody.classList.add("form-app-container__body");
    newAppHead.classList.add("form-app-container__head");
    newAppControls.classList.add("form-app-container__head--controls");
    addIconToFooter("formApp");
    fillFormApp(newAppBody);
};
