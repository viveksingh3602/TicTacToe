let player1Turn = true;

const buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '') {
            button.textContent = player1Turn ? 'X' : 'O';
            button.style.color = player1Turn ? 'red' : 'blue';
            player1Turn = !player1Turn;
            checkWinner();
        }
    });
});

function checkWinner() {
    const board = buttons.map(button => button.textContent);
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            alert(`Player ${board[a]} wins!`);
            resetBoard();
            return;
        }
    }

    if (board.every(cell => cell)) {
        alert('It\'s a draw!');
        resetBoard();
    }
}

function resetBoard() {
    buttons.forEach(button => button.textContent = '');
    player1Turn = true;
}