'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#signUpAlert').text('Sign-Up Successful!')
  $('#signUpAlert').css('background-color', 'green')
  $('#signUpAlert').css('color', 'white')
}

const signUpFailure = function (error) {
  $('#signUpAlert').text('Error On Sign-Up')
  $('#signUpAlert').css('color', 'white')
  $('#signUpAlert').css('background-color', 'red')
  console.log(error)
}

const signInSuccess = function (data) {
  $('#signInAlert').text('Successfully Signed In!')
  $('#signInAlert').css('color', 'white')
  $('#signInAlert').css('background-color', 'green')
  store.user = data.user
  console.log("signUpSuccess firing at ui.js")
  console.log('store.user is ', store.user)
}

const signInFailure = function (error) {
  $('#signInAlert').text('Invalid Sign In')
  $('#signInAlert').css('color', 'white')
  $('#signInAlert').css('background-color', 'red')
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
