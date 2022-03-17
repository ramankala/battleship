import {winMsg} from './winnerMsg';
const atkListener = (player, enemy, num) => {
    let gameBoard = enemy.board;
    let ships = enemy.ships;
    let response = document.getElementsByClassName(`atkDiv${num}`);
    let isShot;
    let yPoint;
    let xPoint;
    let shipLength;
    let shipType;

    for (let i = 0; i < response.length; i++){
        response[i].addEventListener('click', function(e) {

            if (player.isActive === true) {
                yPoint = e.target.getAttribute('data-y-coord');
                xPoint = e.target.getAttribute('data-x-coord');
                isShot = gameBoard.gameBoard[xPoint][yPoint].isShot;
                shipLength = gameBoard.gameBoard[xPoint][yPoint].shipLength;
                shipType = gameBoard.gameBoard[xPoint][yPoint].shipType;

                if (isShot === false) {
                    if (e.target.getAttribute('data-has-ship') === 'true'){
                        e.target.style.backgroundColor = 'red';
                    } else {
                        e.target.style.backgroundColor = 'grey';
                    }
                    let message = gameBoard.receiveAttack(xPoint, yPoint);
        
                    if (shipType == 'Carrier') {
                        
                        let hitShip = ships.filter(ship => ship.length == shipLength);
                        hitShip[0].hit(enemy.pos[0]);
                        enemy.pos[0] += 1;
                    } else if (shipType == 'Battleship') {
                        
                        let hitShip = ships.filter(ship => ship.length == shipLength);
                        hitShip[0].hit(enemy.pos[1]);
                        enemy.pos[1] += 1;
                    } else if (shipType == 'Destroyer') {
                        
                        let hitShip = ships.filter(ship => ship.length == shipLength);
                        hitShip[0].hit(enemy.pos[2]);
                        enemy.pos[2] += 1;
                    } else if (shipType == 'Submarine') {
                        
                        let hitShip = ships.filter(ship => ship.length == shipLength);
                        hitShip[1].hit(enemy.pos[3]);
                        enemy.pos[3] += 1;
                    } else if (shipType == 'Patrolboat') {
                        
                        let hitShip = ships.filter(ship => ship.length == shipLength);
                        hitShip[0].hit(enemy.pos[4]);
                        enemy.pos[4] += 1;
                    }
                    if (gameBoard.allShipsSunk(ships) === true) {
                        winMsg('Player');
                        player.toggle();
                        return;
                    }
                    if (player.board.allShipsSunk(player.ships) === true) {
                        winMsg('Computer');
                        enemy.toggle();
                        return;
                    }
                    if (message !== 'Hit'){
                        player.toggle();
                        enemy.toggle();
                    }
                    let coordinates = player.enemyMove();
                    enemyAttack(player, enemy, coordinates[0], coordinates[1]);
                } else {
                    // Do nothing
                }
            } else {
                // Do nothing
            }
        });
    };
};

const enemyAttack = (player, enemy, x, y) => {
    let gameBoard = player.board;
    let ships = player.ships;
    let isShot = gameBoard.gameBoard[x][y].isShot;;
    let hasShip = gameBoard.gameBoard[x][y].hasShip;
    let shipLength = gameBoard.gameBoard[x][y].shipLength;
    let shipType = gameBoard.gameBoard[x][y].shipType;
    let panel;
    if (x === 0){
        panel = y;
    } else {
        panel = '' + x + y;
    }
    let squareDiv = document.getElementsByClassName('atkDiv1')[panel];  


    if (enemy.isActive === true) {

        if (isShot === false) {
            if (hasShip === true){
                squareDiv.style.backgroundColor = 'red';
            } else {
                squareDiv.style.backgroundColor = 'grey';
            }
            let message = gameBoard.receiveAttack(x, y);

            if (shipType == 'Carrier') {
                
                let hitShip = ships.filter(ship => ship.length == shipLength);
                hitShip[0].hit(player.pos[0]);
                player.pos[0] += 1;
            } else if (shipType == 'Battleship') {
                
                let hitShip = ships.filter(ship => ship.length == shipLength);
                hitShip[0].hit(player.pos[1]);
                player.pos[1] += 1;
            } else if (shipType == 'Destroyer') {
                
                let hitShip = ships.filter(ship => ship.length == shipLength);
                hitShip[0].hit(player.pos[2]);
                player.pos[2] += 1;
            } else if (shipType == 'Submarine') {
                
                let hitShip = ships.filter(ship => ship.length == shipLength);
                hitShip[1].hit(player.pos[3]);
                player.pos[3] += 1;
            } else if (shipType == 'Patrolboat') {
                
                let hitShip = ships.filter(ship => ship.length == shipLength);
                hitShip[0].hit(player.pos[4]);
                player.pos[4] += 1;
            }
            if (gameBoard.allShipsSunk(ships) === true) {
                winMsg('Computer');
                return;
            }
            if (enemy.board.allShipsSunk(enemy.ships) === true) {
                winMsg('User');
                return;
            };

            if (message !== 'Hit'){
                player.toggle();
                enemy.toggle();
            }
            else {
                switch(Math.floor(Math.random() * 2) + 1){
                    //If hit lands, attack adjacent right tile, unless there's no right tile, then strike
                    //bottom tile, unless there's no bottom tile, then strike tile above
                    case 1: 
                        if ((y + 1) < 10) {
                            enemyAttack(player, enemy, x, y + 1);
                        }
                        else if ((x + 1) < 10) {
                            enemyAttack(player, enemy, x + 1, y);
                        }
                        else {
                            enemyAttack(player, enemy, x - 1, y);
                        }
                    //If hit lands, attack adjacent bottom tile, unless there's no bottom tile, then strike
                    //adjacent tile to right, unless there's no tile to right, then strike tile to left
                    case 2: 
                        if ((x + 1) < 10){
                            enemyAttack(player, enemy, x + 1, y);
                        }
                        else if ((y + 1) < 10) {
                            enemyAttack(player, enemy, x, y + 1);
                        }
                        else {
                            enemyAttack(player, enemy, x, y - 1);
                        }
                }
                
            }

        } else {
            let coordinates = player.enemyMove();
            enemyAttack(player, enemy, coordinates[0], coordinates[1]);
        }
    } else {
        // Do nothing
    };
};

export {
    atkListener,
}