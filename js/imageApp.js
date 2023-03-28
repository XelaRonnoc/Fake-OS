import { addIconToFooter } from "./globalFunctions.js";

export const imageApp = (container) => {
    addIconToFooter("imageApp");
    const image = document.createElement("img");
    image.src = "http://placekitten.com/g/200/300";
    container.classList.add("open-image-app");
    container.appendChild(image);
};
