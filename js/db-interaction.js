"use strict";

function getWeather(){
  return new Promise ((resolve, reject)=>{
    $.ajax({
      url: `https://weather-app-48be0.firebaseio.com/weather.json`
    }).done(function(weatherData){
      resolve(weatherData);
    });
  });
}

function addWeather(weatherObj){
  return new Promise ((resolve, reject)=>{
    $.ajax({
      url: 'https://weather-app-48be0.firebaseio.com/weather.json',
      method: "POST",
      data: JSON.stringify(weatherObj),
      dataType: 'json'
      }).done((weatherId)=>{
        resolve(weatherId);
    });
  });
}

module.exports = {addWeather, getWeather};

