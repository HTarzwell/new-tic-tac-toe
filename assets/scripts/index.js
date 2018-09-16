'use strict'
// this is for user interface only, game procedures go in another file
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const gameBoard = require('./games/board')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  authEvents.addHandlers()
})

$(() => {
  gameBoard.gameHandlers()
})
