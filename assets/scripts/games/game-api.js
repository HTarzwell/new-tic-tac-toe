'use strict'

const config = require('../config')
const store = require('../store')
const board = require('./board')

const createGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateGame = function (event) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: {'game':
      {'cell':
        {'index': board.gameBoard.index,
        'value': board.gameBoard.token
        },
      'over': board.gameBoard.over
      }
    }
  })
}

module.exports = {
  createGame,
  updateGame
}
