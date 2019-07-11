"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _file = require("../utils/file");

var _utils = require("../utils");

var _env_vars = require("../constants/env_vars");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Used for reading and writing component files
// Constants
var args = process.argv.slice(2),
    component = args[1];
var compName = _env_vars.fn ? component : (0, _utils.capitalizeFirst)(component);
var fileName = _env_vars.withFolder ? 'index' : compName;
var subDir = ''; // Loading in appropriate templates

var template = getTemplate();
/**
  Grabbing style extension from arguments and adding to
  full list of extensions
*/

function getCssExtension(args, styleExts) {
  for (var x = 0, len = args.length; x < len; x++) {
    if (styleExts.indexOf(args[x]) !== -1) {
      return '.' + args[x].slice(2);
    }
  }
} // Creating component folder


if (_env_vars.withFolder) {
  (0, _file.createDirectory)(compName);
  subDir = compName + '/';
} // Loop through to create necessary files


(0, _file.createFiles)([_env_vars.withJSX ? '.jsx' : '.js'], subDir, fileName, template.component, _file.writeToFile);

if (template.style) {
  var extension = getCssExtension(args, _constants.styleExts);
  console.log(extension);
  (0, _file.createFiles)([extension], subDir, fileName, template.style, _file.writeToFile);
}

function getTemplate() {
  var compBody,
      style,
      compEnd = ''; // Generate fn Component

  if (_env_vars.fn) {
    if (_env_vars.controlled) {
      console.info('Controlled component not suppot with functional syntax');
      process.exit();
    }

    if (_env_vars.redux) compBody = _fs["default"].readFileSync(__dirname + '../../../templates/component/redux.fn.js', "utf8");else compBody = _fs["default"].readFileSync(__dirname + '../../../templates/component/functional.js', "utf8");
  } else {
    if (_env_vars.redux) {
      if (_env_vars.controlled) compBody = _fs["default"].readFileSync(__dirname + '../../../templates/component/redux-controlled.js', "utf8");else compBody = _fs["default"].readFileSync(__dirname + '../../../templates/component/redux.js', "utf8");
    } else {
      if (_env_vars.controlled) compBody = _fs["default"].readFileSync(__dirname + '../../../templates/component/component-controlled.js', "utf8");else compBody = _fs["default"].readFileSync(__dirname + '../../../templates/component/component.js', "utf8");
    }
  }

  if (_env_vars.stylClean) {
    style = _fs["default"].readFileSync(__dirname + '../../../templates/style/style.styl', "utf8");
  } else if (_env_vars.stylNormal) {
    style = _fs["default"].readFileSync(__dirname + '../../../templates/style/style.css', "utf8");
  }

  compBody = compBody.replace(/COMPONENT_NAME/g, compName).replace(/component_name/g, compName.toLowerCase());

  if (_env_vars.stylClean || _env_vars.stylNormal) {
    style = style.replace(/component_name/g, compName.toLowerCase());
  } // Mounts component to the DOM


  if (_env_vars.isEntry) {
    console.error('Entry not available, under construction!');
    process.exit();
  }

  return {
    component: compBody + compEnd,
    style: style
  };
}