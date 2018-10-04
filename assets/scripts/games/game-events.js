'use strict'

const api = require('./game-api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./game-ui')

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
  console.log('onCreateGame firing in events, data in events is ', data)
}

const gameEventHandlers = () => {
  $('#playButton').on('click', onCreateGame)
}

module.exports = {
  gameEventHandlers
}
