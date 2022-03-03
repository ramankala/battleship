import { Player } from './playerFactory';
import { renderGBoard, atkListener } from './render';

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
    renderGBoard(playerArr[0].board.gameBoard, 1);

    playerArr[1].board.placeShip(8, 1, 5);
    playerArr[1].board.placeShip(3, 5, 4);
    playerArr[1].board.placeShip(6, 3, 3);
    playerArr[1].board.placeShip(1, 1, 3);
    playerArr[1].board.placeShip(0, 6, 2);
    console.log(playerArr[1].board.gameBoard);
    renderGBoard(playerArr[1].board.gameBoard, 2);

    atkListener(playerArr[0].board, 1);
    atkListener(playerArr[1].board, 2);
    //if atklistener returns true, hit the right ship
    //need to figure out how to hit the right ship in the back-end




};

export { game };