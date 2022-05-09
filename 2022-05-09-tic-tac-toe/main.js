/* query selectors */
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
a1.addEventListener('click', )
a2.addEventListener('click', )
a3.addEventListener('click', )
b1.addEventListener('click', )
b2.addEventListener('click', )
b3.addEventListener('click', )
c1.addEventListener('click', )
c2.addEventListener('click', )
c3.addEventListener('click', )

const x = 'x'
const o = 'o'
let turn = x



do {

} while(!winner)

/* game logic */

function start() {
    clearBoard()
    turn = x
}

function clearBoard() {
    a1.innerText = ''
    a2.innerText = ''
    a3.innerText = ''
    b1.innerText = ''
    b2.innerText = ''
    b3.innerText = ''
    c1.innerText = ''
    c2.innerText = ''
    c3.innerText = ''
}

function swapTurn() {
    if(turn === x) {
        turn = o
        gameStatus.innerText = `Turn: ${o}`
    } else if(turn === o) {
        turn = x
        gameStatus.innerText = `Turn: ${x}`
    }
}

/* turn logic */

// press start
// board is cleared
// turn is set to 'x'

// loop
//   wait for click
//   add 'turn'
//   check for win
//   swap turn
