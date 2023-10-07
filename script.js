const player1 = {
    playerTurn: true
}

const player2 = {
    playerTurn: false
}



let boxes = document.querySelectorAll('.tiles')
let player1Message= document.querySelector('.player1message')
let player2Message= document.querySelector('.player2message')


function winConditions() {
    boxes.forEach ((box) => {
       
    }
)}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.classList.contains('selected')) {
            return; // Exit the function if the box is already selected
        } else {
            // Add the selected class to mark the box as selected
            box.classList.add('selected');

            if (player1.playerTurn) {
                box.innerHTML = "X";
                player1Message.style.display = 'none'
                player2Message.style.display = 'block'
                setTimeout(() => {
                    player2.playerTurn = true;
                    player1.playerTurn = false;
                   

                });
            } else if (player2.playerTurn) {
                box.innerHTML = "O";
                player1Message.style.display = 'block'
                player2Message.style.display = 'none'
                setTimeout(() => {
                    player2.playerTurn = false;
                    player1.playerTurn = true;
                });
            }
        }
    });
});

