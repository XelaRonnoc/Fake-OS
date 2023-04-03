import { makeElement } from "./globalFunctions.js";

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
    container.style.justifyContent = "initial";
    const form = makeElement(
        container,
        "form-app-container__body--form",
        "form"
    );

    const headerInput = makeElement(form, "", "input");
    headerInput.type = "text";
    headerInput.placeholder = "Reminder Title";

    const entryInput = makeElement(form, "", "textarea");
    entryInput.rows = 20; // 58 = full at 1000px
    entryInput.placeholder = "Write Reminder text here";

    const saveBtn = makeElement(form, "", "input");
    saveBtn.type = "submit";
    saveBtn.value = "save";
    form.addEventListener("submit", (e) => {
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
    container.style.justifyContent = "center";
    const form = makeElement(
        container,
        "form-app-container__body--validation-form",
        "form"
    );
    form.autocomplete = "off";

    const label = makeElement(form, "", "label");
    label.innerHTML = "Enter Password:";
    label.setAttribute("for", "passwordInput");

    const passInput = makeElement(form, "", "input");
    passInput.id = "passwordInput";
    passInput.type = "password";
    passInput.placeholder = "Password";
    passInput.required = true;

    const submit = makeElement(form, "", "input");
    submit.type = "submit";
    submit.value = "Login";

    form.addEventListener("submit", (e) => {
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
        e.preventDefault();
        e.stopPropagation();
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

    const titleImage = makeElement(newAppTitle, "", "img");
    titleImage.src = "https://img.icons8.com/nolan/64/reminders.png";
    const titleTextContainer = makeElement(newAppTitle, "", "h2");
    titleTextContainer.innerHTML = "Reminders";
    formAppEntryValidation(newAppBody);
};
