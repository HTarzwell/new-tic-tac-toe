'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
// const index = require('../index.js')

const onSignUp = function (event) {
  event.preventDefault() // prevents page from refreshing!!
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#signUpEmail input[type="email"]').val('')
  $('#signUpPassword input[type="password"]').val('')
  $('#signUpPasswordConfirm input[type="password"]').val('')
  console.log('onsignup firing at events.js')
}

const addHandlers = () => {
  $('#signUpForm').on('submit', onSignUp)
}
