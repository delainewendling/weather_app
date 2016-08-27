"use strict";

let firebase = require("./firebaseConfig.js"),
    provider = new firebase.auth.GoogleAuthProvider();

//LOGIN/LOGOUT WITH GOOGLE
function logInGoogle() {
  //most of the methods in firebase 3 return a promise
  return firebase.auth().signInWithPopup(provider);
}

function logOutGoogle(){
  return firebase.auth().signOut();
}

//LOGIN/LOGOUT WITH EMAIL
// function emailLogin(){
//   return firebase.auth().createUserWithEmailAndPassword(email, password)
//   .catch(function(error) {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     $(".loginScreen").html(`<h2 class='center-align'> ${errorMessage} </h2>`);
//   });
// }

module.exports = {logInGoogle, logOutGoogle};