const func = require('./func');

async function Test(){
    const test_1 = await Promise.all([
        test('Test function sum', () => {
            expect(func.sum(1,2)).toBe(3);
        }),
        test('Test function diff', () => {
            expect(func.diff(2,1)).toBe(1);
        }),
        test('Test function multiple', () => {
            expect(func.multi(2,1)).toBe(2);
        }),
        test('Test function devide', () => {
            expect(func.divide(2,1)).toBe(2);
        }),
    ])
    return test_1;
}

Test();