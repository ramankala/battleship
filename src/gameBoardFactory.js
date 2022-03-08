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
            gameBoard[i][j] = ({hasShip: false, isShot: false, shipLength: 0, shipType: 'n/a', xPoint: 0, yPoint: 0});
        };
    };


    const placeShip = (x, y, shipLength, shipType) => {
        for (let i = 0; i < shipLength; i++){
            gameBoard[x][y].hasShip = true;
            gameBoard[x][y].shipLength = shipLength;
            gameBoard[x][y].shipType = shipType;
            gameBoard[x][y].xPoint = x;
            gameBoard[x][y].yPoint = y;
            y += 1;
        }
        return gameBoard;
    }

    const receiveAttack = (x, y) => {
        if (gameBoard[x][y].hasShip === true){
            gameBoard[x][y].isShot = true;
            console.log(gameBoard);
            return 'Hit';
        } else {
            gameBoard[x][y].isShot = true;
            console.log(gameBoard);
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