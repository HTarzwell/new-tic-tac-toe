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

let finalBoard = new Array(9)

function playToken () {
    player.switchToken()
    player.gamePlayer.roundNumber += 1
    $(this).text(player.gamePlayer.token)
    $(this).off()
    if ($(this).prop('id') === 'btn-1') {
      board.square1 = $(this).text()
      finalBoard[0] = board.square1
      console.log(finalBoard)
    } else if ($(this).prop('id') === 'btn-2') {
      board.square2 = $(this).text()
      finalBoard[1] = board.square2
      console.log(finalBoard)
    } else if ($(this).prop('id') === 'btn-3') {
      board.square3 = $(this).text()
      finalBoard[2] = board.square3
      console.log(finalBoard)
    } else if ($(this).prop('id') === 'btn-4') {
      board.square4 = $(this).text()
      finalBoard[3] = board.square4
      console.log(finalBoard)
    } else if ($(this).prop('id') === 'btn-5') {
      board.square5 = $(this).text()
      finalBoard[4] = board.square5
      console.log(finalBoard)
    } else if ($(this).prop('id') === 'btn-6') {
      board.square6 = $(this).text()
      finalBoard[5] = board.square6
      console.log(finalBoard)
    } else if ($(this).prop('id') === 'btn-7') {
      board.square7 = $(this).text()
      finalBoard[6] = board.square7
      console.log(finalBoard)
    } else if ($(this).prop('id') === 'btn-8') {
      board.square8 = $(this).text()
      finalBoard[7] = board.square8
      console.log(finalBoard)
    } else if ($(this).prop('id') === 'btn-9') {
      board.square9 = $(this).text()
      finalBoard[8] = board.square9
      console.log(finalBoard)
    }
    winConditions()
    drawCondition()
}

function winConditions () {
  if (board.square1 !== '' && board.square1 === board.square2 && board.square2 === board.square3) {
    player.winningToken = board.square1
    console.log('the winning token is ', player.winningToken)
    player.gameHasBeenWon = true
    closeBoard()
  } else if (board.square4 !== '' && board.square4 === board.square5 && board.square5 === board.square6) {
    player.winningToken = board.square4
    player.gameHasBeenWon = true
    console.log('the winning token is ', player.winningToken)
    closeBoard()
  } else if (board.square7 !== '' && board.square7 === board.square8 && board.square8 === board.square9) {
    player.winningToken = board.square7
    player.gameHasBeenWon = true
    console.log('the winning token is ', player.winningToken)
    closeBoard()
  } else if (board.square1 !== '' && board.square1 === board.square4 && board.square4 === board.square7) {
    player.winningToken = board.square1
    player.gameHasBeenWon = true
    console.log('the winning token is ', player.winningToken)
    closeBoard()
  } else if (board.square2 !== '' && board.square2 === board.square5 && board.square5 === board.square8) {
    player.winningToken = board.square2
    player.gameHasBeenWon = true
    console.log('the winning token is ', player.winningToken)
    closeBoard()
  } else if (board.square3 !== '' && board.square3 === board.square6 && board.square6 === board.square9) {
    player.winningToken = board.square3
    player.gameHasBeenWon = true
    console.log('the winning token is ', player.winningToken)
    closeBoard()
  } else if (board.square1 !== '' && board.square1 === board.square5 && board.square5 === board.square9) {
    player.winningToken = board.square1
    player.gameHasBeenWon = true
    console.log('the winning token is ', player.winningToken)
    closeBoard()
  } else if (board.square3 !== '' && board.square3 === board.square5 && board.square5 === board.square7) {
    player.winningToken = board.square3
    player.gameHasBeenWon = true
    console.log('the winning token is ', player.winningToken)
    closeBoard()
  }
}
//LEAVE OFF HERE
function drawCondition () {
  let squarecounter = 0
  for (const [key, value] of Object.entries(board)) {
    if (value !== '') {
      squarecounter += 1
    }
  }
  if (squarecounter === 9 && player.gameHasBeenWon === false) {
    $('#game-space').hide()
    $('#game-space').off()
    $('#win-alert').text(`DRAW GAME, no winner`)
    $('#win-alert').css('color', 'white')
    $('#win-alert').css('background-color', 'red')
  }
}

function closeBoard () {
  if (player.gameHasBeenWon === true) {
    $('#game-space').hide()
    $('#game-space').off()
    $('#win-alert').text(`GAME OVER: winner, PLAYER ${player.winningToken}!`)
    $('#win-alert').css('color', 'white')
    $('#win-alert').css('background-color', 'green')
  }
}

const gameHandlers = () => {
  $('.col button').on('click', playToken)
}

module.exports = {
  gameHandlers
}
