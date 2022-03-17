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

export { 

    renderGBoard,
    placePieces,
    deRender,
 };