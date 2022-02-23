import { shipFactory } from './shipFactory';

test('Testing ship length to verify it is as expected', () => {
    expect(shipFactory(1).length).toBe(1);
});
test('Testing ship length to verify it is as expected', () => {
    expect(shipFactory(2).length).toBe(2);
});
test('Testing ship length to verify it is as expected', () => {
    expect(shipFactory(3).length).toBe(3);
});
test('Testing ship length to verify it is as expected', () => {
    expect(shipFactory(4).length).toBe(4);
});
test('Testing position on ship is marked as hit', () => {
    expect(shipFactory(4).hit(2)).toBe('hit');
});
test.skip('Testing function to check whether ship is sunk', () => {
    expect(shipFactory(4).isSunk()).toBe(true);
});
test.skip('Testing function to check whether ship is sunk', () => {
    expect(shipFactory(5).isSunk()).toBe(false);
});