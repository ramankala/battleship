
const gameBoardFactory = () => {
    let gameBoard = [];
    const board = () => {
        for (let i = 0; i < 100; i++){
            gameBoard.push({hasShip: false, isShot: false});
        };
    };

    return {
        gameBoard,
        board,
    }
};

export { gameBoardFactory };