const winningCondition = ['123', '456', '789', '147', '258', '369', '159', '357']

class Player {
    constructor(playerType) {
        this.playerType = playerType;
    }

    getPlayer() {
        return this.playerType;
    }

    move(position) {
        position.innerHTML = this.playerType;
    }

    getMoves(table) {

        let positins = '';
        const rows = table.rows

        for (let row of rows) {
            for (let cell of row.cells) {
                if (cell.innerHTML === this.playerType)
                    positins += cell.id;
            }
        }
        return positins;
    }
}

class Game {

    getWinner(player) {
        let winner = false
        winningCondition.forEach((condition) => {
            if (player.toString().includes(condition.toString()))
                winner = true;
        })
        return winner;
    }
}

const table = document.querySelector('table');

let game = new Game();
let playerX = new Player('X');
let playerO = new Player('O');
let playerXTurn = true;


table.addEventListener('click', (ev) => {
    if (ev.target.innerHTML === '') {
        playerTurn = playerXTurn ? playerX : playerO;
        playerTurn.move(ev.target);
        if (game.getWinner(playerTurn.getMoves(table))) {
            alert(`WINNER!!! ${playerTurn.getPlayer()}`);
        }
        playerXTurn = !playerXTurn;
    }

})