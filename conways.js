var clear = require('clear')


function runGame(size, population) {
  var board = createBoard(size, population)
  cycle(processBoard(board))
}
runGame(88, 0.1)


// clears console, logs latest board, updates board (and repeats all)
function cycle(board) {
  setInterval(function() {
    clear()
    displayBoard(board)
    board = processBoard(board)
  }, 150)
}


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

// alter array to string and log to console
function displayBoard(board) {
  for (var i = 0; i < board.length; i++) {
    var row = board[i]
    var string = ''
    row.map(markCells)
    function markCells(cell) {
      if (cell) {
        string += 'x'
      } else {
        string += '-'
      }
    }
    console.log(string)
  }
}


// generates random population number if
// population argument is specified for runGame
function randomNumber(population) {
  var bool = (Math.random() < (population || 0.35)) ? true : false
  return bool
}


// iterate through board to count neighbours and process cell accordingly
function processBoard(board) {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      var aliveNeighbourCount = 0
      aliveNeighbourCount = getNeighbours(i, j, board)
      board[i][j] = aliveOrDead(board[i][j], aliveNeighbourCount)
    }
  }
  return board
}


// apply conways rules to cells
function aliveOrDead(cell, aliveNeighbours) {
  if (aliveNeighbours <= 1 || aliveNeighbours >= 4) {
    return false
  } else if (aliveNeighbours == 3){
    return true
  } else if (aliveNeighbours == 2 && cell == false) {
    return false
  } else if (aliveNeighbours == 2 && cell == true) {
    return true
  }
}


// return neighbours relative to cell being checked
function getNeighbours(row, column, board) {
  var aliveNeighbourCount = 0;
  for (var i = row - 1; i < row + 2; i++) {
    for (var j = column - 1; j < column + 2; j++) {
      if ((i !== row) || (j !== column)) {
        if (!outOfBounds(i, j, board)) {
          if (board[i][j] === true) {
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


module.exports = {
  createBoard,
  outOfBounds,
  aliveOrDead
}
