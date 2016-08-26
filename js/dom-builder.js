"use strict";

//Grab templates
var loginTemplate = require('../lib/templates/login.hbs'),
    loginData = require('../lib/templates/login-data.js'),
    zipTemplate = require('../lib/templates/zip.hbs'),
    currentWeatherTemplate = require('../lib/templates/currentWeather.hbs'),
    threeDayWeather = require('../lib/templates/3-day-weather.hbs'),
    sevenDayWeather = require('../lib/templates/7-day-weather.hbs'),
    profileTemplate = require('../lib/templates/profile.hbs');


function loginScreen (){
  console.log("loginScreen is running and here's the data", loginData);
  $(".content").html(loginTemplate(loginData));
}

loginScreen();

function enterZip (){
  $(".content").html(zipTemplate());
}

function showCurrentWeather(weatherData){
  $(".content").html(currentWeatherTemplate(weatherData));
}

function show3dayWeather(weatherData){
  $(".content").html(threeDayWeather(weatherData));
}

function show7dayWeather(weatherData){
  $(".content").html(sevenDayWeather(weatherData));
}

function showProfile(data){
  $(".content").html(profileTemplate(data));
}
module.exports = {enterZip, showCurrentWeather, show3dayWeather, show7dayWeather, showProfile};
