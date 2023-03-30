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
    const form = document.createElement("form");
    form.classList.add("form-app-container__body--form");
    container.appendChild(form);

    const headerInput = document.createElement("input");
    headerInput.type = "text";
    headerInput.placeholder = "Reminder Title";
    form.appendChild(headerInput);

    const entryInput = document.createElement("textarea");
    entryInput.rows = 58;
    entryInput.placeholder = "Write Reminder text here";
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

const validate = (password) => {
    const check = "coolBeans";
    return password === check;
};

const formAppEntryValidation = (container) => {
    const form = document.createElement("form");
    form.classList.add("form-app-container__body--validation-form");
    form.autocomplete = "off";
    container.appendChild(form);

    const label = document.createElement("label");
    label.innerHTML = "Enter Password:";
    label.setAttribute("for", "passwordInput");
    form.appendChild(label);
    const passInput = document.createElement("input");
    passInput.id = "passwordInput";
    passInput.type = "password";
    passInput.placeholder = "Password";
    passInput.required = true;
    form.appendChild(passInput);

    const submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Login";
    form.appendChild(submit);

    console.log("try");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const valid = validate(passInput.value);
        if (valid) {
            form.style.display = "none";
            fillFormApp(container);
        } else {
            passInput.value = "";
            label.innerHTML = "Incorrect Password Please try again";
            label.style.paddingRight = "0px";
            label.style.color = "red";
        }
    });
};

export const addFormAppClasses = (
    appContainer,
    newAppBody,
    newAppHead,
    newAppControls,
    newAppTitle
) => {
    appContainer.classList.add("form-app-container");
    newAppBody.classList.add("form-app-container__body");
    newAppHead.classList.add("form-app-container__head");
    newAppControls.classList.add("form-app-container__head--controls");
    newAppTitle.classList.add("form-app-container__head--title");
    const titleImage = document.createElement("img");
    titleImage.src = "https://img.icons8.com/nolan/64/reminders.png";
    newAppTitle.appendChild(titleImage);
    const titleTextContainer = document.createElement("h2");
    const titleText = document.createTextNode("Reminders");
    titleTextContainer.appendChild(titleText);
    newAppTitle.appendChild(titleTextContainer);
    addIconToFooter("formApp");
    formAppEntryValidation(newAppBody);
};
