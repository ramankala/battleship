import { Player } from './playerFactory';
import { shipFactory } from './shipFactory';

test.skip('Testing players can take turns playing the game', () => {
    expect(Player().toggle()).toBe(true);
});
test('Testing players boards displays', () => {
    expect(Player().board.gameBoard).toEqual([
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
    ]);
});
