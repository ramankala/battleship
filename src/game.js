import { Player } from './playerFactory';

const game = () => {

    //create player and computer player
    //populate gameboards for both players

    const playerArr = [
        Player("player1", true),
        Player("computer", false)
    ];

    playerArr[0].board.placeShip(2, 2, 5);
    playerArr[0].board.placeShip(8, 0, 4);
    playerArr[0].board.placeShip(6, 7, 3);
    playerArr[0].board.placeShip(5, 1, 3);
    playerArr[0].board.placeShip(1, 7, 2);
    console.log(playerArr[0].board.gameBoard);

    playerArr[1].board.placeShip(8, 1, 5);
    playerArr[1].board.placeShip(3, 5, 4);
    playerArr[1].board.placeShip(6, 3, 3);
    playerArr[1].board.placeShip(1, 1, 3);
    playerArr[1].board.placeShip(0, 6, 2);
    console.log(playerArr[1].board.gameBoard);




};

export { game };