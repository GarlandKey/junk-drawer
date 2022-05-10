/* DO NOT CHANGE -- THIS ALL WORKS */

/* global variables */
const x = 'x'
const o = 'o'
let turn = x
let turnCount = 0

/* query selectors */
const btn = document.querySelector('button')
const spaces = Array.from(document.querySelectorAll(".space"))
const a1 = document.querySelector('#a1')
const a2 = document.querySelector('#a2')
const a3 = document.querySelector('#a3')
const b1 = document.querySelector('#b1')
const b2 = document.querySelector('#b2')
const b3 = document.querySelector('#b3')
const c1 = document.querySelector('#c1')
const c2 = document.querySelector('#c2')
const c3 = document.querySelector('#c3')
const gameStatus = document.querySelector('#gameStatus')

/* event listeners */
btn.addEventListener('click', start)

/* START */
start()

/* Initiates new game */
function start() {
  clearBoard()
  turnCount = 0
  turn = x
  gameStatus.innerText = `Turn: ${x}`
  spaces.forEach(e => e.addEventListener("click", playTurn))
  spaces.forEach(e => e.style.color = "black")

  // Displays button click temporarily
  btn.style.borderColor = "gray"
  setTimeout(() => { btn.style.borderColor = "black" }, 250)
}

/* Go through each space element and clear them. */
function clearBoard() {
  spaces.forEach(e => e.innerText = "")
  gameStatus.innerText = ''
}

/* Turn logic */
function playTurn(e) {
  e.preventDefault()
  e.target.innerText = turn // places a symbol on the board
  e.target.removeEventListener("click", playTurn) // removes event listener so space can't be played more than once
  turnCount++ // needed to track for a draw in checkWin()

  swapTurn()
  checkWin()
   // keep after checkWin(), so we can return the winner as the current player
}

/* Swaps symbol for next turn */
function swapTurn() {
  if (turn === x) {
    turn = o
    gameStatus.innerText = `Turn: ${o}`
  } else if (turn === o) {
    turn = x
    gameStatus.innerText = `Turn: ${x}`
  }
}

function endGame(player) {
  if (player === 'draw') {
    gameStatus.innerText = `Draw!`
  } else {
    gameStatus.innerText = `${player} wins!`
  }
  spaces.forEach(e => e.removeEventListener("click", playTurn))
  spaces.forEach(e => e.style.color = "gray")
}

/* Checks for all possible win or draw conditions */
function checkWin() {

  /*  
      Thoughts? -  a1.innerText.value == a2.innerText.value 
      && a2.innerText.value == a2.innerText.value

      This would work and be DRY
      endgame(turn)?
  */

  // vertical
  if ((a1.innerText === x && b1.innerText === x && c1.innerText === x) ||
    (a2.innerText === x && b2.innerText === x && c2.innerText === x) ||
    (a3.innerText === x && b3.innerText === x && c3.innerText === x)) {
    endGame(x)
  } else if ((a1.innerText === o && b1.innerText === o && c1.innerText === o) ||
    (a2.innerText === o && b2.innerText === o && c2.innerText === o) ||
    (a3.innerText === o && b3.innerText === o && c3.innerText === o)) {
    endGame(o)
    // horizontal
  } else if ((a1.innerText === x && a2.innerText === x && a3.innerText === x) ||
    (b1.innerText === x && b2.innerText === x && b3.innerText === x) ||
    (c1.innerText === x && c2.innerText === x && c3.innerText === x)) {
    endGame(x)
  } else if ((a1.innerText === o && a2.innerText === o && a3.innerText === o) ||
    (b1.innerText === o && b2.innerText === o && b3.innerText === o) ||
    (c1.innerText === o && c2.innerText === o && c3.innerText === o)) {
    endGame(o)
    // diagonal wins
  } else if ((a1.innerText === x && b2.innerText === x && c3.innerText === x) ||
    (a3.innerText === x && b2.innerText === x && c1.innerText === x)) {
    endGame(x)
  } else if ((a1.innerText === o && b2.innerText === o && c3.innerText === o) ||
    (a3.innerText === o && b2.innerText === o && c1.innerText === o)) {
    endGame(o)
    // draw
  } else if (turnCount === 9) {
    endGame('draw')
  }
}
