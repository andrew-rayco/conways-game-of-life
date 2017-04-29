// index.js
var board = conways.createBoard(15)

board = spawnRandom(board)

setInterval(tick, 200)

function spawnRandom(board) {
  newBoard = [...board] // Whaaaat is that mojo?

  for(var i = 0; i < board.length; i++) {
    for( var j = 0; j < board.length; j++) {
      newBoard[i][j] = Boolean(Math.round(Math.random()))
    }
  }
  return newBoard
}

function tick() {
  display(board)
  board = conways.nextBoard(board)
}
// end index



function createBoard(size) {
  var board = new Array(size)
  for (var i = 0; i < board.length; i++) {
    board[i] = new Array(size)
    board[i].fill(false)
  }
  return board
}


var getNeighbours = require('./getNeighbours')
function countAliveNeighbours(cellRow, cellColumn, board) {
  var neighbours = getNeighbours(cellRow, cellColumn, board)
  return neighbours.reduce(function(count, cell) {
    if(cell) {count++}
    return count
  }, 0)
}


//Can you render your board in prettier way?
function displayBoard(board) {
  process.stdout.write('\033c');
  for(var i = 0; i < board.length; i++) {
    var row = board[i]
    console.log(row.map((cell) => (cell) ? 'x' : '.').join(' '))
  }
  console.log()
}


function getNeighbours(cellRow, cellColumn, board) {
  var results = []
  forEachNeighbour(cellRow, cellColumn, board, function(cell) {
    results.push(cell)
  })
  return results
}

function forEachNeighbour(cellRow, cellColumn, board, callback) {
  for(var i = cellRow - 1; i <= cellRow + 1; i++) {
    for (var j = cellColumn - 1; j <= cellColumn + 1; j++) {
      if (!indicesOutOfBounds(i, j, board) && (i != cellRow || j != cellColumn)) {
        callback(board[i][j])
      }
    }
  }
}


// Out of bounds
function indicesOutOfBounds(rowIndex, columnIndex, array) {
  return outOfBounds(rowIndex, array) || outOfBounds(columnIndex, array[rowIndex])
}


function outOfBounds(index, array) {
  return index < 0 || index >= array.length
}


function nextBoard(currentBoard) {
  var board = []
  for(var i = 0; i < currentBoard.length ; i++) {
    board.push([])
    for (var j = 0; j < currentBoard.length; j++) {
      var cell = currentBoard[i][j]
      var neighbourCount = countAliveNeighbours(i, j, currentBoard)
      board[i].push(nextCellState(cell, neighbourCount))
    }
  }
  return board
}



function nextCellState(cellState, neighbourCount) {
  if(cellState) {
    if (underPopulated(neighbourCount) || overPopulated(neighbourCount)) {
      return false
    }
    return true
  } else if (ressurectable(neighbourCount)) {
    return true
  }
  return false
}


// Cell status
function overPopulated(neighbourCount) {
  return neighbourCount >= 4
}

function ressurectable(neighbourCount) {
  return neighbourCount === 3
}

function underPopulated(neighbourCount) {
  return neighbourCount < 2
}
