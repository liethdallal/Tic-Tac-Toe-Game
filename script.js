const player = {
    playerTurn: false
}



let boxes = document.querySelectorAll(".tiles")



boxes.forEach((box) => {
    box.addEventListener('click', function choice() {
        if(player.playerTurn) {
            box.innerHTML = "X"
        }
    })
})

