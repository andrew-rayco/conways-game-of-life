module.exports = {
  createBoard
}

function runGame(size, population) {
  var board = createBoard(size, population)
  processBoard(board)
  getNeighbours(0, 0, board)
}
runGame(6, 0.6)

// creates and randomly populates board
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

// generates random population number if no
// population argument is specified for runGame
function randomNumber(population) {
  var num = (Math.random() < (population || 0.35)) ? 1 : 0
  return num
}

// return neighbours relative to cell being checked
function getNeighbours(row, column, board) {
  for (var i = row - 1; i < row + 2; i++) {
    for (var j = column - 1; j < column + 2; j++) {
      if ((i !== 0) || (j !== 0)) {
        if (!outOfBounds(i, j, board)) {
          console.log(i, j)
          console.log('-----------');
            // return board[i, j]
        }
      }
    }
  }
}

// getNeighbours(0, 0, board)

function outOfBounds(row, column, board) {
  return row < 0 || column < 0 || row >= board.length || column >= board.length
}


function processBoard(board) {
  board.map(function(row) {
    row.map(function(cell) {
      getNeighbours(row, cell, board)
    })
  })
}


function isOutOfBounds(row, column) {

}
