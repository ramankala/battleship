import { gameBoardFactory } from './gameBoardFactory';

test.skip('Test the gameboard has the right number of cells', () => {
    expect(gameBoardFactory().board()).toBe(100);
});
test('Testing that gameboard places ships are correct coordinates', () => {
    expect(gameBoardFactory().placeShip(2, 2, 4)).toBe(true);
});
test('Testing viewShip works', () => {
    expect(gameBoardFactory().viewShip(2, 2, 4)).toBe(true);
});
test('Testing that gameboard places ships in correct positions', () => {
    expect(gameBoardFactory().placeShip(2, 2, 4)).toBe(gameBoardFactory().viewShip(2, 2, 4));
});