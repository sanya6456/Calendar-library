"use strict";

import {
    renderDaysWrapper,
    renderMonthWrapper,
    renderYearWrapper,
    renderWeekdaysWrapper,
    activateMonth,
    activeWeekday,
    addBackground
} from "./views/month/function";
import { monthNames } from "./helpers/locale/data";
import { renderListView, renderListHeader } from "./views/list/function";
import { checkWindowResize } from "./views/mobile";

export default class NeoCalendar {
    constructor(selector, events, language) {
        this.selector = selector;
        this.events = events;
        this.el = null;

        this.firstInit = false;

        this.locale = language || "hu";

        this.date = {
            currentDay: new Date(),
            year: new Date().getUTCFullYear(),
            month: new Date().getMonth(),
            monthName: monthNames[new Date().getMonth()],
        };

        this.view = {
            month: true,
            list: false,
        };
    }
    setElement() {
        this.el = document.querySelector(this.selector);
    }
    get elem() {
        return this.el;
    }

    decreaseYear() {
        this.date.year--;
    }
    increaseYear() {
        this.date.year++;
    }

    updateOnChange() {
        this.el.innerHTML = "";
        return this.render();
    }

    listView() {
        this.view.list = true;
        this.view.month = false;
    }
    monthView() {
        this.view.list = false;
        this.view.month = true;
    }

    render() {
        this.setElement();
        return [
            checkScreenSize(this),
            this.el.append(...content(this)),
            activateMonth(this),
            activeWeekday(this),
            addBackground(this),
            checkWindowResize(this),
            monthViewButtonState(this),
        ];
    }
}

const content = (calendarInstance) => {
    let yearWrapper;
    let monthWrapper;
    let weekdaysWrapper;
    let daysWrapper;
    let listView;
    let listHeader;

    if (calendarInstance.view.month) {
        yearWrapper = renderYearWrapper(calendarInstance);
        monthWrapper = renderMonthWrapper(calendarInstance);
        weekdaysWrapper = renderWeekdaysWrapper(calendarInstance);
        daysWrapper = renderDaysWrapper(calendarInstance);
    }
    if (calendarInstance.view.list) {
        listHeader = renderListHeader(calendarInstance);
        listView = renderListView(calendarInstance);
    }

    return [
        yearWrapper != null ? yearWrapper : "",
        monthWrapper != null ? monthWrapper : "",
        weekdaysWrapper != null ? weekdaysWrapper : "",
        daysWrapper != null ? daysWrapper : "",
        listHeader != null ? listHeader : "",
        listView != null ? listView : "",
    ];
};

let checkScreenSize = (calendarInstance) => {

    let view = !calendarInstance.firstInit && (window.matchMedia("(min-width: 550px)").matches ? calendarInstance.monthView() : calendarInstance.listView());
    calendarInstance.firstInit = true;

    return view;
};

let monthViewButtonState = (calendarInstance) => {
    let btn = calendarInstance.el.querySelector(".list-wrapper .btn");
    return (
        (!window.matchMedia("(min-width: 550px)").matches &&
        btn) &&
        btn.remove()
    ); // Remove back to month view button on small screen
};
