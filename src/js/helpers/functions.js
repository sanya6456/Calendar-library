export function dateToYMD(string) {
    let dateObj = new Date(string);

    let year = dateObj.getUTCFullYear();
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();

    return year + '.' + month + '.' + day;
}

export function datesBetweenTwo(startDate, endDate) {
    let formattedStartDate = startDate.getFullYear() + ' ' + startDate.getMonth() + ' ' + startDate.getDate();
    let formattedEndDate = endDate.getFullYear() + ' ' + endDate.getMonth() + ' ' + endDate.getDate();

    const dates = [];

    if(formattedStartDate === formattedEndDate) {
        if(startDate.getHours() > 0 || startDate.getMinutes() > 0 || startDate.getSeconds() > 0) {
            let newStartDate = new Date(startDate.setDate(startDate.getDate() - 1));
            dates.push(newStartDate);
        } else {
            dates.push(startDate);
        }

        return dates;
    }

    // Strip hours minutes seconds etc.
    let currentDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()
    );

    while (currentDate <= endDate) {
        dates.push(currentDate);

        currentDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() + 1, // Will increase month if over range
        );
    }

    return dates;
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

export function dateToYMDHM(string) {
    let dateObj = new Date(string);

    return (
        [
            dateObj.getFullYear(),
            padTo2Digits(dateObj.getMonth() + 1),
            padTo2Digits(dateObj.getDate()),
        ].join('.') +
        ' ' +
        [
            padTo2Digits(dateObj.getHours()),
            padTo2Digits(dateObj.getMinutes()),
            padTo2Digits(dateObj.getSeconds()),
        ].join(':')
    )
}
