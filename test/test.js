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
  var cell = true

  function aliveOrDeadTest(aliveNeighbours, expected, testPassComment) {
    return t.equal(conways.aliveOrDead(cell, aliveNeighbours), expected, testPassComment)
  }

  aliveOrDeadTest(0, false, 'correctly dies with 0 live neighbours')
  aliveOrDeadTest(1, false, 'correctly dies with 1 live neighbour')
  aliveOrDeadTest(2, true, 'correctly stays alive with 2 live neighbours')
  aliveOrDeadTest(3, true, 'correctly stays alive with 3 live neighbours')
  aliveOrDeadTest(4, false, 'correctly dies with 4 live neighbours')
  aliveOrDeadTest(5, false, 'correctly dies with 5 live neighbours')
  aliveOrDeadTest(6, false, 'correctly dies with 6 live neighbours')
  aliveOrDeadTest(7, false, 'correctly dies with 7 live neighbours')
  aliveOrDeadTest(8, false, 'correctly dies with 8 live neighbours')

  t.end()
})

test('aliveOrDead correctly spawns or keeps dead a dead cell', function (t) {
  var cell = 0

  function aliveOrDeadTest(aliveNeighbours, expected, testPassComment) {
    t.equal(conways.aliveOrDead(cell, aliveNeighbours), expected, testPassComment)
  }

  aliveOrDeadTest(1, false, 'correctly remains dead with 1 live neighbour')
  aliveOrDeadTest(2, false, 'correctly remains dead with 2 live neighbours')
  aliveOrDeadTest(3, true, 'correctly spawns with 3 live neighbours')
  aliveOrDeadTest(4, false, 'correctly remains dead with 4 live neighbours')
  aliveOrDeadTest(5, false, 'correctly remains dead with 5 live neighbours')
  aliveOrDeadTest(6, false, 'correctly remains dead with 6 live neighbours')
  aliveOrDeadTest(7, false, 'correctly remains dead with 7 live neighbours')
  aliveOrDeadTest(8, false, 'correctly remains dead with 8 live neighbours')

  t.end()
})
