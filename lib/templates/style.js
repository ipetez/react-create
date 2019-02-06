"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var args = process.argv.slice(2),
    component = args[1];
var template = "\n\t.".concat(component.toLowerCase(), " {\n\t\t\n\t}\n");
var _default = template;
exports.default = _default;