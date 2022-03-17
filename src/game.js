import { Player } from './playerFactory';
import { renderGBoard, placePieces } from './render';
import { atkListener } from './attacks';
import { start, align, onDragStart } from './eventListeners';

const game = () => {

    const startBtn = document.querySelector('#startBtn');
    const alignBtn = document.querySelector('#alignBtn');
    const resetBtn = document.querySelector('#resetBtn');
    const carrierDrag = document.querySelector('#Carrier');
    const battleDrag = document.querySelector('#Battleship');
    const destrDrag = document.querySelector('#Destroyer');
    const subDrag = document.querySelector('#Submarine');
    const patrolDrag = document.querySelector('#Patrolboat');
    carrierDrag.style.flexDirection = 'row';
    carrierDrag.setAttribute('data-alignment', 'row');

    const playerArr = [
        Player("player1", true),
        Player("computer", false)
    ];

    carrierDrag.addEventListener('dragstart', onDragStart);
    battleDrag.addEventListener('dragstart', onDragStart);
    destrDrag.addEventListener('dragstart', onDragStart);
    subDrag.addEventListener('dragstart', onDragStart);
    patrolDrag.addEventListener('dragstart', onDragStart);

    renderGBoard(playerArr[0].board.gameBoard, 1);

    alignBtn.addEventListener('click', align);

    placePieces(playerArr[0]);

    startBtn.addEventListener('click', function(){
        start(playerArr[0], playerArr[1]);
        atkListener(playerArr[0], playerArr[1], 2);
    });

    resetBtn.addEventListener('click', function(){
        window.location.reload();
    })

};

export { game };