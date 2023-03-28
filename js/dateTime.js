export const updateDateTime = (container) => {
    const innerDiv = document.createElement("div");
    innerDiv.id = "dateTime";
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let curHour = date.getHours();
    let curMin = date.getMinutes();
    let ampm = "AM";

    // changes to 12 hour time and adds leading 0s
    if (curHour > 12) {
        curHour = curHour - 12;
        ampm = "PM";
    }
    if (curMin < 10) {
        curMin = "0" + curMin;
    }
    const time = curHour + ":" + curMin + " " + ampm;
    const timeContainer = document.createElement("p");
    const timeText = document.createTextNode(time);
    timeContainer.appendChild(timeText);
    innerDiv.appendChild(timeContainer);

    //adds leading 0s to date
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    const curDate = `${day}/${month}/${year}`;
    const dateContatiner = document.createElement("p");
    const dateText = document.createTextNode(curDate);
    dateContatiner.appendChild(dateText);
    innerDiv.appendChild(dateContatiner);

    container.appendChild(innerDiv);
};
