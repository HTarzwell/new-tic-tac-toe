'use strict'
// this is for user interface only, game procedures go in another file
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')

$(() => {
  setAPIOrigin(location, config)
})

$('#signUpForm').on('submit', function () {
  event.preventDefault()
  console.log('the submit button works!')
})

/*
$(() => {
  authEvents.addHandlers()
})
*/
