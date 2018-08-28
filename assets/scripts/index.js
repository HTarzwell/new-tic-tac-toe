'use strict'
// this is for user interface only, game procedures go in another file
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')

$(() => {
  setAPIOrigin(location, config)
})

$('#mybutton').on('click', function () {
  console.log('the submit button works!')
})

/*
$(() => {
  authEvents.addHandlers()
})
*/
