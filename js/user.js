'use strict';

var loginMethods = require('./login_methods.js');
var displayName,
    profileImg,
    userId;

$("#google-auth").click(googleLogin);

  function googleLogin() {
    console.log("clicked auth");
    loginMethods.logInGoogle()
    .then((result)=>{
      console.log("result from login", result);
      displayName = result.user.displayName;
      profileImg = result.user.photoURL;
      let user = result.user;
      userId = user.uid;
      loadLoginInfo();
    });
  }

  function loadLoginInfo() {
    $(".userInfo").html(`<img src="${profileImg}" class="profilePic"> <span class="userName"> ${displayName} </span>`);
  }
