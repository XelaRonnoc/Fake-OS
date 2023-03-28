const openIconContainer = document.getElementsByClassName(
    "foot-container__icons"
)[0];

export const addIconToFooter = (app) => {
    const iconToAdd = document.createElement("div");
    iconToAdd.classList.add("foot-container__icons--holder");
    const image = document.createElement("img");
    iconToAdd.appendChild(image);
    openIconContainer.appendChild(iconToAdd);
    switch (app) {
        case "formApp":
            iconToAdd.classList.add("form-app");
            image.src =
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original-wordmark.svg";
            break;

        case "imageApp":
            iconToAdd.classList.add("image-app");
            image.src =
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg";

            break;

        case "notesApp":
            iconToAdd.classList.add("notes-app");
            image.src =
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stylus/stylus-original.svg";
            break;
    }
};
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
