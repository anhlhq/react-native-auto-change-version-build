#!/usr/bin/env node

const fs = require("fs");

const process = async ({ path, pattern, platform }) => {
  console.log("path", path);
  fs.readFile(path, { encoding: "utf8" }, (err, data) => {
    const date = new Date();
    const year = date.getFullYear();
    const _month = date.getMonth() + 1;
    const month = _month < 10 ? `0${_month}` : _month;
    const day = date.getDate();
    const yymmdd = `${year.toString().slice(2, 4)}${month}${
      day < 10 ? `0${day}` : day
    }`;

    let newPrefixVersion = "";
    let newSuffixVersion = "";

    const oldVersion = data
      .match(pattern)[0]
      .match(/(\$\(CURRENT_PROJECT_VERSION\)|[0-9.]+)/)[0];

    if (oldVersion.slice(0, 6) !== yymmdd) {
      newPrefixVersion = yymmdd;
      newSuffixVersion = "01";
    } else {
      const suffixVersion = oldVersion.slice(6);
      const _suffixVersion = Number(suffixVersion) + 1;
      newPrefixVersion = oldVersion.slice(0, 6);
      newSuffixVersion =
        _suffixVersion < 10 ? `0${_suffixVersion}` : _suffixVersion;
    }

    const newVersion = `${newPrefixVersion}${newSuffixVersion}`;

    fs.writeFile(
      path,
      data.replace(
        pattern,
        `${
          platform === "android"
            ? `versionCode ${newVersion}`
            : `<key>CFBundleVersion</key>\n	<string>${newVersion}</string>`
        }`
      ),
      (err) => {
        if (err) throw err;
        console.log("Version code changed! ->", newVersion);
      }
    );
  });
};

module.exports = process;
