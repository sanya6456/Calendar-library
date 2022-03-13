export function monthNames(locale) {
    let monthNamesShort;
    switch (locale) {
        case 'hu':
            monthNamesShort = require('./data').shortMonthNamesHu;
            break;
        case 'en':
            monthNamesShort = require('./data').shortMonthNamesEn;
            break;
        default:
            monthNamesShort = require('./data').shortMonthNamesHu;
    }

    return monthNamesShort;
}

export function weekdaysNames(locale) {
    let weekdaysNamesShort;
    switch (locale) {
        case 'hu':
            weekdaysNamesShort = require('./data').shortWeekdaysNamesHu;
            break;
        case 'en':
            weekdaysNamesShort = require('./data').shortWeekdaysNamesEn;
            break;
        default:
            weekdaysNamesShort = require('./data').shortWeekdaysNamesHu;
    }

    return weekdaysNamesShort;
}

export function weekdaysNamesFull(locale) {
    let weekdaysNamesFull;
    switch (locale) {
        case 'hu':
            weekdaysNamesFull = require('./data').fullWeekdaysNamesHu;
            break;
        case 'en':
            weekdaysNamesFull = require('./data').fullWeekdaysNamesEn;
            break;
        default:
            weekdaysNamesFull = require('./data').fullWeekdaysNamesHu;
    }

    return weekdaysNamesFull;
}

export function monthNamesFull(locale) {
    let monthNamesFull;
    switch (locale) {
        case 'hu':
            monthNamesFull = require('./data').fullMonthNamesHu;
            break;
        case 'en':
            monthNamesFull = require('./data').fullMonthNamesEn;
            break;
        default:
            monthNamesFull = require('./data').fullMonthNamesHu;
    }

    return monthNamesFull;
}
