var test = require('tape')
var conways = require('../conways')

test('createBoard will make a board the right size', function(t) {
  var size = 3
  var expected = [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]

  t.deepEqual(conways.createBoard(size), expected, 'makes size 3 board correctly')
  t.end()
})

test('each row of the returned board is a different array', function(t) {
  var board = conways.createBoard(2)
  t.notEqual(board[0], board[1])
  t.end()
})

// test('isAlive correctly returns dead status', function(t) {
//   var cell = [0]
//   var expected = false
//
//   t.equal(conways.isAlive(cell), expected, 'this cell is dead')
//   t.end()
// })
//
// test('isAlive correctly returns alive status', function(t) {
//   var cell = [1]
//
//   t.equal(conways.isAlive(cell), true, 'this cell is alive')
//   t.end()
// })
