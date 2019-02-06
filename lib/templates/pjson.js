"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _env_vars = require("../constants/env_vars");

var args = process.argv.slice(2),
    component = args[1],
    extension = _env_vars.withJSX ? '.jsx' : '.js',
    template = "{\n  \"name\": \"".concat(component, "\",\n  \"version\": \"0.0.0\",\n  \"private\": true,\n  \"main\": \"./").concat(component).concat(extension, "\"\n}");
var _default = template;
exports.default = _default;