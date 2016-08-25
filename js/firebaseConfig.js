"use strict";

let firebase = require("../lib/node_modules/firebase/app"),
    //we need to pull in the fb-getter function to get the key and url
    fb = require("./fb-getter.js"),
    fbData = fb();

require("../lib/node_modules/firebase/auth");

var config = {
  apiKey: fbData.key,
  authDomain: fbData.authUrl,
};

firebase.initializeApp(config);

module.exports = firebase;
