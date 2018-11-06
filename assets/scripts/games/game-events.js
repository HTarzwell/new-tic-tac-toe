'use strict'

const api = require('./game-api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./game-ui')
const store = require('../store')

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onUpdateGame = function (event) {
 event.preventDefault()
 api.updateGame(event)
   .then(ui.updateGameSuccess)
   .catch(ui.updateGameFailure)
}

const gameEventHandlers = () => {
  $('#playButton').on('click', onCreateGame)
  $('.square').on('click', onUpdateGame)
}

module.exports = {
  gameEventHandlers
}
