"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDirectory = createDirectory;
exports.createFiles = createFiles;
exports.writeToFile = writeToFile;
exports.createPjson = createPjson;

var _fs = _interopRequireDefault(require("fs"));

var _child_process = require("child_process");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createDirectory(directory) {
  if (!_fs["default"].existsSync(directory)) {
    _fs["default"].mkdirSync(directory);
  }
}

function createFiles(extensions, subDir, component, template, cb) {
  extensions.forEach(function (ext) {
    cb(subDir, component, ext, template);
  });
}

function writeToFile(subDir, component, ext, compTmpl) {
  _fs["default"].writeFile(subDir + component + ext, compTmpl, {
    flag: 'wx'
  }, function (err) {
    if (err) {
      throw err;
    }

    ;
  });
}

function createPjson(action, subDir, template) {
  (0, _child_process.exec)(action + subDir + 'package.json', function () {
    _fs["default"].writeFile(subDir + 'package.json', template, function (err) {
      if (err) {
        throw err;
      }

      ;
    });
  });
}