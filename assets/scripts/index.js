'use strict'
// this is for user interface only, game procedures go in another file
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const gameBoard = require('./games/board')
const gameEvents = require('./games/game-events')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  authEvents.addHandlers()
})

$(() => {
  gameBoard.gameHandlers()
})

$(() => {
  gameEvents.gameEventHandlers()
})
