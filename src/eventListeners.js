import {renderGBoard, deRender} from './render';
const start = (player1, player2) => {

    const gameContainer = document.querySelector('#gameContainer');
    const container2 = document.querySelector('#container2');
    const gamerTag = document.querySelector('#gamerTag');
    const computerTag = document.querySelector('#computerTag');
    const startBtn = document.querySelector('#startBtn');
    const alignBtn = document.querySelector('#alignBtn');

    deRender();
    renderGBoard(player1.board.gameBoard, 1);
    player2.board.placeHorizontal(8, 1, 5, 'Carrier');
    player2.board.placeVert(3, 7, 4, 'Battleship');
    player2.board.placeVert(4, 3, 3, 'Destroyer');
    player2.board.placeHorizontal(1, 1, 3, 'Submarine');
    player2.board.placeVert(1, 9, 2, 'Patrolboat');
    renderGBoard(player2.board.gameBoard, 2);
    gameContainer.style.gap = '17%';
    container2.style.display = 'flex';
    gamerTag.style.gap = '10%';
    computerTag.style.display = 'flex';
    startBtn.style.display = 'none';
    alignBtn.style.display = 'none';
    
}

const align = () => {
    const carrierDrag = document.querySelector('#Carrier');
    const battleDrag = document.querySelector('#Battleship');
    const destrDrag = document.querySelector('#Destroyer');
    const subDrag = document.querySelector('#Submarine');
    const patrolDrag = document.querySelector('#Patrolboat');

    if (carrierDrag.style.flexDirection === 'row'){
        carrierDrag.style.flexDirection = 'column';
        battleDrag.style.flexDirection = 'column';
        destrDrag.style.flexDirection = 'column';
        subDrag.style.flexDirection = 'column';
        patrolDrag.style.flexDirection = 'column';
        carrierDrag.setAttribute('data-alignment', 'column');
    } else {
        carrierDrag.style.flexDirection = 'row';
        battleDrag.style.flexDirection = 'row';
        destrDrag.style.flexDirection = 'row';
        subDrag.style.flexDirection = 'row';
        patrolDrag.style.flexDirection = 'row';
        carrierDrag.setAttribute('data-alignment', 'row');
    }
}

const onDragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.currentTarget.style.backgroundColor = 'green';
}

export { 
    start,
    align,
    onDragStart,
 };