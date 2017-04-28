module.exports = {
  createBoard,
  // isAlive
}

function createBoard(size) {
  var board = [];
  for (var i = 0; i < size; i++) {
    board.push([])
    for (var j = 0; j < size; j++) {
      board[i].push(0)
    }
  }
  // console.log(board)
  return board
}

// createBoard(10)
// console.log(createBoard(10));
console.log(populateBoard(createBoard(10)));

function populateBoard(board) {
  return board.map(function(row) {
    return row.map(function(cell) {
      var randomNumber = Math.random()
      if (randomNumber < 0.45) {
        return 1
      } else {
        return 0
      }
    })
  })
}

// function isAlive(cell) {
//   if (cell == 1) {
//     return true
//   } else {
//     return false
//   }
// }
//
// function checkAlive() {
//   board.map(function(row) {
//     row.map(function(cell) {
//       if (isAlive(cell)) {
//         cell.push(1)
//       } else {
//         cell.push(0)
//       }
//     })
//   })
// }

function countAliveNeighbours(board, cell) {
  for (var i = 0; i < array.length; i++) {
    array[i]
  }
  console.log(board[0][3], board[1][3])

}
countAliveNeighbours(populateBoard(createBoard(10)))

function aliveOrDead(liveNeighbours) {
  if (liveNeighbours < 2 || liveNeighbours >= 4) {
    return false
  } else {
    return true
  }
}
