import {
    yearWrapper,
    year,
    arrowLeft,
    arrowRight,
    monthWrapper,
    daysWrapper,
    daysComponent,
    emptyDay, weekdaysWrapper, weekdays
} from "./components";
import {months as allMonths} from "./components";
import {weekdays as weekdaysData, monthNames} from "../../helpers/locale/data";
import {datesBetweenTwo, dateToYMD} from "../../helpers/functions";

// get all days of month
export function getDaysInMonth(month, year) {
    return new Array(31)
        .fill("")
        .map((v, i) => new Date(year, month - 1, i + 1))
        .filter((v) => v.getMonth() === month - 1);
}

export const renderYearWrapper = (calendarInstance) => {
    let YW = yearWrapper();
    YW.append(arrowLeft(calendarInstance));
    YW.append(year(calendarInstance));
    YW.append(arrowRight(calendarInstance));

    return YW;
}

export const renderMonthWrapper = (calendarInstance) => {
    let MW = monthWrapper();

    // Add months to wrapper
    for (let i = 0; i < 12; i++) {
        MW.append(allMonths(calendarInstance, i));
    }

    return MW;
}

export const selectMonth = (calendarInstance, month) => {

    return [
        calendarInstance.date.monthName = month,
        calendarInstance.date.month = monthNames.indexOf(calendarInstance.date.monthName),
        getDaysInMonth(calendarInstance.date.month + 1, calendarInstance.date.year),
        addBackground(calendarInstance),
        calendarInstance.updateOnChange()
    ]
}

export const renderWeekdaysWrapper = (calendarInstance) => {
    let WW = weekdaysWrapper();

    // Add weekdays to wrapper
    for (let i = 0; i < weekdaysData.length; i++) {
        WW.append(weekdays(calendarInstance, i));
    }

    return WW;
}

export const renderDaysWrapper = (calendarInstance) => {
    let DW = daysWrapper();
    DW.innerHTML = daysComponent(calendarInstance);

    let days = DW.querySelectorAll(".calendar-body .day");
    days.forEach((day) =>
        day.addEventListener("click", (e) => {
            calendarInstance.date.currentDay = e.target.getAttribute("data-value");
            calendarInstance.view.month = false;
            calendarInstance.view.list = true;
            calendarInstance.updateOnChange();
        })
    );

    // Add empty days
    for (let i = 0; i < getDaysInMonth(calendarInstance.date.month + 1, calendarInstance.date.year)[0].getDay() - 1; i++) {
        DW.prepend(emptyDay());
    }

    return DW;
}

// Set current month active
export const activateMonth = (calendarInstance) => {
    let monthsWrapper = calendarInstance.el.querySelector(".months");
    if (monthsWrapper) {
        let monthsOfYear = monthsWrapper.querySelectorAll(".month");
        return monthsOfYear.forEach((month) => {
            let monthAttr = month.getAttribute("data-value");
            monthAttr === calendarInstance.date.monthName ? month.classList.add("active") : month.classList.remove("active");
        });
    }
}

// Set current weekday active
export const activeWeekday = (calendarInstance) => {
    let daysWrapper = calendarInstance.el.querySelector(".days-of-week");
    if (daysWrapper) {
        let daysOfWeek = daysWrapper.querySelectorAll(".day");
        return daysOfWeek.forEach((day) => {
            let dayAttr = day.getAttribute("data-value");
            dayAttr === weekdaysData[new Date().getDay() - 1] ? day.classList.add("active") : day.classList.remove("active");
        });
    }
};

export function eventGroup(group) {
    let groupOptions = {
        backgroundColor: `rgba(179, 138, 32, 0.25)`,
    };

    switch (group) {
        case 1:
            groupOptions.backgroundColor = `#bee0ec`;
            break;
        case 2:
            groupOptions.backgroundColor = `#bcdf92`;
            break;
        default:
            groupOptions.backgroundColor = `rgba(179, 138, 32, 0.25)`;
    }

    return groupOptions;
}

// Add background color to days with event(s)
export const addBackground = (calendarInstance) => {
    let calBody = calendarInstance.el.querySelector(".calendar-body");
    if (calBody) {
        let days = calBody.querySelectorAll(".day");
        let eventsLength = calendarInstance.events.data.map((ev) => {return datesBetweenTwo(new Date(ev.start_date), new Date(ev.end_date))});

        return days.forEach((day) => {
            let loopEvents = eventsLength.flatMap((event) => {return event});

            let result = loopEvents.find((ev) => {
                return dateToYMD(ev) === dateToYMD(day.getAttribute("data-value"));
            });

            if (result) {
                if (dateToYMD(result) === dateToYMD(day.getAttribute("data-value"))) {
                    day.classList.add("has-event");
                    if (day.classList.contains("has-event")) day.style.backgroundColor = eventGroup().backgroundColor;
                }
            }
        });
    }
}
