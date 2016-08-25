"use strict";

var loginMethods = require('./login_methods.js'),
    user = require('./user.js'),
    fbConfig = require('./firebaseConfig.js'),
    db = require('./db-interaction.js'),
    weatherGetter = require('./weather-getter.js'),
    dbuilder = require('./dom-builder.js'),
    weatherKey = weatherGetter(),
    daycount,
    zipcode;

$(document).on('click', '#submitZip', validateZip);
$(document).on('click', '.current-weather-btn', getCurrentWeather);
$(document).on('click', '.3-day-weather-btn', get3dayWeather);
$(document).on('click', '.7-day-weather-btn', get7dayWeather);

function validateZip (e){
  e.preventDefault();
  zipcode = $('#zip_code').val();
  console.log("zipcode", zipcode);
  if (zipcode.length !== 5 || zipcode.search(/[^0-9]/) !== -1){
    console.log("inside if", zipcode);
    window.alert("Please enter a valid zip code");
  } else {
    console.log("inside else", zipcode);
    getCurrentWeather();
  }
}

function getWeather(zipcode, daycount){
  return new Promise (function (resolve, reject){
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/forecast/daily?zip=${zipcode},us&units=imperial&cnt=${daycount}&appid=${weatherKey}`,
    }).done(function(weatherData){
      resolve(weatherData);
    });
  });
}

function getCurrentWeather (){
  getWeather(zipcode, 1)
  .then((weatherData)=>{
    dbuilder.showCurrentWeather(weatherData);
  });
}

function get3dayWeather (){
  getWeather(zipcode, 3)
  .then((weatherData)=>{
    dbuilder.show3dayWeather(weatherData);
  });
}

function get7dayWeather (){
  getWeather(zipcode, 7)
  .then((weatherData)=>{
    dbuilder.show7dayWeather(weatherData);
  });
}


