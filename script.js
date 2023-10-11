const player1 = {
    playerTurn: true
}

const player2 = {
    playerTurn: false
}

let playAgain = document.querySelector('button')


let boxes = document.querySelectorAll('.tiles');
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];
let player1Message = document.querySelector('.player1message');
let player2Message = document.querySelector('.player2message');
let player1WinMessage = document.querySelector('.player1winmessage');
let player2WinMessage = document.querySelector('.player2winmessage');
let draw = document.querySelector('.draw');

function checkWin(player) {
    return winningCombos.some(combo =>
        combo.every(index => boxes[index].textContent === player)
    );
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.classList.contains('selected')) {
            return; // Exit the function if the box is already selected
        } else {
            // Add the selected class to mark the box as selected
            box.classList.add('selected');

            if (player1.playerTurn) {
                box.textContent = "X";
                if (checkWin("X")) {
                    // Player 1 wins
                    player1Message.style.display = 'none';
                    player2Message.style.display = 'none';
                    player1WinMessage.style.display = 'block';
                    player1.playerTurn = false;
                    player2.playerTurn = false;
                    playAgain.style.display = 'block';
                } else {
                    // Check for a draw
                    if (isDraw()) {
                        player1Message.style.display = 'none';
                        player2Message.style.display = 'none';
                        player1WinMessage.style.display = 'none';
                        player2WinMessage.style.display = 'none';
                        playAgain.style.display = 'block';
                        draw.style.display = 'block'
                    } else {
                        player1Message.style.display = 'none';
                        player2Message.style.display = 'block';
                        setTimeout(() => {
                            player2.playerTurn = true;
                            player1.playerTurn = false;
                        });
                    }
                }
            } else if (player2.playerTurn) {
                box.textContent = "O";
                if (checkWin("O")) {
                    // Player 2 wins
                    player2Message.style.display = 'none';
                    player1Message.style.display = 'none';
                    player2WinMessage.style.display = 'block';
                    player1.playerTurn = false;
                    player2.playerTurn = false;
                    playAgain.style.display = 'block';
                } else {
                    // Check for a draw
                    if (isDraw()) {
                        player1Message.style.display = 'none';
                        player2Message.style.display = 'none';
                        player1WinMessage.style.display = 'none';
                        player2WinMessage.style.display = 'none';
                        playAgain.style.display = 'block';
                        draw.style.display = 'block'
                    } else {
                        player1Message.style.display = 'block';
                        player2Message.style.display = 'none';
                        setTimeout(() => {
                            player2.playerTurn = false;
                            player1.playerTurn = true;
                        });
                    }
                }
            }
        }
    });
});
function isDraw() {
    return Array.from(boxes).every((box) => box.classList.contains('selected'));
}

function resetGame() {
    // Clear the game board
    const boxes = document.querySelectorAll('.tiles');
    boxes.forEach((box) => {
        box.textContent = '';
        box.classList.remove('selected');
    });

    // Reset player turns
    player1.playerTurn = true;
    player2.playerTurn = false;

    // Reset game messages
    player1Message.style.display = 'block';
    player2Message.style.display = 'none';
    player1WinMessage.style.display = 'none';
    player2WinMessage.style.display = 'none';
    draw.style.display = 'none'

}


const audio = new Audio('https://vgmsite.com/soundtracks/new-super-mario-bros.-wii/kgdbscsmvi/43.%20Bonus.mp3')
const boxAudio = new Audio('./box.mp3')
const winAudio = new Audio('https://vgmsite.com/soundtracks/new-super-mario-bros.-wii/ijozbjcwap/39.%20Star%20Coin%20Collected.mp3')

let music = document.getElementById('play');
audio.loop = true

playAgain.addEventListener('click', () => {
    resetGame()
    playAgain.style.display = 'none'
})

music.addEventListener('click', () => {
    audio.play()
    music.style.display = 'none'
   
})

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (player1.playerTurn || player2.playerTurn){
            boxAudio.play()
        }
        if (checkWin("X") || checkWin("O")) {
        winAudio.play()
        }
    })
})