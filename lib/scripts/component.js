"use strict";

var _env_vars = require("../constants/env_vars");

var _constants = require("../constants");

var _file = require("../utils/file");

var _component = _interopRequireDefault(require("../templates/component"));

var _pjson = _interopRequireDefault(require("../templates/pjson"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Constants
// Used for reading and writing component files
// Loading in appropriate templates
var args = process.argv.slice(2),
    component = args[1],
    extensions = [];
var subDir = '';
/**
  Grabbing style extension from arguments and adding to
  full list of extensions
*/

function addCssExtension(args, styleExts, extensions) {
  for (var x = 0, len = args.length; x < len; x++) {
    if (styleExts.indexOf(args[x]) !== -1) {
      extensions.push('.' + args[x].slice(2));
    }
  }
} // Adding component file extension


_env_vars.withJSX ? extensions.push('.jsx') : extensions.push('.js'); // Adding stylesheet extensions

addCssExtension(args, _constants.styleExts, extensions); // Creating component folder

if (_env_vars.withFolder) {
  (0, _file.createDirectory)(component);
  subDir = component + '/';
} // Loop through to create necessary files


(0, _file.createFiles)(extensions, _constants.createFile, subDir, component, _component.default, _file.writeToFile); // Creating package.json pointing to component (via main) if needed

if (_env_vars.withPkg) {
  (0, _file.createPjson)(_constants.createFile, subDir, _pjson.default);
}