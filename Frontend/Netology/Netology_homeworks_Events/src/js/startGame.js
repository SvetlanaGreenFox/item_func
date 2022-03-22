import Board from "./renderboard";

export default class Game {
  constructor(size) {
    this.board = new Board(size);
    this.countClick = 0;
    this.countGoblin = 0;
  }

  boardInit() {
    this.board.renderBoard();
    this.cells = document.querySelectorAll('.cell');
    this.wrapp = document.querySelector('.block');
    this.startButton = document.getElementById('start');
  }

  movePicture() {
    console.log('Картинка');
    const img = new Image();
    img.src = 'https://github.com/netology-code/ahj-homeworks/blob/simplification/dom/pic/goblin.png?raw=true';
    img.classList.add('img');

    this.timerId = setInterval(() => {
      const randomCell = Math.floor(Math.random() * this.cells.length);
      this.cells[randomCell].appendChild(img);
      this.countGoblin += 1;
      this.checkCount();
    }, 1000);
  }

  checkCount() {
    if (this.countClick === 5) {
      this.showWin('Ты победил!');
    }
    if (this.countGoblin === 5) {
      this.showWin('Ты проиграл!');
    }
  }

  showWin(result) {
    const modal = document.querySelector('.hystmodal');
    const finalTitle = document.querySelector('.finalTitle');

    finalTitle.textContent = result;
    modal.style.visibility = 'visible';
    clearTimeout(this.timerId);
    this.hideButton();
  }

  start() {
    this.boardInit();

    this.startButton.addEventListener('click', () => {
      document.querySelector('.startButton').disabled = true;
      this.movePicture();
    });

    this.wrapp.addEventListener('click', (event) => {
      if (event.target.tagName === 'IMG') {
        this.countClick += 1;
        console.log(this.countClick);
        this.countGoblin -= 1;
      }
    })
  }

  hideButton() {
    const modal = document.querySelector('.hystmodal');
    const button = document.querySelector('.hystmodal__close');

    button.addEventListener('click', () => {
      console.log('Hi');
      modal.style.visibility = 'hidden';
      location.reload();
    });

  }
}
