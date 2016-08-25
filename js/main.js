"use strict";

var loginMethods = require('./login_methods.js'),
    user = require('./user.js'),
    fbConfig = require('./firebaseConfig.js'),
    db = require('./db-interaction.js'),
    weatherGetter = require('./weather-getter.js'),
    dbuilder = require('./dom-builder.js'),
    weatherKey = weatherGetter();

$(document).on('click', '#submitZip', validateZip);

function validateZip (){
  let zipcode = $('input#enterZip').val();
  if (zipcode.length > 5 || zipcode.search(/\D/)){
    alert("Please enter a valid zip code");
  } else {
    getWeather(zipcode)
    .then((weatherData)=>{
      
    })
  }
}

function getWeather(zipcode){
  return new Promise (function (resolve, reject){
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/forecast/daily?zip=${zipcode},us&cnt=3&appid=${weatherKey}`,
    }).done(function(weatherData){
      console.log("weather data?", weatherData)
      resolve(weatherData);
    });
  });
}


