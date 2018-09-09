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
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  $('#signInForm input[type="email"]').val('')
  $('#signInForm input[type="password"]').val('')
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $('#change-password input[type="password"]').val('')
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  console.log('onsignout is firing at events.js')
}

const addHandlers = () => {
  $('#signUpForm').on('submit', onSignUp),
  $('#signInForm').on('submit', onSignIn),
  $('#changePasswordForm').on('submit', onChangePassword),
  $('#signOutControl').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
