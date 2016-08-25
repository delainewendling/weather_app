"use strict";

//Grab templates
var loginTemplate = require('../lib/templates/login.hbs'),
    loginData = require('../lib/templates/login-data.js'),
    zipTemplate = require('../lib/templates/zip.hbs');

console.log("login info", loginData);

function loginScreen (){
  console.log("loginScreen is running and here's the data", loginData);
  $(".content").html(loginTemplate(loginData));
}

loginScreen();

function enterZip (){
  $(".content").html(zipTemplate());
}

function showCurrentWeather(){

}

module.exports = {enterZip, showCurrentWeather};
