#!/usr/bin/env node

const path = require("path");
const process = require("../common/process");
const fs = require("fs");

const changVersionIOS = async () => {
  const filePath = path.resolve("./ios");
  let nameProject = "";
  fs.readdir(filePath, { encoding: "utf8" }, (err, data) => {
    if (err) throw err;
    const fileProject = data.find((item) => item.includes(".xcodeproj"));

    if (fileProject) {
      nameProject = fileProject.split(".")[0];
    }

    if (fileProject) {
      const infoPlistPath = path.resolve(`./ios/${nameProject}/Info.plist`);

      if (infoPlistPath) {
        process({
          path: infoPlistPath,
          pattern:
            /<key>CFBundleVersion<\/key>\n\s+<string>(\$\(CURRENT_PROJECT_VERSION\)|[0-9.]+)<\/string>/,
          platform: "ios",
        });
      }
    }
  });
};

module.exports = changVersionIOS;
