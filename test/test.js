var test = require('tape')
var conways = require('../conways')

test('createBoard will make a board the right size', function(t) {
  var size = 3
  var expected = conways.createBoard(3).length

  t.deepEqual(conways.createBoard(size).length, expected, 'makes size 3 board correctly')
  t.end()
})

test('each row of the returned board is a different array', function(t) {
  var board = conways.createBoard(2)
  t.notEqual(board[0], board[1])
  t.end()
})

test('outOfBounds returns true if row that has neighbour cell is out of bounds', function (t) {
  var row = -1
  var column = 0
  var expected = true
  var board = conways.createBoard(5)

  t.equal(conways.outOfBounds(row, column, board), expected)
  t.end()
})

test('aliveOrDead correctly kills or spawns an alive cell', function (t) {
  var cell = 1
  var aliveNeighbours = 1
  var expected = 0

  function aliveOrDeadTest(aliveNeighbours, expected, testPassComment) {
    return t.equal(conways.aliveOrDead(cell, aliveNeighbours), expected, testPassComment)
  }

  aliveOrDeadTest(0, 0, 'correctly dies with 0 live neighbours')
  aliveOrDeadTest(1, 0, 'correctly dies with 1 live neighbour')
  aliveOrDeadTest(2, 1, 'correctly stays alive with 2 live neighbours')
  aliveOrDeadTest(3, 1, 'correctly stays alive with 3 live neighbours')
  aliveOrDeadTest(4, 0, 'correctly dies with 4 live neighbours')
  aliveOrDeadTest(5, 0, 'correctly dies with 5 live neighbours')
  aliveOrDeadTest(6, 0, 'correctly dies with 6 live neighbours')
  aliveOrDeadTest(7, 0, 'correctly dies with 7 live neighbours')
  aliveOrDeadTest(8, 0, 'correctly dies with 8 live neighbours')

  t.end()
})

test('aliveOrDead correctly spawns or keeps dead a dead cell', function (t) {
  var cell = 0
  var aliveNeighbours = 3
  var expected = 1

  function aliveOrDeadTest(aliveNeighbours, expected, testPassComment) {
    t.equal(conways.aliveOrDead(cell, aliveNeighbours), expected, testPassComment)
  }

  aliveOrDeadTest(1, 0, 'correctly remains dead with 1 live neighbour')
  aliveOrDeadTest(2, 0, 'correctly remains dead with 2 live neighbours')
  aliveOrDeadTest(3, 1, 'correctly spawns with 3 live neighbours')
  aliveOrDeadTest(4, 0, 'correctly remains dead with 4 live neighbours')
  aliveOrDeadTest(5, 0, 'correctly remains dead with 5 live neighbours')
  aliveOrDeadTest(6, 0, 'correctly remains dead with 6 live neighbours')
  aliveOrDeadTest(7, 0, 'correctly remains dead with 7 live neighbours')
  aliveOrDeadTest(8, 0, 'correctly remains dead with 8 live neighbours')

  t.end()
})
