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

let finalBoard = Array(9).fill('')

function playToken () {
    player.switchToken()
    player.gamePlayer.roundNumber += 1
    $(this).text(player.gamePlayer.token)
    $(this).off()
    if ($(this).prop('id') === 'btn-1') {
      board.square1 = $(this).text()
      finalBoard[0] = board.square1
    } else if ($(this).prop('id') === 'btn-2') {
      board.square2 = $(this).text()
      finalBoard[1] = board.square2
    } else if ($(this).prop('id') === 'btn-3') {
      board.square3 = $(this).text()
      finalBoard[2] = board.square3
    } else if ($(this).prop('id') === 'btn-4') {
      board.square4 = $(this).text()
      finalBoard[3] = board.square4
    } else if ($(this).prop('id') === 'btn-5') {
      board.square5 = $(this).text()
      finalBoard[4] = board.square5
    } else if ($(this).prop('id') === 'btn-6') {
      board.square6 = $(this).text()
      finalBoard[5] = board.square6
    } else if ($(this).prop('id') === 'btn-7') {
      board.square7 = $(this).text()
      finalBoard[6] = board.square7
    } else if ($(this).prop('id') === 'btn-8') {
      board.square8 = $(this).text()
      finalBoard[7] = board.square8
    } else if ($(this).prop('id') === 'btn-9') {
      board.square9 = $(this).text()
      finalBoard[8] = board.square9
    }
    drawCondition()
    winConditions()
    console.log('finalBoard is ', finalBoard)
}

function winConditions () {
  if (board.square1 !== '' && board.square1 === board.square2 && board.square2 === board.square3) {
    player.winningToken = board.square1
    player.gameHasBeenWon = true
    closeBoard()
  } else if (board.square4 !== '' && board.square4 === board.square5 && board.square5 === board.square6) {
    player.winningToken = board.square4
    player.gameHasBeenWon = true
    closeBoard()
  } else if (board.square7 !== '' && board.square7 === board.square8 && board.square8 === board.square9) {
    player.winningToken = board.square7
    player.gameHasBeenWon = true
    closeBoard()
  } else if (board.square1 !== '' && board.square1 === board.square4 && board.square4 === board.square7) {
    player.winningToken = board.square1
    player.gameHasBeenWon = true
    closeBoard()
  } else if (board.square2 !== '' && board.square2 === board.square5 && board.square5 === board.square8) {
    player.winningToken = board.square2
    player.gameHasBeenWon = true
    closeBoard()
  } else if (board.square3 !== '' && board.square3 === board.square6 && board.square6 === board.square9) {
    player.winningToken = board.square3
    player.gameHasBeenWon = true
    closeBoard()
  } else if (board.square1 !== '' && board.square1 === board.square5 && board.square5 === board.square9) {
    player.winningToken = board.square1
    player.gameHasBeenWon = true
    closeBoard()
  } else if (board.square3 !== '' && board.square3 === board.square5 && board.square5 === board.square7) {
    player.winningToken = board.square3
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
    player.gamePlayer.gameIsADraw = true
    closeBoard()
  }
}

function closeBoard () {
  if (player.gameHasBeenWon === true) {
    $('#win-alert').text(`GAME OVER: winner, PLAYER ${player.winningToken}!`)
    $('#win-alert').css('color', 'white')
    $('#win-alert').css('background-color', 'green')
    $('#game-space').hide()
    $('#game-space').off()
  } else if (player.gamePlayer.gameIsADraw === true) {
    $('#win-alert').text('Draw game: NO WINNER')
    $('#win-alert').css('color', 'white')
    $('#win-alert').css('background-color', 'red')
    $('#game-space').hide()
    $('#game-space').off()
  }
}

const gameHandlers = () => {
  $('.col button').on('click', playToken)
}

module.exports = {
  gameHandlers
}
