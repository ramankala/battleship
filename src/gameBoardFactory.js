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
    const board = () => {
        for (let i = 0; i < 10; i++){
            for (let j = 0; j < 10; j++){
                gameBoard[i][j] = ({hasShip: false, isShot: false});
            };
        };
        return gameBoard;
    };


    const placeShip = (x, y, shipLength) => {
        // should be calling ship factory here
        board();
        for (let i = 0; i < shipLength; i++){
            gameBoard[x][y].hasShip = true;
            y += 1;
        }
        return gameBoard;
    }

    const receiveAttack = (x, y) => {
        placeShip(2, 2, 4);
        if (gameBoard[x][y].hasShip === true){
            return 'Hit';
        } else {
            return 'Miss';
        }
    };

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
        receiveAttack,
        viewShip,
        
    }
};

export { gameBoardFactory };