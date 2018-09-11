'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#alert').text('Sign-Up Successful!')
  $('#alert').css('background-color', 'green')
  $('#alert').css('color', 'white')
  $(".modal.in").modal("hide")
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
  $(".modal.in").modal("hide")
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
  $(".modal.in").modal("hide")
}

const changePasswordFailure = function (error) {
  $('#alert').text('Password Change Unsuccessful')
  $('#alert').css('color', 'white')
  $('#alert').css('background-color', 'red')
  console.log(error)
}

const signOutSuccess = function () {
  $('#alert').text('Successfully Signed Out')
  $('#alert').css('color', 'white')
  $('#alert').css('background-color', 'green')
  console.log('signout was successful')
  $(".modal.in").modal("hide")
}

const signOutFailure = function (error) {
  $('#alert').text('Sign Out Unsuccessful')
  $('#alert').css('color', 'white')
  $('#alert').css('background-color', 'red')
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
