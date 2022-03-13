import {yearWrapper, monthWrapper, months} from "../../../src/js/views/month/components";

jest.mock('../../../src/js');

describe('Month view components', () => {
    describe('Year', () => {
        test('Wrapper', () => {
            const element = document.createElement('div');
            element.classList.add('year-wrapper');

            expect(yearWrapper()).toStrictEqual(element);
        });
    })

    describe('Month', () => {
        it('Wrapper', () => {
            const element = document.createElement("div");
            element.classList.add("months");

            expect(monthWrapper()).toStrictEqual(element);
        });
    })
})