'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#signUpForm input[type="email"]').val('')
  $('#signUpForm input[type="password"]').val('')
  // $('#signUpForm input[type="password"]').val('')
}

const onSignIn = function (event) {
  console.log('onsignin firing at events.js')
  event.preventDefault()
  const data = getFormFields(this)
  console.log("DATA IS ", data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  $('#signInForm input[type="text"]').val('')
  $('#signInForm input[type="password"]').val('')
}

const addHandlers = () => {
  $('#signUpForm').on('submit', onSignUp),
  $('#signInForm').on('submit', onSignIn)
}

module.exports = {
  addHandlers
}
