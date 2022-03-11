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


    const placeHorizontal = (x, y, shipLength, shipType) => {
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
    const placeVert = (x, y, shipLength, shipType) => {
        for (let i = 0; i < shipLength; i++){
            gameBoard[x][y].hasShip = true;
            gameBoard[x][y].shipLength = shipLength;
            gameBoard[x][y].shipType = shipType;
            gameBoard[x][y].xPoint = x;
            gameBoard[x][y].yPoint = y;
            x += 1;
        }
        return gameBoard;
    }

    const scout = (x, y, shipLength, alignment) => {
        let report = false;
        if (alignment === 'row'){
            for (let i = 0; i < shipLength; i++){
                let analysis = gameBoard[x][y].hasShip;
                if ( analysis === true ){
                    report = true; 
                }
                y += 1;
            }
        }
        else {
            for (let i = 0; i < shipLength; i++){
                let analysis = gameBoard[x][y].hasShip;
                if (analysis === true){
                    report = true; 
                }
                x += 1;
            }
        }
        return report;
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
        placeHorizontal,
        placeVert,
        receiveAttack,
        allShipsSunk,
        scout,
    }
};

export { gameBoardFactory };