'use strict'

const api = require('./game-api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./game-ui')
const players = require('./players')
const board = require('./board')
const store = require('../store')

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
  console.log('onCreateGame firing in events, data in events is ', data)
}

const onUpdateGame = function (event) {
 event.preventDefault()
 api.updateGame(event)
   .then(ui.updateGameSuccess)
   .catch(ui.updateGameFailure)
 console.log('made it to events onUpdateGame')
}

const onResetGame = function (event) {
  event.preventDefault()
  board.finalBoard = Array(9).fill('')
  players.gamePlayer.roundNumber = 0
  players.gamePlayer.token = ''
  players.gamePlayer.winningToken = '',
  players.gamePlayer.gameHasBeenWon = false
  players.gamePlayer.gameOver = false
  players.gamePlayer.squareValue = null
  $('.square').text('')
  $('.square').on('click')
  $('#game-space').show()
}

const gameEventHandlers = () => {
  $('#playButton').on('click', onCreateGame)
  $('#resetButton').on('click', onResetGame)
  $('.square').on('click', onUpdateGame)
}

module.exports = {
  gameEventHandlers
}
