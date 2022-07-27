#!/usr/bin/env node

const changeVersionAndroid = require("./android");
const changeVersionIOS = require("./ios");

changeVersionAndroid();
changeVersionIOS();
