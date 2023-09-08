//Creat a variable for plaer and variable for computer 
// function switch player 
let currentPlayer = {
 playerMove: true
}
let computerPlayer = {
 computerMove: false
}

function switchPlayer() {
    if(currentPlayer.playerMove){
        alert('Your turn ')
        prompt('Whats your move')
        currentPlayer.playerMove = false
        computerPlayer.computerMove= true
    
    } 
    if(computerPlayer.computerMove) {
        console.log('computers turn')
        currentPlayer.playerMove = true
        computerPlayer.computerMove= false
    }
  // A function to switch the current player from `X` to `O`

  // Create a boolean condition where if the player current move is true it allow him to click and at the end of it switch it to false and switches the computer current move to true
}


if(currentPlayer.playerMove){
    alert('Your turn ')
    prompt('Whats your move')
    currentPlayer.playerMove = false
    computerPlayer.computerMove= true

} 
if(computerPlayer.computerMove) {
    console.log('computers turn')
    currentPlayer.playerMove = true
    computerPlayer.computerMove= false
}

//Function that hold player and computer move (variables)
//if user clicks computer turn is called and would continue until grid is full 