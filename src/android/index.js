#!/usr/bin/env node

const path = require("path");
const process = require("../common/process");

const changeVersionAndroid = async () => {
  const filePath = path.resolve("./android/app/build.gradle");
  process({
    path: filePath,
    pattern: /versionCode\s*[0-9.]+/,
    platform: "android",
  });
};

module.exports = changeVersionAndroid;
