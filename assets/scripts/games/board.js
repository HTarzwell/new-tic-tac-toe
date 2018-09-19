'use strict'
const player = require('./players')

let board = new Array(9).fill('')

function switchToken () {
    if (player.gamePlayer.roundNumber === 0 || player.gamePlayer.roundNumber % 2 !== 1) {
      player.gamePlayer.token = 'X'
    } else {
      player.gamePlayer.token = 'O'
    }
    player.gamePlayer.roundNumber += 1
    console.log('round number is ', player.gamePlayer.roundNumber)
    console.log('token is ', player.gamePlayer.token)
}

const gameHandlers = () => {
  $('.col button').on('click', switchToken)
}

module.exports = {
  gameHandlers
}
