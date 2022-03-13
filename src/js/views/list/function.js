import {listItem, listWrapper, monthViewButton, noEventsDay} from "./components";
import {datesBetweenTwo, dateToYMD} from "../../helpers/functions";
import {
    listHeaderDay, listHeaderDayName,
    listHeaderMonth,
    listHeaderWrapper,
    listHeaderYear,
    arrowLeft,
    arrowRight
} from "./components";

// Render list header
export const renderListHeader = (calendarInstance) => {
    let LHW = listHeaderWrapper();

    calendarInstance.el.append(LHW);

    LHW.append(arrowLeft(calendarInstance));
    LHW.append(listHeaderYear(calendarInstance));
    LHW.append(listHeaderMonth(calendarInstance));
    LHW.append(listHeaderDay(calendarInstance));
    LHW.append(listHeaderDayName(calendarInstance));
    LHW.append(arrowRight(calendarInstance));

    return LHW;
};

// Render list wrapper
export const renderListView = (calendarInstance) => {
    let LW = listWrapper();

    for (let i = 0; i < calendarInstance.events.data.length; i++) {
        // Get dates between start date and end date
        let dates = datesBetweenTwo(new Date(calendarInstance.events.data[i].start_date), new Date(calendarInstance.events.data[i].end_date));

        dates.length > 1 && dates.sort((a, b) => {return a.getTime() - b.getTime()}); // sort these

        // Filter events on clicked day
        let foundEvent = dates.find(
            (date) => dateToYMD(date) === dateToYMD(calendarInstance.date.currentDay)
        );

        foundEvent && LW.append(listItem(calendarInstance, i)); // Generate list items
    }

    LW.children.length < 1 && LW.append(noEventsDay()); // no events text

    LW.append(monthViewButton(calendarInstance)); // back button

    return LW;
};
