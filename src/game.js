import { Player } from './playerFactory';
import { renderGBoard, atkListener, placePieces, deRender } from './render';

const game = () => {

    const startBtn = document.querySelector('#startBtn');

    // let data;
    // let carrierX;
    // let carrierY;

    const onDragStart = (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        e.currentTarget.style.backgroundColor = 'green';
    }
    

    const carrierDrag = document.querySelector('#Carrier');
    carrierDrag.addEventListener('dragstart', onDragStart);
    const battleDrag = document.querySelector('#Battleship');
    battleDrag.addEventListener('dragstart', onDragStart);
    const destrDrag = document.querySelector('#Destroyer');
    destrDrag.addEventListener('dragstart', onDragStart);
    const subDrag = document.querySelector('#Submarine');
    subDrag.addEventListener('dragstart', onDragStart);
    const patrolDrag = document.querySelector('#PatrolBoat');
    patrolDrag.addEventListener('dragstart', onDragStart);

    //create player and computer player
    //populate gameboards for both players

    const playerArr = [
        Player("player1", true),
        Player("computer", false)
    ];

    renderGBoard(playerArr[0].board.gameBoard, 1);
    placePieces(playerArr[0].board);

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