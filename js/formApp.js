import { addIconToFooter } from "./globalFunctions.js";

export const savedElements = [];

const save = (header, bodyText) => {
    console.log("save");
    const textArray = [header, bodyText];
    savedElements.push(textArray);
    console.log(savedElements);
};
export const formApp = (container) => {
    addIconToFooter("formApp");
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
        save(headerInput.value, entryInput.value);
        e.preventDefault();
        e.stopPropagation();
    });
};
