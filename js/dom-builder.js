"use strict";

//Grab templates
var loginTemplate = require('../lib/templates/login.hbs'),
    loginData = require('../lib/templates/login-data.js'),
    zipTemplate = require('../lib/templates/zip.hbs'),
    weatherTemplate = require('../lib/templates/weather.hbs');

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
  $(".content").html(weatherTemplate());
}

module.exports = {enterZip, showCurrentWeather};
