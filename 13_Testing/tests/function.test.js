const { calculateValue } = require('./function');

//first
/*
describe('test-coverage test suite', () => {

    test('tests something', () => {
    });

});
*/

// second
/*
describe('test-coverage test suite', () => {
    test('calculateValue test 1', () => {
        expect(calculateValue(10, 20).value).toBe(30);
    });
});

*/

// third

/*
describe('test-coverage test suite', () => {
    test('calculateValue test 1', () => {
        const result = calculateValue(10, 20);
        expect(result.value).toBe(30);
        expect(result.message).toBe(null);
    });
});

*/

// full example

/*
describe('test-coverage test suite', () => {

    test('calculateValue test 1', () => {
        const result = calculateValue(10, 20);
        expect(result.value).toBe(30);
        expect(result.message).toBe(null);
    });

    test('calculateValue test 2', () => {
        const result = calculateValue(100, 20);
        expect(result.value).toBe(120);
        expect(result.message).toBe('Warning: result is greater then 100');
    });

    test('calculateValue test 3', () => {
        const result = calculateValue(100, 20, true);
        expect(result.value).toBe(130);
        expect(result.message).toBe('Warning: result is greater then 100');
    });

    test('calculateValue test 4', () => {
        const result = calculateValue(100, 20, false, false);
        expect(result.value).toBe(120);
        expect(result.message).toBe('result is greater then 100');
    });

});
*/