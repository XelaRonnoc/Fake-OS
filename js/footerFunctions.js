import { minimiseApp, makeElement } from "./globalFunctions.js";

//adds coresponding icons to the footer when an app is opened

export const addIconToFooter = (app) => {
    const openIconContainer = document.getElementsByClassName(
        "foot-container__icons"
    )[0];
    const iconToAdd = makeElement(
        openIconContainer,
        "foot-container__icons--holder",
        "div"
    );
    const image = makeElement(iconToAdd, "icons__holder--image", "img");

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
        e.stopPropagation();
        const appClass = `${app}-container`;
        const appsOfClass = document.getElementsByClassName(appClass);
        const allAppsOpen = document.getElementsByClassName("app-container");
        for (let i = 0; i < allAppsOpen.length; i++) {
            minimiseApp(allAppsOpen[i]);
        }
        appsOfClass[0].classList.remove("hide");
    });
};

//removes corresponding icon from footer when app closes
export const removeItemFromFooter = (classString) => {
    const openIconContainer = document.getElementsByClassName(
        "foot-container__icons"
    )[0];
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
