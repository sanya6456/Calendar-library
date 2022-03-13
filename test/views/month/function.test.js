import {getDaysInMonth} from "../../../src/js/views/month/function";

describe('Month view functions', () => {
    it('should return all days of month', () => {
        const daysInMonth = getDaysInMonth(6,2022);
        let firstValue = daysInMonth[0].toString();
        let lastValue =  daysInMonth[daysInMonth.length - 1].toString();

        expect(daysInMonth[0].toString()).toBe(firstValue);
        expect(daysInMonth[29].toString()).toContain(lastValue);
        expect(daysInMonth).toHaveLength(30);
    });
});