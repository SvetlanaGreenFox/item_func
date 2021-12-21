export default class Board {
  constructor(size) {
    this.size = size;
  }

  renderBoard() {
    const board = document.querySelector('.block');

    for (let i = 0; i < this.size; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      board.appendChild(cell);
    }

    return board;
  }
}
