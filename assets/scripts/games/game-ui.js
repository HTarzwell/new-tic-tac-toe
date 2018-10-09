'use strict'

const store = require('../store')

const createGameSuccess = function (data) {
  console.log('CreateGame success is here!')
  store.game = data.game
}

const createGameFailure = function (error) {
  $('#alert').text('Something Went Wrong...')
  $('#alert').css('background-color', 'red')
  console.log(error)
}

const updateGameSuccess = function (data) {
  console.log('updateGame success here!')
}

const updateGameFailure = function (error) {
  $('#alert').text('Something Went Wrong...')
  $('#alert').css('background-color', 'red')
  console.log(error)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure
}
