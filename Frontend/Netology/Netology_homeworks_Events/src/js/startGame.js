import Board from "./renderboard";

export default class Game {
  constructor(size) {
    this.board = new Board(size);
  }

  start() {
    this.board.renderBoard();
    const cells = document.querySelectorAll('.cell');
    const wrapp = document.querySelector('.block');
    const startButton = document.getElementById('start');

    const img = new Image();
    img.src = 'https://github.com/netology-code/ahj-homeworks/blob/simplification/dom/pic/goblin.png?raw=true';
    img.classList.add('img');

    startButton.addEventListener('click', function () {
      let count = 0;

      let timerId = setInterval(addImg, 1000);
      timerId;

      function addImg() {
        const randomCell = Math.floor(Math.random() * cells.length);
        cells[randomCell].appendChild(img);
      }

      function checkCount(count) {
        if (count === 5) {
          clearTimeout(timerId);
          console.log('Завершили');
        }
      }

      wrapp.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
          count += 1;
          console.log(count);
          checkCount(count);
        }
        else {
          console.log('УПС');
          clearTimeout(timerId);
        }
      })
    })
  }
}
