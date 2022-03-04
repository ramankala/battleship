
const renderGBoard = (gameBoard, player) => {
    let container = document.querySelector(`#container${player}`);
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
            squareDiv.setAttribute('data-y-coord', index);
            squareDiv.setAttribute('data-x-coord', subindex);
            squareDiv.setAttribute('data-has-ship', subitem.hasShip);
            squareDiv.setAttribute('data-ship-length', subitem.shipLength);
            squareDiv.setAttribute('data-ship-type', subitem.shipType);
            squareDiv.classList.add(`atkDiv${player}`);
            squareDiv.textContent = subitem.hasShip;
            for (let i = 0; i < 10; i++){
                if (squareDiv.getAttribute('id') === `squareDiv0${i}`){
                    row1.appendChild(squareDiv);
                } else if (squareDiv.getAttribute('id') === `squareDiv1${i}`){
                    row2.appendChild(squareDiv);
                } else if (squareDiv.getAttribute('id') === `squareDiv2${i}`){
                    row3.appendChild(squareDiv);
                } else if (squareDiv.getAttribute('id') === `squareDiv3${i}`){
                    row4.appendChild(squareDiv);
                } else if (squareDiv.getAttribute('id') === `squareDiv4${i}`){
                    row5.appendChild(squareDiv);
                } else if (squareDiv.getAttribute('id') === `squareDiv5${i}`){
                    row6.appendChild(squareDiv);
                } else if (squareDiv.getAttribute('id') === `squareDiv6${i}`){
                    row7.appendChild(squareDiv);
                } else if (squareDiv.getAttribute('id') === `squareDiv7${i}`){
                    row8.appendChild(squareDiv);
                } else if (squareDiv.getAttribute('id') === `squareDiv8${i}`){
                    row9.appendChild(squareDiv);
                } else if (squareDiv.getAttribute('id') === `squareDiv9${i}`){
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

const atkListener = (gameBoard, ships, player) => {
    let response = document.getElementsByClassName(`atkDiv${player}`);
    let yPoint;
    let xPoint;
    let shipLength;
    let shipType;
    let pos5 = 0;
    let pos4 = 0;
    let pos3 = 0;
    let pos2 = 0;
    let pos1 = 0;

    for (let i = 0; i < response.length; i++){
        response[i].addEventListener('click', function(e) {
            yPoint = e.target.getAttribute('data-y-coord');
            xPoint = e.target.getAttribute('data-y-coord');
            shipLength = e.target.getAttribute('data-ship-length');
            shipType = e.target.getAttribute('data-ship-type');
            
            if (e.target.getAttribute('data-has-ship') === 'true'){
                e.target.style.backgroundColor = 'red';
            } else {
                e.target.style.backgroundColor = 'grey';
            }
            gameBoard.receiveAttack(xPoint, yPoint);

            if (shipType == 'Carrier') {
                
                let hitShip = ships.filter(ship => ship.length == shipLength);
                hitShip[0].hit(pos5);
                pos5 += 1;
            } else if (shipType == 'Battleship') {
                
                let hitShip = ships.filter(ship => ship.length == shipLength);
                hitShip[0].hit(pos4);
                pos4 += 1;
            } else if (shipType == 'Destroyer') {
                
                let hitShip = ships.filter(ship => ship.length == shipLength);
                hitShip[0].hit(pos3);
                 pos3 += 1;
            } else if (shipType == 'Submarine') {
                
                let hitShip = ships.filter(ship => ship.length == shipLength);
                hitShip[1].hit(pos2);
                pos2 += 1;
            } else if (shipType == 'Patrolboat') {
                
                let hitShip = ships.filter(ship => ship.length == shipLength);
                hitShip[0].hit(pos1);
                pos1 += 1;
            }

        });
    };
};

export { 

    renderGBoard,
    atkListener,
 };