// Year
import {monthNames} from "../../helpers/locale/functions";
import {monthNames as dataMonthNames} from "../../helpers/locale/data";
import {getDaysInMonth, selectMonth} from "./function";
import {weekdays as weekdaysData} from "../../helpers/locale/data";
import {weekdaysNames} from "../../helpers/locale/functions";

export const yearWrapper = () => {
    const yearWrapper = document.createElement("div");
    yearWrapper.classList.add("year-wrapper");

    return yearWrapper;
};

export const arrowLeft = (calendarInstance) => {
    let arrowLeft = document.createElement("div");
    arrowLeft.innerHTML = `<svg class="arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/></svg>`;

    arrowLeft.addEventListener("click", () => {
        calendarInstance.decreaseYear();
        calendarInstance.updateOnChange();
    });

    return arrowLeft;
};

export const year = (calendarInstance) => {
    const currentYear = document.createElement("div");
    currentYear.classList.add("year");
    currentYear.innerHTML = calendarInstance.date.year.toString();

    return currentYear;
};

export const arrowRight = (calendarInstance) => {
    let arrowRight = document.createElement("div");
    arrowRight.innerHTML = `<svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>`;

    arrowRight.addEventListener("click", () => {
        calendarInstance.increaseYear();
        calendarInstance.updateOnChange();
    });

    return arrowRight;
};

// Month
export const monthWrapper = () => {
    const monthsWrapper = document.createElement("div");
    monthsWrapper.classList.add("months");

    return monthsWrapper;
};

export const months = (calendarInstance, i) => {
    let month = document.createElement("div");
    month.classList.add("month");
    month.setAttribute("data-value", `${dataMonthNames[i]}`);
    month.addEventListener("click", (e) => selectMonth(calendarInstance, e.target.getAttribute("data-value")));
    month.innerHTML = monthNames(calendarInstance.locale)[i];

    return month;
};

// Weekdays
export const weekdaysWrapper = () => {
    // create days-wrapper
    let WW = document.createElement("div");
    WW.classList.add("days");
    WW.classList.add("days-of-week");

    return WW;
};

export const weekdays = (calendarInstance, i) => {
    let weekday = document.createElement("div");
    weekday.classList.add("day");
    weekday.setAttribute("data-value", `${weekdaysData[i]}`);
    weekday.innerHTML = weekdaysNames(calendarInstance.locale)[i];

    return weekday;
};

// Days
export const daysWrapper = () => {
    const calendarBodyEl = document.createElement("div");
    calendarBodyEl.classList.add("body");
    calendarBodyEl.classList.add("calendar-body");

    return calendarBodyEl;
};

export const daysComponent = (calendarInstance) => {
    return getDaysInMonth(calendarInstance.date.month + 1, calendarInstance.date.year)
        .map((day) => `<div class="day" data-value="${day}">${day.getDate()}</div>`)
        .join("");
}

// Empty days
export const emptyDay = () => {
    let div = document.createElement("div");
    div.classList.add("day");
    div.classList.add("empty-day");

    return div;
};
