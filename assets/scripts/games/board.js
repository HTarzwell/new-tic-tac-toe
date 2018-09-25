'use strict'
const player = require('./players')

let board = {
 square1: '',
 square2: '',
 square3: '',
 square4: '',
 square5: '',
 square6: '',
 square7: '',
 square8: '',
 square9: ''
}

function winConditions () {
  if (board.square1 !== '' && board.square1 === board.square2 && board.square2 === board.square3) {
    player.winningToken = board.square1
    console.log('the winning token is ', player.winningToken)
  } else if (board.square4 !== '' && board.square4 === board.square5 && board.square5 === board.square6) {
    player.winningToken = board.square4
    console.log('the winning token is ', player.winningToken)
  } else if (board.square7 !== '' && board.square7 === board.square8 && board.square8 === board.square9) {
    player.winningToken = board.square7
    console.log('the winning token is ', player.winningToken)
  } else if (board.square1 !== '' && board.square1 === board.square4 && board.square4 === board.square7) {
    player.winningToken = board.square1
    console.log('the winning token is ', player.winningToken)
  } else if (board.square2 !== '' && board.square2 === board.square5 && board.square5 === board.square8) {
    player.winningToken = board.square2
    console.log('the winning token is ', player.winningToken)
  } else if (board.square3 !== '' && board.square3 === board.square6 && board.square6 === board.square9) {
    player.winningToken = board.square3
    console.log('the winning token is ', player.winningToken)
  } else if (board.square1 !== '' && board.square1 === board.square5 && board.square5 === board.square9) {
    player.winningToken = board.square1
    console.log('the winning token is ', player.winningToken)
  } else if (board.square3 !== '' && board.square3 === board.square5 && board.square5 === board.square7) {
    player.winningToken = board.square3
    console.log('the winning token is ', player.winningToken)
  }
}

function switchToken () {
  if (player.gamePlayer.roundNumber === 0 || player.gamePlayer.roundNumber % 2 !== 1) {
    player.gamePlayer.token = 'X'
  } else {
    player.gamePlayer.token = 'O'
  }
}

function playToken () {
    switchToken()
    player.gamePlayer.roundNumber += 1
    $(this).text(player.gamePlayer.token)
    $(this).off()
    if ($(this).prop('id') === 'btn-1') {
      board.square1 = $(this).text()
    } else if ($(this).prop('id') === 'btn-2') {
      board.square2 = $(this).text()
    } else if ($(this).prop('id') === 'btn-3') {
      board.square3 = $(this).text()
    } else if ($(this).prop('id') === 'btn-4') {
      board.square4 = $(this).text()
    } else if ($(this).prop('id') === 'btn-5') {
      board.square5 = $(this).text()
    } else if ($(this).prop('id') === 'btn-6') {
      board.square6 = $(this).text()
    } else if ($(this).prop('id') === 'btn-7') {
      board.square7 = $(this).text()
    } else if ($(this).prop('id') === 'btn-8') {
      board.square8 = $(this).text()
    } else if ($(this).prop('id') === 'btn-9') {
      board.square9 = $(this).text()
    }
    winConditions()
}

const gameHandlers = () => {
  $('.col button').on('click', playToken)
}

module.exports = {
  gameHandlers
}
