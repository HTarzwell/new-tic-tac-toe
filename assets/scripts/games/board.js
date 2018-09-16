'use strict'
const player = require('./players')

let board = new Array(9).fill('')

const testFunction = function () {
  console.log(board)
}

const gameHandlers = () => {
  $('#btn-1').on('click', testFunction)
}

module.exports = {
  gameHandlers
}
