'use strict'
// const player = require('./players')
const store = require('../store')

let gameBoard = {
  board: Array(9).fill(''),
  token: '',
  round: 0,
  index: '',
  over: false,
  won: false,
  winner: ''
}

function switchToken () {
  if (gameBoard.round === 0 || gameBoard.round % 2 !== 1) {
    gameBoard.token = 'X'
  } else {
    gameBoard.token = 'O'
  }
}

function playToken () {
  switchToken()
  gameBoard.round += 1
  $(this).text(gameBoard.token)
  gameBoard.board[Number($(this).prop('id'))] = $(this).text()
  gameBoard.index = Number($(this).prop('id'))
  $(this).attr('disabled', true)
  console.log('gameBoard is now ', gameBoard.board)
  console.log('index is ', gameBoard.index)
  winConditions()
  drawCondition()
}

function winConditions () {
  if (gameBoard.board[0] !== '' && gameBoard.board[0] === gameBoard.board[1] && gameBoard.board[1] === gameBoard.board[2]) {
    gameBoard.winner = gameBoard.board[0]
    gameBoard.won = true
    closeBoard()
  } else if (gameBoard.board[3] !== '' && gameBoard.board[3] === gameBoard.board[4] && gameBoard.board[4] === gameBoard.board[5]) {
    gameBoard.winner = gameBoard.board[3]
    gameBoard.won = true
    closeBoard()
  } else if (gameBoard.board[6] !== '' && gameBoard.board[6] === gameBoard.board[7] && gameBoard.board[7] === gameBoard.board[8]) {
    gameBoard.winner = gameBoard.board[6]
    gameBoard.won = true
    closeBoard()
  } else if (gameBoard.board[0] !== '' && gameBoard.board[0] === gameBoard.board[3] && gameBoard.board[3] === gameBoard.board[6]) {
    gameBoard.winner = gameBoard.board[0]
    gameBoard.won = true
    closeBoard()
  } else if (gameBoard.board[1] !== '' && gameBoard.board[1] === gameBoard.board[4] && gameBoard.board[4] === gameBoard.board[7]) {
    gameBoard.winner = gameBoard.board[1]
    gameBoard.won = true
    closeBoard()
  } else if (gameBoard.board[2] !== '' && gameBoard.board[2] === gameBoard.board[5] && gameBoard.board[5] === gameBoard.board[8]) {
    gameBoard.winner = gameBoard.board[2]
    gameBoard.won = true
    closeBoard()
  } else if (gameBoard.board[0] !== '' && gameBoard.board[0] === gameBoard.board[4] && gameBoard.board[4] === gameBoard.board[8]) {
    gameBoard.winner = gameBoard.board[0]
    gameBoard.won = true
    closeBoard()
  } else if (gameBoard.board[2] !== '' && gameBoard.board[2] === gameBoard.board[4] && gameBoard.board[4] === gameBoard.board[6]) {
    gameBoard.winner = gameBoard.board[2]
    gameBoard.won = true
    closeBoard()
  }
}

function drawCondition () {
  if (gameBoard.board.includes('') && gameBoard.won !== true) {
    $('#win-alert').text('Continue playing')
    $('#win-alert').css('color', 'white')
    $('#win-alert').css('background-color', 'green')
  } else {
    gameBoard.over = true
    closeBoard()
  }
}

function closeBoard () {
  if (gameBoard.won === true) {
    $('#win-alert').text(`GAME OVER: winner, PLAYER ${gameBoard.winner}!`)
    $('#win-alert').css('color', 'white')
    $('#win-alert').css('background-color', 'green')
    $('#game-space').hide()
    gameBoard.over = true
  } else {
    $('#win-alert').text('Draw game: NO WINNER')
    $('#win-alert').css('color', 'white')
    $('#win-alert').css('background-color', 'red')
    $('#game-space').hide()
  }
}

const onResetGame = function () {
  gameBoard.board = Array(9).fill('')
  gameBoard.token = ''
  gameBoard.round = 0
  gameBoard.over = false
  gameBoard.won = false
  gameBoard.winner = ''
  $('.square').text('')
  $('.square').removeAttr('disabled')
  $('#game-space').show()
  console.log('reset game board is now ', gameBoard.board)
}

const gameHandlers = () => {
  $('.col button').on('click', playToken)
  $('#newGameButton').on('click', onResetGame)
}

module.exports = {
  gameHandlers,
  gameBoard
}
