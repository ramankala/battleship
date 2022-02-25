import { gameBoardFactory } from './gameBoardFactory';

test('Test the gameboard has the right number of cells', () => {
    expect(gameBoardFactory().gameBoard).toEqual([
        (["", "", "", "", "", "", "", "", "", ""]),
        (["", "", "", "", "", "", "", "", "", ""]),
        (["", "", "", "", "", "", "", "", "", ""]),
        (["", "", "", "", "", "", "", "", "", ""]),
        (["", "", "", "", "", "", "", "", "", ""]),
        (["", "", "", "", "", "", "", "", "", ""]),
        (["", "", "", "", "", "", "", "", "", ""]),
        (["", "", "", "", "", "", "", "", "", ""]),
        (["", "", "", "", "", "", "", "", "", ""]),
        (["", "", "", "", "", "", "", "", "", ""]),
    ]);
});
test('Testing objects being pushed to each slot in gameboard', () => {
    expect(gameBoardFactory().board()).toEqual([
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
    ])
});
test('Testing that gameboard places ships are correct coordinates', () => {
    expect(gameBoardFactory().placeShip(2, 2, 4)).toEqual([
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: true, isShot: false}, {hasShip: true, isShot: false}, {hasShip: true, isShot: false}, {hasShip: true, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
    ]);
});
test('Testing gameboard correctly places ships at given coordinates(test 2)', () => {
    expect(gameBoardFactory().placeShip(3, 4, 4)).toEqual([
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: true, isShot: false}, {hasShip: true, isShot: false}, {hasShip: true, isShot: false}, {hasShip: true, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
    ]);
});

test('Testing receiveAttack takes coordinates and makes shot', () => {
    expect(gameBoardFactory().receiveAttack(2, 2)).toBe('Hit');
});
test('Testing receiveAttack takes coordinates and makes shot(test 2)', () => {
    expect(gameBoardFactory().receiveAttack(2, 4)).toBe('Hit');
});
test('Testing receiveAttack takes coordinates and misses shot', () => {
    expect(gameBoardFactory().receiveAttack(5, 5)).toEqual([
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: true, isShot: false}, {hasShip: true, isShot: false}, {hasShip: true, isShot: false}, {hasShip: true, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: true}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
        ([{hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}, {hasShip: false, isShot: false}]),
    ]);
});