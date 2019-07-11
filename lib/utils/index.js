"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.capitalizeFirst = void 0;

var capitalizeFirst = function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

exports.capitalizeFirst = capitalizeFirst;
var _default = {
  capitalizeFirst: capitalizeFirst
};
exports["default"] = _default;