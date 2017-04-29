module.exports = {
  createBoard
}

function createBoard(size, population) {
  var board = [];
  for (var i = 0; i < size; i++) {
    board.push([])
    for (var j = 0; j < size; j++) {
      board[i].push(randomNumber(population))
    }
  }
  return board
}

function randomNumber(population) {
  var num = (Math.random() < (population || 0.35)) ? 1 : 0
  return num
}

function isOutOfBounds(row, column) {

}

console.log(createBoard(6, 0.6));
