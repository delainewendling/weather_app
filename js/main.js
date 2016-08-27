"use strict";

let loginMethods = require('./login_methods.js'),
    firebase = require("../lib/node_modules/firebase/app"),
    user = require('./user.js'),
    fbConfig = require('./firebaseConfig.js'),
    db = require('./db-interaction.js'),
    weatherGetter = require('./weather-getter.js'),
    dbuilder = require('./dom-builder.js'),
    weatherKey = weatherGetter(),
    dbInteraction = require('./db-interaction.js'),
    userId,
    weather,
    daycount,
    zipcode;

$(document).on('click', '#submitZip', validateZip);
$(document).on('click', '.current-weather-btn', getCurrentWeather);
$(document).on('click', '.3-day-weather-btn', get3dayWeather);
$(document).on('click', '.7-day-weather-btn', get7dayWeather);
$(document).on('click', '.saveCurrentWeather', saveCurrentWeather);
$(document).on('click', '.save3dayWeather', save3dayWeather);
$(document).on('click', '.save7dayWeather', save7dayWeather);
$(document).on('click', '.weather', getCurrentWeather);
$(document).on('click', '.profile', goToProfile);

function goToProfile(){
  console.log("profile clicked!");
  dbInteraction.getWeather()
  .then((weatherData)=>{
    dbuilder.showProfile(weatherData);
  });
}

function validateZip (e){
  e.preventDefault();
  zipcode = $('#zip_code').val();
  console.log("zipcode", zipcode);
  if (zipcode.length !== 5 || zipcode.search(/[^0-9]/) !== -1){
    window.alert("Please enter a valid zip code");
  } else {
    userId = firebase.auth().currentUser.uid;
    getCurrentWeather();
  }
}

function getWeather(zipcode, daycount){
  return new Promise (function (resolve, reject){
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/forecast/daily?zip=${zipcode},us&units=imperial&cnt=${daycount}&appid=${weatherKey}`,
    }).done(function(weatherData){
      weather = weatherData;
      resolve(weatherData);
    });
  });
}

function getCurrentWeather (){
  getWeather(zipcode, 1)
  .then((weatherData)=>{
    weather = weatherData;
    dbuilder.showCurrentWeather(weatherData);
  });
}

function get3dayWeather (){
  getWeather(zipcode, 3)
  .then((weatherData)=>{
    weather = weatherData;
    dbuilder.show3dayWeather(weatherData);
  });
}

function get7dayWeather (){
  getWeather(zipcode, 7)
  .then((weatherData)=>{
    weather = weatherData;
    dbuilder.show7dayWeather(weatherData);
  });
}

function saveCurrentWeather (){
  let weatherObj = buildCurrentWeatherObj();
  console.log("weather object", weatherObj);
  dbInteraction.addWeather(weatherObj);
}

function save3dayWeather(){
  let weatherObj = build3DayWeatherObj();
  console.log("weather object", weatherObj);
  dbInteraction.addWeather(weatherObj);
}
function save7dayWeather (){
  let weatherObj = build7DayWeatherObj();
  console.log("weather object", weatherObj);
  dbInteraction.addWeather(weatherObj);
}

function buildCurrentWeatherObj(){
  userId = firebase.auth().currentUser.uid;
  let weatherObj = {
    "city": {
        "name": weather.city.name
    },
    "list": [
      {
        "temp": {
            "day": weather.list[0].temp.day
        },
        "weather": [
          {
            "description": weather.list[0].weather[0].description,
            "icon": weather.list[0].weather[0].icon
          }
        ],
        "speed": weather.list[0].speed,
        "pressure": weather.list[0].pressure
      }
    ],
    "uid": userId
  };
  return weatherObj;
}

function build3DayWeatherObj(){
  userId = firebase.auth().currentUser.uid;
  let weatherObj = {
    "city": {
        "name": weather.city.name
    },
    "list": [
      {
        "temp": {
            "day": weather.list[0].temp.day
        },
        "weather": [
          {
            "description": weather.list[0].weather[0].description,
            "icon": weather.list[0].weather[0].icon
          }
        ],
        "speed": weather.list[0].speed,
        "pressure": weather.list[0].pressure
      },
      {
        "temp": {
            "day": weather.list[1].temp.day
        },
        "weather": [
          {
            "description": weather.list[1].weather[0].description,
            "icon": weather.list[1].weather[0].icon
          }
        ],
        "speed": weather.list[1].speed,
        "pressure": weather.list[1].pressure
      },
      {
        "temp": {
            "day": weather.list[2].temp.day
        },
        "weather": [
          {
            "description": weather.list[2].weather[0].description,
            "icon": weather.list[2].weather[0].icon
          }
        ],
        "speed": weather.list[2].speed,
        "pressure": weather.list[2].pressure
      }
    ],
    "uid": userId
  };
  return weatherObj;
}

function build7DayWeatherObj(){
  userId = firebase.auth().currentUser.uid;
  let weatherObj = {
    "city": {
        "name": weather.city.name
    },
    "list": [
      {
        "temp": {
            "day": weather.list[0].temp.day
        },
        "weather": [
          {
            "description": weather.list[0].weather[0].description,
            "icon": weather.list[0].weather[0].icon
          }
        ],
        "speed": weather.list[0].speed,
        "pressure": weather.list[0].pressure
      },
      {
        "temp": {
            "day": weather.list[1].temp.day
        },
        "weather": [
          {
            "description": weather.list[1].weather[0].description,
            "icon": weather.list[1].weather[0].icon
          }
        ],
        "speed": weather.list[1].speed,
        "pressure": weather.list[1].pressure
      },
      {
        "temp": {
            "day": weather.list[2].temp.day
        },
        "weather": [
          {
            "description": weather.list[2].weather[0].description,
            "icon": weather.list[2].weather[0].icon
          }
        ],
        "speed": weather.list[2].speed,
        "pressure": weather.list[2].pressure
      },
      {
        "temp": {
            "day": weather.list[3].temp.day
        },
        "weather": [
          {
            "description": weather.list[3].weather[0].description,
            "icon": weather.list[3].weather[0].icon
          }
        ],
        "speed": weather.list[3].speed,
        "pressure": weather.list[3].pressure
      },
      {
        "temp": {
            "day": weather.list[4].temp.day
        },
        "weather": [
          {
            "description": weather.list[4].weather[0].description,
            "icon": weather.list[4].weather[0].icon
          }
        ],
        "speed": weather.list[4].speed,
        "pressure": weather.list[4].pressure
      },
      {
        "temp": {
            "day": weather.list[5].temp.day
        },
        "weather": [
          {
            "description": weather.list[5].weather[0].description,
            "icon": weather.list[5].weather[0].icon
          }
        ],
        "speed": weather.list[5].speed,
        "pressure": weather.list[5].pressure
      },
      {
        "temp": {
            "day": weather.list[6].temp.day
        },
        "weather": [
          {
            "description": weather.list[6].weather[0].description,
            "icon": weather.list[6].weather[0].icon
          }
        ],
        "speed": weather.list[6].speed,
        "pressure": weather.list[6].pressure
      }
    ],
    "uid": userId
  };
  return weatherObj;
}




