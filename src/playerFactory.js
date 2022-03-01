import { gameBoardFactory } from './gameBoardFactory';
import { shipFactory } from './shipFactory';

const Player = (name, isActive = false) => {

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

    return {
        get name(){return state.name;},
        get isActive(){return state.isActive;},
        toggle(){ state.isActive = !state.isActive;},
        board,
        ships,
    }
};

export { Player };