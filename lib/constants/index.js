"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleExts = exports.createFile = void 0;
var createFile; // Detecting if platform is Windows, OSX, or Linux
// for creating files

exports.createFile = createFile;

switch (process.platform) {
  case 'darwin':
  case 'linux':
    exports.createFile = createFile = 'touch ';
    break;

  case 'win32':
    exports.createFile = createFile = 'echo > ';
    break;

  default:
    throw new Error('Unsupported platform: ' + process.platform);
} // stylesheet extensions


var styleExts = ['--scss', '--styl', '--css', '--styl', '--less'];
exports.styleExts = styleExts;