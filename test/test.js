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
