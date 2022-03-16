const renderGBoard = (gameBoard, num) => {
    let container = document.querySelector(`#container${num}`);
    let row1 = document.createElement('div');
    row1.setAttribute('id', 'row1');
    let row2 = document.createElement('div');
    row2.setAttribute('id', 'row2');
    let row3 = document.createElement('div');
    row3.setAttribute('id', 'row3');
    let row4 = document.createElement('div');
    row4.setAttribute('id', 'row4');
    let row5 = document.createElement('div');
    row5.setAttribute('id', 'row5');
    let row6 = document.createElement('div');
    row6.setAttribute('id', 'row6');
    let row7 = document.createElement('div');
    row7.setAttribute('id', 'row7');
    let row8 = document.createElement('div');
    row8.setAttribute('id', 'row8');
    let row9 = document.createElement('div');
    row9.setAttribute('id', 'row9');
    let row10 = document.createElement('div');
    row10.setAttribute('id', 'row10');

    gameBoard.forEach(function(item, index) {
        item.forEach(function(subitem, subindex) {
            let squareDiv = document.createElement('div');
            squareDiv.setAttribute('id', `squareDiv${index}${subindex}`);
            squareDiv.setAttribute('data-y-coord', subindex);
            squareDiv.setAttribute('data-x-coord', index);
            squareDiv.setAttribute('data-has-ship', subitem.hasShip);
            squareDiv.setAttribute('data-is-shot', subitem.isShot);
            squareDiv.classList.add(`atkDiv${num}`);
            if (subitem.hasShip === false && num === 1){
                squareDiv.style.backgroundColor = 'rgb(179, 196, 250)';
            }
            else if (subitem.hasShip === true && num === 1) {
                squareDiv.style.backgroundColor = 'green';
            }
            // squareDiv.textContent = '';
            for (let i = 0; i < 10; i++){
                if (squareDiv.getAttribute('id') == `squareDiv0${i}`){
                    row1.appendChild(squareDiv);
                } else if (squareDiv.getAttribute('id') == `squareDiv1${i}`){
                    row2.appendChild(squareDiv);
                } else if (squareDiv.getAttribute('id') == `squareDiv2${i}`){
                    row3.appendChild(squareDiv);
                } else if (squareDiv.getAttribute('id') == `squareDiv3${i}`){
                    row4.appendChild(squareDiv);
                } else if (squareDiv.getAttribute('id') == `squareDiv4${i}`){
                    row5.appendChild(squareDiv);
                } else if (squareDiv.getAttribute('id') == `squareDiv5${i}`){
                    row6.appendChild(squareDiv);
                } else if (squareDiv.getAttribute('id') == `squareDiv6${i}`){
                    row7.appendChild(squareDiv);
                } else if (squareDiv.getAttribute('id') == `squareDiv7${i}`){
                    row8.appendChild(squareDiv);
                } else if (squareDiv.getAttribute('id') == `squareDiv8${i}`){
                    row9.appendChild(squareDiv);
                } else if (squareDiv.getAttribute('id') == `squareDiv9${i}`){
                    row10.appendChild(squareDiv);
                }
            };

            container.appendChild(row1);
            container.appendChild(row2);
            container.appendChild(row3);
            container.appendChild(row4);
            container.appendChild(row5);
            container.appendChild(row6);
            container.appendChild(row7);
            container.appendChild(row8);
            container.appendChild(row9);
            container.appendChild(row10);
        });
    });
};

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
                        hitShip[0].hit(enemy.pos5);
                        enemy.pos5 += 1;
                    } else if (shipType == 'Battleship') {
                        
                        let hitShip = ships.filter(ship => ship.length == shipLength);
                        hitShip[0].hit(enemy.pos4);
                        enemy.pos4 += 1;
                    } else if (shipType == 'Destroyer') {
                        
                        let hitShip = ships.filter(ship => ship.length == shipLength);
                        hitShip[0].hit(enemy.pos3);
                        enemy.pos3 += 1;
                    } else if (shipType == 'Submarine') {
                        
                        let hitShip = ships.filter(ship => ship.length == shipLength);
                        hitShip[1].hit(enemy.pos2);
                        enemy.pos2 += 1;
                    } else if (shipType == 'Patrolboat') {
                        
                        let hitShip = ships.filter(ship => ship.length == shipLength);
                        hitShip[0].hit(enemy.pos1);
                        enemy.pos1 += 1;
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
                hitShip[0].hit(player.pos5);
                player.pos5 += 1;
            } else if (shipType == 'Battleship') {
                
                let hitShip = ships.filter(ship => ship.length == shipLength);
                hitShip[0].hit(player.pos4);
                player.pos4 += 1;
            } else if (shipType == 'Destroyer') {
                
                let hitShip = ships.filter(ship => ship.length == shipLength);
                hitShip[0].hit(player.pos3);
                player.pos3 += 1;
            } else if (shipType == 'Submarine') {
                
                let hitShip = ships.filter(ship => ship.length == shipLength);
                hitShip[1].hit(player.pos2);
                player.pos2 += 1;
            } else if (shipType == 'Patrolboat') {
                
                let hitShip = ships.filter(ship => ship.length == shipLength);
                hitShip[0].hit(player.pos1);
                player.pos1 += 1;
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

const placePieces = (user) => {
    let player = user.board;

    const onDragOver = (e) => {
        e.preventDefault();
    }
    const onDrop = (e) => {
        e.preventDefault();
        let x = parseInt(e.target.getAttribute('data-x-coord'));
        let y = parseInt(e.target.getAttribute('data-y-coord'));
        let data = e.dataTransfer.getData('text');
        let carrier = document.querySelector('#Carrier');
        let battleShip = document.querySelector('#Battleship');
        let destroyer = document.querySelector('#Destroyer');
        let subMarine = document.querySelector('#Submarine');
        let patrolB = document.querySelector('#Patrolboat');
        let align = carrier.getAttribute('data-alignment');
        if (data === 'Carrier'){
            if (player.scout(x, y, 5, align) === false){
                user.flag[0] = true;
                if (align === 'row'){
                    player.placeHorizontal(x, y, 5, data);
                    for (let i = 0; i < 5; i++){
                        let squareDiv = document.getElementById(`squareDiv${x}${y}`);
                        squareDiv.style.backgroundColor = 'green';
                        y++;
                    }
                } else if (align === 'column') {
                    player.placeVert(x, y, 5, data);
                    for (let i = 0; i < 5; i++){
                        let squareDiv = document.getElementById(`squareDiv${x}${y}`);
                        squareDiv.style.backgroundColor = 'green';
                        x++;
                    }
                }
                carrier.style.display = 'none';
            }
            else {
                
            }
        }
        if (data === 'Battleship'){
            if (player.scout(x, y, 4, align) === false){
                user.flag[1] = true;
                if (align === 'row'){
                    player.placeHorizontal(x, y, 4, data);
                    for (let i = 0; i < 4; i++){
                        let squareDiv = document.getElementById(`squareDiv${x}${y}`);
                        squareDiv.style.backgroundColor = 'green';
                        y++;
                    }
                } else if (align === 'column') {
                    player.placeVert(x, y, 4, data);
                    for (let i = 0; i < 4; i++){
                        let squareDiv = document.getElementById(`squareDiv${x}${y}`);
                        squareDiv.style.backgroundColor = 'green';
                        x++;
                    }
                }
                battleShip.style.display = 'none';
            }
        }
        if (data === 'Destroyer'){
            if (player.scout(x, y, 3, align) === false){
                user.flag[2] = true;
                if (align === 'row'){
                    player.placeHorizontal(x, y, 3, data);
                    for (let i = 0; i < 3; i++){
                        let squareDiv = document.getElementById(`squareDiv${x}${y}`);
                        squareDiv.style.backgroundColor = 'green';
                        y++;
                    }
                } else if (align === 'column') {
                    player.placeVert(x, y, 3, data);
                    for (let i = 0; i < 3; i++){
                        let squareDiv = document.getElementById(`squareDiv${x}${y}`);
                        squareDiv.style.backgroundColor = 'green';
                        x++;
                    }
                }
                destroyer.style.display = 'none';
            }
        }
        if (data === 'Submarine'){
            if (player.scout(x, y, 3, align) === false){
                user.flag[3] = true;
                if (align === 'row'){
                    player.placeHorizontal(x, y, 3, data);
                    for (let i = 0; i < 3; i++){
                        let squareDiv = document.getElementById(`squareDiv${x}${y}`);
                        squareDiv.style.backgroundColor = 'green';
                        y++;
                    }
                } else if (align === 'column') {
                    player.placeVert(x, y, 3, data);
                    for (let i = 0; i < 3; i++){
                        let squareDiv = document.getElementById(`squareDiv${x}${y}`);
                        squareDiv.style.backgroundColor = 'green';
                        x++;
                    }
                }
                subMarine.style.display = 'none';
            }
        }
        if (data === 'Patrolboat'){
            if (player.scout(x, y, 2, align) === false){
                user.flag[4] = true;
                if (align === 'row'){
                    player.placeHorizontal(x, y, 2, data);
                    for (let i = 0; i < 2; i++){
                        let squareDiv = document.getElementById(`squareDiv${x}${y}`);
                        squareDiv.style.backgroundColor = 'green';
                        y++;
                    }
                } else if (align === 'column') {
                    player.placeVert(x, y, 2, data);
                    for (let i = 0; i < 2; i++){
                        let squareDiv = document.getElementById(`squareDiv${x}${y}`);
                        squareDiv.style.backgroundColor = 'green';
                        x++;
                    }
                }
                patrolB.style.display = 'none';
            }
        }
        let flagArr = user.flag.filter(flag => flag === true);
        if (flagArr.length === 5) {
            const startBtn = document.querySelector('#startBtn');
            startBtn.style.display = 'flex';
        }
    }
    let response = document.getElementsByClassName('atkDiv1');

    for (let i = 0; i < response.length; i++){
        response[i].addEventListener('dragover', onDragOver);
        response[i].addEventListener('drop', onDrop);
    };

}

const deRender = () => {
    let parent = document.querySelector("#container1");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const winMsg = (string) => {
    const btnContainer = document.querySelector('#btnContainer');
    const winContainer = document.querySelector('#winContainer');
    const winnerDiv = document.createElement('div');
    if (string === 'Player') {
        winnerDiv.textContent = 'Enemy fleet destroyed!';
    }
    else if (string === 'Computer') {
        winnerDiv.textContent = 'Your fleet was destroyed!';
    }
    btnContainer.style.display = 'none';

    winContainer.appendChild(winnerDiv);
}

export { 

    renderGBoard,
    atkListener,
    placePieces,
    deRender,
 };