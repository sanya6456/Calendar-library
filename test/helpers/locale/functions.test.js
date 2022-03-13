import {monthNames} from "../../../src/js/helpers/locale/functions";

test('It should return month names in Hungarian. (no fn parameter)', () => {
    const expectArray = ["jan", "febr", "márc", "ápr", "máj", "jún", "júl", "aug", "szept", "okt", "nov", "dec"];
    expect(monthNames()).toStrictEqual(expectArray);
});

test('It should return month names in Hungarian.', () => {
    const expectArray = ["jan", "febr", "márc", "ápr", "máj", "jún", "júl", "aug", "szept", "okt", "nov", "dec"];
    expect(monthNames('hu')).toStrictEqual(expectArray);
});

test('It should return month names in English.', () => {
    const expectArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    expect(monthNames('en')).toStrictEqual(expectArray);
});