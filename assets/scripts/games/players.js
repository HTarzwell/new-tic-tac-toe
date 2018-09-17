'use strict'

function gamePlayer () {
  
}
/* const gamePlayer = {
  let token = '',
  let roundNumber = 0,
  function switchToken () {
    if (this.roundNumber === 0 || this.roundNumber % 2 !== 1) {
      this.token = 'X'
    } else {
      this.token = 'O'
    }
    console.log('token is ', this.token)
    console.log('round number is ', this.roundNumber)
  }
}

function changeToken () {
  $('.col button').on('click', function () {
    gamePlayer.roundNumber += 1
  })
  .then(gamePlayer.switchToken)
} */

module.exports = {
  gamePlayer
}
