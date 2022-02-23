import { gameBoardFactory } from './gameBoardFactory';

test.skip('Test the gameboard has the right number of cells', () => {
    expect(gameBoardFactory().board()).toBe(100);
});
test.skip('Testing that gameboard places ships are correct coordinates', () => {
    expect(gameBoardFactory.placeShip(2, 2, 4)).toBe(true);
});