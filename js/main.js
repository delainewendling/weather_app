"use strict";

var Handlebars = require('../lib/node_modules/hbsfy/runtime'),
    loginMethods = require('./login_methods.js'),
    user = require('./user.js'),
    fbConfig = require('./firebaseConfig.js'),
    db = require('./db-interaction.js'),
    weatherGetter = require('./weather-getter.js'),
    dbuilder = require('./dom-builder.js'),
    weatherKey = weatherGetter(),
    daycount;

//Register a helper in Handlebars to help 
Handlebars.registerHelper("inc", function(value){
//parseInt just in case value is not a number
  return parseInt(value)+1;
});

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
    getWeather(zipcode, 1)
    .then((weatherData)=>{
      dbuilder.showCurrentWeather(weatherData);
    });
  }
}

function getWeather(zipcode, daycount){
  return new Promise (function (resolve, reject){
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/forecast/daily?zip=${zipcode},us&units=imperial&cnt=${daycount}&appid=${weatherKey}`,
    }).done(function(weatherData){
      console.log("weather data?", weatherData);
      resolve(weatherData);
    });
  });
}


