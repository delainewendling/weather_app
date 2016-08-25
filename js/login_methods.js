"use strict";

let firebase = require("./firebaseConfig.js"),
    provider = new firebase.auth.GoogleAuthProvider();

function logInGoogle() {
  //most of the methods in firebase 3 return a promise
  return firebase.auth().signInWithPopup(provider);
}

function logOutGoogle(){
  return firebase.auth().signOut();
}

module.exports = {logInGoogle, logOutGoogle};