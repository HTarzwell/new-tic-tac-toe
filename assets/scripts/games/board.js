'use strict'
const player = require('./players')
const store = require('../store')

let finalBoard = Array(9).fill('')

function playToken () {
    player.switchToken()
    player.gamePlayer.roundNumber += 1
    $(this).text(player.gamePlayer.token)
    $(this).off('click')
    finalBoard[Number($(this).prop('id'))] = $(this).text()
    player.gamePlayer.squareValue = Number($(this).prop('id'))
    drawCondition()
    winConditions()
    console.log('finalBoard is ', finalBoard)
    console.log('squareValue is now ', player.gamePlayer.squareValue)
}

function winConditions () {
  if (finalBoard[0] !== '' && finalBoard[0] === finalBoard[1] && finalBoard[1] === finalBoard[2]) {
    player.winningToken = finalBoard[0]
    player.gameHasBeenWon = true
    closeBoard()
  } else if (finalBoard[3] !== '' && finalBoard[3] === finalBoard[4] && finalBoard[4] === finalBoard[5]) {
    player.winningToken = finalBoard[3]
    player.gameHasBeenWon = true
    closeBoard()
  } else if (finalBoard[6] !== '' && finalBoard[6] === finalBoard[7] && finalBoard[7] === finalBoard[8]) {
    player.winningToken = finalBoard[6]
    player.gameHasBeenWon = true
    closeBoard()
  } else if (finalBoard[0] !== '' && finalBoard[0] === finalBoard[3] && finalBoard[3] === finalBoard[6]) {
    player.winningToken = finalBoard[0]
    player.gameHasBeenWon = true
    closeBoard()
  } else if (finalBoard[1] !== '' && finalBoard[1] === finalBoard[4] && finalBoard[4] === finalBoard[7]) {
    player.winningToken = finalBoard[1]
    player.gameHasBeenWon = true
    closeBoard()
  } else if (finalBoard[2] !== '' && finalBoard[2] === finalBoard[5] && finalBoard[5] === finalBoard[8]) {
    player.winningToken = finalBoard[2]
    player.gameHasBeenWon = true
    closeBoard()
  } else if (finalBoard[0] !== '' && finalBoard[0] === finalBoard[4] && finalBoard[4] === finalBoard[8]) {
    player.winningToken = finalBoard[0]
    player.gameHasBeenWon = true
    closeBoard()
  } else if (finalBoard[2] !== '' && finalBoard[2] === finalBoard[4] && finalBoard[4] === finalBoard[6]) {
    player.winningToken = finalBoard[2]
    player.gameHasBeenWon = true
    closeBoard()
  }
}

function drawCondition () {
  if (finalBoard.includes('') && player.gamePlayer.gameHasBeenWon !== true) {
    $('#win-alert').text('Continue playing')
    $('#win-alert').css('color', 'white')
    $('#win-alert').css('background-color', 'green')
  } else {
    player.gamePlayer.gameOver = true
    closeBoard()
  }
}

function closeBoard () {
  if (player.gameHasBeenWon === true) {
    $('#win-alert').text(`GAME OVER: winner, PLAYER ${player.winningToken}!`)
    $('#win-alert').css('color', 'white')
    $('#win-alert').css('background-color', 'green')
    $('#game-space').hide()
    player.gamePlayer.gameOver = true
  } else if (player.gamePlayer.gameOver === true) {
    $('#win-alert').text('Draw game: NO WINNER')
    $('#win-alert').css('color', 'white')
    $('#win-alert').css('background-color', 'red')
    $('#game-space').hide()
  }
}

const gameHandlers = () => {
  $('.col button').on('click', playToken)
}

module.exports = {
  gameHandlers
}
