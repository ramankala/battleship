import { Player } from './playerFactory';

test.skip('Testing players can take turns playing the game', () => {
    expect(Player().toggle()).toBe(true);
});