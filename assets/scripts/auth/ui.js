'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#alert').text('Sign-Up Successful!')
  $('#alert').css('background-color', 'green')
  $('#alert').css('color', 'white')
}

const signUpFailure = function (error) {
  $('#alert').text('Error On Sign-Up')
  $('#alert').css('color', 'white')
  $('#alert').css('background-color', 'red')
  console.log(error)
}

const signInSuccess = function (data) {
  $('#alert').text('Successfully Signed In!')
  $('#alert').css('color', 'white')
  $('#alert').css('background-color', 'green')
  store.user = data.user
}

const signInFailure = function (error) {
  $('#alert').text('Invalid Sign In')
  $('#alert').css('color', 'white')
  $('#alert').css('background-color', 'red')
  console.log(error)
}

const changePasswordSuccess = function () {
  $('#alert').text('Successfully Changed Password!')
  $('#alert').css('color', 'white')
  $('#alert').css('background-color', 'green')
  console.log("changePasswordSuccess firing at ui.js")
}

const changePasswordFailure = function (error) {
  $('#alert').text('Password Change Unsuccessful')
  $('#alert').css('color', 'white')
  $('#alert').css('background-color', 'red')
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
