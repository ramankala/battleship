import { gameBoardFactory } from './gameBoardFactory';
import { shipFactory } from './shipFactory';

const Player = (name, isActive = false) => {

    let pos5 = 0;
    let pos4 = 0;
    let pos3 = 0;
    let pos2 = 0;
    let pos1 = 0;

    let flag1 = false;
    let flag2 = false;
    let flag3 = false;
    let flag4 = false;
    let flag5 = false;

    let carrier = shipFactory(5);
    let battleship = shipFactory(4);
    let destroyer = shipFactory(3);
    let submarine = shipFactory(3);
    let patrolBoat = shipFactory(2);
    
    let state = {
        name,
        isActive,
    }
    let board = gameBoardFactory();

    let ships = [carrier, battleship, destroyer, submarine, patrolBoat];

    const enemyMove = () => {
        let x = Math.floor((Math.random() * 10));
        let y = Math.floor((Math.random() * 10));

        return [x, y];
    }
    let pos = [pos5, pos4, pos3, pos2, pos1];

    let flag = [flag1, flag2, flag3, flag4, flag5];

    return {
        get name(){return state.name;},
        get isActive(){return state.isActive;},
        toggle(){ state.isActive = !state.isActive;},
        board,
        ships,
        enemyMove,
        pos,
        flag,
    }
};

export { Player };