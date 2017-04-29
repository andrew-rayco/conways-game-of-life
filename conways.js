module.exports = {
  createBoard
}

function runGame(size, population) {
  var board = createBoard(size, population)
  console.log(board)
  processBoard(board)
  console.log('------------')
  console.log(board)
  processBoard(board)
  console.log('------------')
  console.log(board)
  processBoard(board)
  console.log('------------')
  console.log(board)
  processBoard(board)
  console.log('------------')
  console.log(board)

}
runGame(5, 0.6)

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

function processBoard(board) {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      var aliveNeighbourCount = 0
      aliveNeighbourCount = getNeighbours(i, j, board)
      board[i][j] = aliveOrDead(board[i][j], aliveNeighbourCount)
    }
  }
}

function aliveOrDead(cell, aliveNeighbours) {
  if (aliveNeighbours <= 1 || aliveNeighbours >= 4) {
    return 0
  } else if (cell == 0 && aliveNeighbours == 3){
    return 1
  } else {
    return 1
  }
}

// return neighbours relative to cell being checked
function getNeighbours(row, column, board) {
  var aliveNeighbourCount = 0;
  for (var i = row - 1; i < row + 2; i++) {
    for (var j = column - 1; j < column + 2; j++) {
      if ((i !== row) || (j !== column)) {
        if (!outOfBounds(i, j, board)) {
          if (board[i][j] === 1) {
            aliveNeighbourCount++
          }
        }
      }
    }
  }
  return aliveNeighbourCount
}

// check if any cells are out of bounds
function outOfBounds(row, column, board) {
  return row < 0 || column < 0 || row >= board.length || column >= board.length
}
