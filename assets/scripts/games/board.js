'use strict'
const player = require('./players')

// let board = new Array(9).fill('')

function selectSquare () {
  
}

function playToken () {
    if (player.gamePlayer.roundNumber === 0 || player.gamePlayer.roundNumber % 2 !== 1) {
      player.gamePlayer.token = 'X'
    } else {
      player.gamePlayer.token = 'O'
    }
    player.gamePlayer.roundNumber += 1
    $(this).text(player.gamePlayer.token)
    $(this).off()
}

const gameHandlers = () => {
  $('.col button').on('click', playToken)
}

module.exports = {
  gameHandlers
}
