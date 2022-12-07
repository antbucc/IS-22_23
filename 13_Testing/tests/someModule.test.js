const conc = require('./someModule')
test('conc 2+2', () => {
    expect(conc(2, 2)).toBe('22');
});
test('concat test', () => {
    expect(conc('a', 'b')).toBe('ab');
});
test('concat null', () => {
    expect(conc(null, null)).toBe('nullnull');
});