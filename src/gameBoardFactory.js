import { shipFactory } from './shipFactory';

const gameBoardFactory = () => {
    let gameBoard = [
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
    ];
    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            gameBoard[i][j] = ({hasShip: false, isShot: false});
        };
    };


    const placeShip = (x, y, shipLength) => {
        for (let i = 0; i < shipLength; i++){
            gameBoard[x][y].hasShip = true;
            y += 1;
        }
        return gameBoard;
    }

    const receiveAttack = (x, y) => {
        if (gameBoard[x][y].hasShip === true){
            gameBoard[x][y].isShot = true;
            return 'Hit';
        } else {
            gameBoard[x][y].isShot = true;
            return gameBoard;
        }
    };

    const allShipsSunk = (arr) => {
        const sunkenShips = arr.filter(ships => ships.isSunk());
        if (sunkenShips.length === arr.length){
            return true;
        } else {
            return false;
        }

    }

    return {
        gameBoard,
        placeShip,
        receiveAttack,
        allShipsSunk,
    }
};

export { gameBoardFactory };