'use strict'

const store = require('../store')

const createGameSuccess = function (data) {
  $('#alert').text('New Game Data Start!')
  $('#alert').css('background-color', 'green')
  console.log('CreateGame success is here!')
  store.game = data.game
}

const createGameFailure = function (error) {
  $('#alert').text('Something Went Wrong...')
  $('#alert').css('background-color', 'red')
  console.log(error)
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
