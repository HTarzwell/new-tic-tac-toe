'use strict'

const config = require('../config')
const store = require('../store')

const createGame = function (data) {
  console.log('api firing, data in create game is ', data)
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

module.exports = {
  createGame
}
