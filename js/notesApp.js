import { addIconToFooter } from "./globalFunctions.js";

export const notesApp = (container, savedElements) => {
    addIconToFooter("notesApp");
    for (let i = 0; i < savedElements.length; i++) {
        const header = document.createElement("h1");
        const headerText = document.createTextNode(savedElements[i][0]);
        header.appendChild(headerText);
        container.appendChild(header);

        const para = document.createElement("p");
        const paraText = document.createTextNode(savedElements[i][1]);
        para.appendChild(paraText);
        container.appendChild(para);
    }
};
