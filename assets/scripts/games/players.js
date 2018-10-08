'use strict'
const gameBoard = require('./board')

const gamePlayer = {
  roundNumber: 0,
  token: '',
  winningToken: '',
  gameHasBeenWon: false,
  gameOver: false
}

function switchToken () {
  if (gamePlayer.roundNumber === 0 || gamePlayer.roundNumber % 2 !== 1) {
    gamePlayer.token = 'X'
  } else {
    gamePlayer.token = 'O'
  }
}

module.exports = {
  gamePlayer,
  switchToken
}
