export const imageApp = (container) => {
    const image = document.createElement("img");
    image.src = "http://placekitten.com/g/200/300";
    container.classList.add("image-app");
    container.appendChild(image);
};
