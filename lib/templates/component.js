"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _env_vars = require("../constants/env_vars");

var deps = _interopRequireWildcard(require("../constants/npm-imports"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = process.argv.slice(2),
    component = args[1];
var template,
    reactImports,
    compBody,
    compEnd = ''; // Generate fn Component

if (_env_vars.fn) {
  if (_env_vars.controlled) {
    console.log('Controlled component not suppot with functional syntax');
    process.exit();
  }

  if (_env_vars.redux) compBody = _fs.default.readFileSync(__dirname + '../../../templates/js/redux.fn.js', "utf8");else compBody = _fs.default.readFileSync(__dirname + '../../../templates/js/functional.js', "utf8");
} else {
  if (_env_vars.redux) {
    if (_env_vars.controlled) compBody = _fs.default.readFileSync(__dirname + '../../../templates/js/redux-controlled.js', "utf8");else compBody = _fs.default.readFileSync(__dirname + '../../../templates/js/redux.js', "utf8");
  } else {
    if (_env_vars.controlled) compBody = _fs.default.readFileSync(__dirname + '../../../templates/js/component-controlled.js', "utf8");else compBody = _fs.default.readFileSync(__dirname + '../../../templates/js/component.js', "utf8");
  }
}

compBody = compBody.replace(new RegExp('COMPONENT_NAME', 'g'), component).replace(new RegExp('component_name', 'g'), component.toLocaleLowerCase()); // Mounts component to the DOM

if (_env_vars.isEntry) {
  console.error('Entry not available, under construction!');
  process.exit();
}

template = compBody + compEnd; // Export component

var _default = template;
exports.default = _default;