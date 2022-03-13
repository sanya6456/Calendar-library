import { dateToYMD, dateToYMDHM, datesBetweenTwo } from "../../src/js/helpers/functions";

test('It should be converted to year + month + days.', () => {
    expect(dateToYMD('1999-06-26T16:00:12')).toBe('1999.6.26');
});

test('It should be converted to year + month + days + hours + minutes.', () => {
    expect(dateToYMDHM('1999-06-26T00:00:00')).toBe('1999.06.26 00:00:00');
});

test('Get all dates between start and end.', () => {
    const expectArray = [new Date(1999,6,26), new Date(1999, 6, 27), new Date(1999,6,28)];

    expect(datesBetweenTwo(new Date(1999,6,26,16,0,12), new Date(1999,6,28,16,0,12)))
        .toStrictEqual(expectArray);
});
