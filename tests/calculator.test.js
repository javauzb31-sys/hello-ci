// tests/calculator.test.js
const { add, subtract } = require('../src/calculator');

test('2 + 3 ni qo‘shganda 5 chiqishi kerak', () => {
    expect(add(2, 3)).toBe(5);
});

test('10 - 4 ni ayirganda 6 chiqishi kerak', () => {
    expect(subtract(10, 4)).toBe(6);
});

