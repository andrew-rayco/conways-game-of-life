module.exports = {
  createBoard
}

function createBoard(size) {
  var board = [];
  for (var i = 0; i < size; i++) {
    board.push([])
    for (var j = 0; j < size; j++) {
      board[i].push(randomNumber())
    }
  }
  return board
}

function randomNumber() {
  var num = (Math.random() < 0.35) ? 1 : 0
  return num
}

function isOutOfBounds(row, column) {
  
}

console.log(createBoard(3));
