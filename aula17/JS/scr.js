const cells = document.querySelectorAll('td');
let currentPlayer = 'X';

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function() {
    if (this.textContent === '') {
      this.textContent = currentPlayer;
      
      if (checkForWin()) {
        alert(currentPlayer + ' ganhou!');
        resetGame();
      } else {
        switchPlayer();
      }
    }
  });
}

function checkForWin() {
  // Verifica se há uma linha completa com X ou O
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
  }
  currentPlayer = 'X';
}
