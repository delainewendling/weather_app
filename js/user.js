'use strict';

var loginMethods = require('./login_methods.js'),
    nextScreen = require('./dom-builder.js');
var displayName,
    profileImg,
    userId;

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
      userId = user.uid;
      // loadLoginInfo();
      nextScreen.enterZip();
    });
  }

  // function loadLoginInfo() {
  //   $(".userInfo").html(`<img src="${profileImg}" class="profilePic"> <span class="userName"> ${displayName} </span>`);
  // }
