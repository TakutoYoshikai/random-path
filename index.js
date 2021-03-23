const fs = require("fs");
const path = require("path");

function getDirs(dir) {
  let files;
  try {
    files = fs.readdirSync(dir);
  } catch (err) {
    return [];
  }
  files = files.map((file) => {
    return path.join(dir, file);
  });
  const dirs = files.filter((file) => {
    let isDir;
    try {
      isDir = fs.statSync(file).isDirectory();
    } catch(err) {
      return false;
    }
    return isDir;
  });
  return dirs;
}

function RandomPath(dir) {
  let dirs = getDirs(dir);
  let result;
  while (dirs.length > 0) {
    result = dirs[Math.floor(Math.random() * dirs.length)];
    dirs = getDirs(result);
  }
  return result;
}

module.exports = RandomPath;
