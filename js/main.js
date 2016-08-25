"use strict";

var loginMethods = require('./login_methods.js'),
    user = require('./user.js'),
    fbConfig = require('./firebaseConfig.js'),
    db = require('./db-interaction.js'),
    weatherGetter = require('./weather-getter.js'),
    dbuilder = require('./dom-builder.js'),
    weatherKey = weatherGetter();

$(document).on('click', '#submitZip', validateZip);

function validateZip (e){
  e.preventDefault();
  var zipcode = $('#zip_code').val();
  console.log("zipcode", zipcode);
  if (zipcode.length !== 5 || zipcode.search(/[^0-9]/) !== -1){
    console.log("inside if", zipcode);
    window.alert("Please enter a valid zip code");
  } else {
    console.log("inside else", zipcode);
    getWeather(zipcode)
    .then((weatherData)=>{
      dbuilder.showCurrentWeather(weatherData);
    });
  }
}

function getWeather(zipcode){
  return new Promise (function (resolve, reject){
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/forecast/daily?zip=${zipcode},us&cnt=3&appid=${weatherKey}`,
    }).done(function(weatherData){
      console.log("weather data?", weatherData);
      resolve(weatherData);
    });
  });
}


