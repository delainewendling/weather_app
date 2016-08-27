"use strict";
var firebase = require("../lib/node_modules/firebase/app");

function getWeather(){
  let userId = firebase.auth().currentUser.uid;
  console.log("user id?", userId);
  return new Promise ((resolve, reject)=>{
    $.ajax({
      url: `https://weather-app-48be0.firebaseio.com/weather.json?orderBy="uid"&equalTo${userId}`
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

