'use strict';

var loginMethods = require('./login_methods.js'),
    nextScreen = require('./dom-builder.js');
var displayName,
    profileImg;

$(document).on('click', '#google', googleLogin);
// $(document).on('click', '#facebook', facebookLogin);
// $(document).on('click', '#twitter', twitterLogin);
// $(document).on('click', '#github', githubLogin);

function googleLogin() {
  loginMethods.logInGoogle()
  .then((result)=>{
    displayName = result.user.displayName;
    profileImg = result.user.photoURL;
    let user = result.user;
    var userId = result.user.uid;
    console.log("user id?", userId);
    nextScreen.enterZip();
  });
}



