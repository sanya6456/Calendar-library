import { dateToYMDHM } from "../../helpers/functions";
import {monthNamesFull, weekdaysNamesFull} from "../../helpers/locale/functions";

// List header
export const listHeaderWrapper = () => {
    let wrapper = document.createElement("div");
    wrapper.classList.add("list-header-wrapper");

    return wrapper;
};

export const listHeaderYear = (calendarInstance) => {
    let year = document.createElement("h3");
    year.classList.add("year");
    year.innerHTML = `${new Date(calendarInstance.date.currentDay).getUTCFullYear() + ' '}`;

    return year;
};

export const listHeaderMonth = (calendarInstance) => {
    let month = document.createElement("h3");
    month.classList.add("month");
    month.innerHTML = `${
        monthNamesFull(calendarInstance.locale)[new Date(calendarInstance.date.currentDay).getMonth()] + ' '
    }`;

    return month;
};

export const listHeaderDay = (calendarInstance) => {
    let day = document.createElement("h3");
    day.classList.add("day");
    day.innerHTML = `${new Date(calendarInstance.date.currentDay).getDate() + ' '}`;

    return day;
};

export const listHeaderDayName = (calendarInstance) => {
    let dayName = document.createElement("h3");
    dayName.classList.add("day-name");
    dayName.innerHTML = `${
        weekdaysNamesFull(calendarInstance.locale)[new Date(calendarInstance.date.currentDay).getDay()]
    }`;

    return dayName;
};

export const arrowLeft = (calendarInstance) => {
    let arrowLeft = document.createElement("div");
    arrowLeft.classList.add('arrow-left-block');
    arrowLeft.innerHTML = `<svg class="arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/></svg>`;

    arrowLeft.addEventListener("click", () => {
        let date = new Date(calendarInstance.date.currentDay);
        calendarInstance.date.currentDay = new Date(date.setDate(date.getDate() - 1));

        calendarInstance.view.month = false;
        calendarInstance.view.list = true;
        calendarInstance.updateOnChange()
    });

    return arrowLeft;
};

export const arrowRight = (calendarInstance) => {
    let arrowRight = document.createElement("div");
    arrowRight.classList.add('arrow-right-block');
    arrowRight.innerHTML = `<svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>`;

    arrowRight.addEventListener("click", () => {
        let date = new Date(calendarInstance.date.currentDay);
        calendarInstance.date.currentDay = new Date(date.setDate(date.getDate() + 1));

        calendarInstance.view.month = false;
        calendarInstance.view.list = true;
        calendarInstance.updateOnChange()
    });

    return arrowRight;
};

// List wrapper
export const listWrapper = () => {
    let listWrapper = document.createElement("ul");
    listWrapper.classList.add("list-wrapper");

    return listWrapper;
};

export const listItem = (calendarInstance, i) => {
    let listItem = document.createElement("li");
    listItem.classList.add("list-item");

    if (calendarInstance.events.data[i].hasOwnProperty("url") && calendarInstance.events.data[i].url != null) {
        listItem.innerHTML = `<a class="list-item-name" href="${calendarInstance.events.data[i].url}">${
            calendarInstance.events.data[i].name
        }</a>
        <div class="list-item-date">${dateToYMDHM(calendarInstance.events.data[i].start_date)} ${
            calendarInstance.events.data[i].end_date != null &&
            "- " + dateToYMDHM(calendarInstance.events.data[i].end_date)
        }</div>`;
    } else {
        listItem.innerHTML = `
            <div class="list-item-name">${calendarInstance.events.data[i].name}</div>
            <div class="list-item-date">${dateToYMDHM(calendarInstance.events.data[i].start_date)} ${
            calendarInstance.events.data[i].end_date != null &&
            "- " + dateToYMDHM(calendarInstance.events.data[i].end_date)
        }</div>`;
    }

    return listItem;
};

export const noEventsDay = () => {
    let title = document.createElement("h4");
    title.classList.add("no-events-text");
    title.innerHTML = `${appVar["no-events-on-this-day"] || "Nincsenek események ezen a napon!"}`;

    return title;
};

export const monthViewButton = (calendarInstance) => {
    let button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.classList.add("mt-4");
    button.innerHTML = `${appVar["back"] || "Vissza"}`;

    calendarInstance.monthView();
    button.addEventListener("click", () => calendarInstance.updateOnChange());

    return button;
};
