
const gameBoardFactory = () => {
    let gameBoard = [];
    const board = () => {
        for (let i = 0; i < 10; i++){
            for (let j = 0; j < 10; j++){
                gameBoard.push({hasShip: false, isShot: false});
            };
        };
    };

    return {
        gameBoard,
        board,
    }
};

export { gameBoardFactory };