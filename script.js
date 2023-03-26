const menuButton = document.getElementById("menuButton");
const menuPopUp = document.getElementById("menuPopUp");
const appShortcuts = document.getElementsByClassName("app-shortcut");
const bodyTag = document.getElementsByTagName("body")[0];
// const appContainer = document.getElementById("appContainer");
// console.log(menuPopUp);
// console.log(menuButton);

// const openMenu = () => {};

menuButton.addEventListener("click", (e) => {
    menuPopUp.classList.toggle("foot-container__menu--hide");
    e.stopPropagation();
});

const exitApp = (app) => {
    return function () {
        console.log("exit");
        bodyTag.removeChild(app);
    };
};
const makeAppBase = (list) => {
    const appContainer = document.createElement("div");
    appContainer.classList.add("app-container");
    bodyTag.appendChild(appContainer);

    const newAppBody = document.createElement("div");
    newAppBody.classList.add("app-body");
    appContainer.appendChild(newAppBody);
    const innerItem = document.createElement("h1");
    const itemText = document.createTextNode(list);
    innerItem.appendChild(itemText);
    newAppBody.appendChild(innerItem);

    const newAppHead = document.createElement("div");
    newAppHead.classList.add("app-head");
    appContainer.appendChild(newAppHead);
    const newAppControls = document.createElement("div");
    newAppControls.classList.add("app-head__controls");
    newAppHead.appendChild(newAppControls);
    const exitContainer = document.createElement("p");
    exitContainer.classList.add("app-head__controls--exit");
    newAppControls.appendChild(exitContainer);
    const exitSym = document.createTextNode("X");
    exitContainer.appendChild(exitSym);

    exitContainer.addEventListener("click", exitApp(appContainer));
    return appContainer;
};

// const appContainer = makeAppBase();
// appContainer.addEventListener("click", exitApp(appContainer));

for (let i = 0; i < appShortcuts.length; i++) {
    appShortcuts[i].addEventListener("click", (e) => {
        makeAppBase(e.target.classList);
        console.log("app Opened");
    });
}

document.getElementsByTagName("body")[0].addEventListener("click", (e) => {
    e.stopPropagation();
    menuPopUp.classList.add("foot-container__menu--hide");
});
