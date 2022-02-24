import { shipFactory } from './shipFactory';

const gameBoardFactory = () => {
    let gameBoard = [];
    const board = () => {
        for (let i = 0; i < 10; i++){
            for (let j = 0; j < 10; j++){
                gameBoard.push([{hasShip: false, isShot: false}]);
            };
        };
        // return gameBoard.length;
    };

    const placeShip = (x, y, shipLength) => {
        // should be calling ship factory here
        for (let i = 0; i < x ; i++){
            for (let j = y; j < y + shipLength; j++){
                gameBoard.hasShip = true;
                return gameBoard.hasShip;
            }
        }
    }

    const viewShip = (x, y, shipLength) => {
        placeShip(x, y, shipLength);
        for (let i = 0; i < x; i++){
            for (let j = y; j < y + shipLength; j++){
                return gameBoard.hasShip;
            };
        };
    };

    return {
        gameBoard,
        board,
        placeShip,
        viewShip,
    }
};

export { gameBoardFactory };