export const initialiseDateTime = (timeHolder, dateHolder) => {
    const dateTimeObj = updateTime();
    timeHolder.innerHTML = dateTimeObj["time"];
    dateHolder.innerHTML = dateTimeObj["date"];
    setTimeout(() => {
        initialiseDateTime(timeHolder, dateHolder);
    }, 1000);
};

const updateTime = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let curHour = date.getHours();
    let curMin = date.getMinutes();
    let ampm = "AM";
    if (curHour > 12) {
        curHour = curHour - 12;
        ampm = "PM";
    }
    if (curMin < 10) {
        curMin = "0" + curMin;
    }
    if (month < 10) {
        month = "0" + month;
    }

    const dateTimeObj = {
        date: `${day}/${month}/${year}`,
        time: curHour + ":" + curMin + " " + ampm,
    };
    return dateTimeObj; // return an object with date and time that can be passed into the divs to update the time
};
