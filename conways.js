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

function countNeighbours(cell) {
  for (var i = -1; i < 2; i++) {
    for (var j = -1; j < 2; j++) {
      if (!((i == 0) && (j == 0))) {
          console.log([i, j]);
      }

    }
  }
}

countNeighbours()

function isOutOfBounds(row, column) {

}

console.log(createBoard(6, 0.6));
