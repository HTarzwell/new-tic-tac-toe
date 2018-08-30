'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onSignUp = function (event) {
  console.log('onsignup firing at events.js')
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#signUpEmail input[type="email"]').val('')
  $('#signUpPassword input[type="password"]').val('')
  $('#signUpPasswordConfirm input[type="password"]').val('')
}

const addHandlers = () => {
  $('#signUpForm').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}
