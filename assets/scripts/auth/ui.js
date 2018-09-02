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
}

const signInFailure = function (error) {
  $('#signInAlert').text('Invalid Sign In')
  $('#signInAlert').css('color', 'white')
  $('#signInAlert').css('background-color', 'red')
  console.log(error)
}

const changePasswordSuccess = function () {
  $('#signInAlert').text('Successfully Changed Password!')
  $('#signInAlert').css('color', 'white')
  $('#signInAlert').css('background-color', 'green')
  console.log("changePasswordSuccess firing at ui.js")
}

const changePasswordFailure = function (error) {
  $('#signInAlert').text('Password Change Unsuccessful')
  $('#signInAlert').css('color', 'white')
  $('#signInAlert').css('background-color', 'red')
  console.log(error)
}

const signOutSuccess = function () {
  $('#signInAlert').text('Successfully Signed Out')
  $('#signInAlert').css('color', 'white')
  $('#signInAlert').css('background-color', 'green')
  console.log('signout was successful')
}

const signOutFailure = function (error) {
  $('#signInAlert').text('Sign Out Unsuccessful')
  $('#signInAlert').css('color', 'white')
  $('#signInAlert').css('background-color', 'red')
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
