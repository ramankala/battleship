import { Player } from './playerFactory';
import { renderGBoard, atkListener, placePieces, deRender } from './render';

const game = () => {

    const startBtn = document.querySelector('#startBtn');
    const alignBtn = document.querySelector('#alignBtn');
    const carrierDrag = document.querySelector('#Carrier');
    const battleDrag = document.querySelector('#Battleship');
    const destrDrag = document.querySelector('#Destroyer');
    const subDrag = document.querySelector('#Submarine');
    const patrolDrag = document.querySelector('#PatrolBoat');
    carrierDrag.classList.add('horizontal');
    battleDrag.classList.add('horizontal');
    destrDrag.classList.add('horizontal');
    subDrag.classList.add('horizontal');
    patrolDrag.classList.add('horizontal');
    carrierDrag.style.flexDirection = 'row';
    carrierDrag.setAttribute('data-alignment', 'row');

    const playerArr = [
        Player("player1", true),
        Player("computer", false)
    ];

    const onDragStart = (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        e.currentTarget.style.backgroundColor = 'green';
    }

    carrierDrag.addEventListener('dragstart', onDragStart);
    battleDrag.addEventListener('dragstart', onDragStart);
    destrDrag.addEventListener('dragstart', onDragStart);
    subDrag.addEventListener('dragstart', onDragStart);
    patrolDrag.addEventListener('dragstart', onDragStart);

    renderGBoard(playerArr[0].board.gameBoard, 1);

    alignBtn.addEventListener('click', function(){
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

    })

    placePieces(playerArr[0].board);

    //create player and computer player
    //populate gameboards for both players
    // placePieces(playerArr[0].board, align);

    startBtn.addEventListener('click', function(){
        deRender();
        // console.log(playerArr[0].board.gameBoard);
        renderGBoard(playerArr[0].board.gameBoard, 1);
        renderGBoard(playerArr[1].board.gameBoard, 2);
        atkListener(playerArr[0], playerArr[1], 2);
        atkListener(playerArr[1], playerArr[0], 2);
    });

};

export { game };