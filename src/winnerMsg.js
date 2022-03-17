const winMsg = (string) => {
    const btnContainer = document.querySelector('#btnContainer');
    const winContainer = document.querySelector('#winContainer');
    const resetBtn = document.querySelector('#resetBtn');
    const winnerDiv = document.createElement('div');
    if (string === 'Player') {
        winnerDiv.textContent = 'Enemy fleet destroyed!';
    }
    else if (string === 'Computer') {
        winnerDiv.textContent = 'Your fleet was destroyed!';
    }
    btnContainer.style.display = 'none';

    winContainer.appendChild(winnerDiv);
    winContainer.appendChild(resetBtn);
}

export { winMsg };