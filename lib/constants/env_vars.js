"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stylNormal = exports.stylClean = exports.redux = exports.fn = exports.controlled = exports.withPkg = exports.withJSX = exports.withFolder = void 0;
var args = process.argv.slice(2),
    // Component arguments
withFolder = args.indexOf('--dir') !== -1 || args.indexOf('-d') !== -1,
    withJSX = args.indexOf('--jsx') !== -1,
    withPkg = args.indexOf('--pkg') !== -1 || args.indexOf('-p') !== -1,
    controlled = args.indexOf('--controlled') !== -1 || args.indexOf('-c') !== -1,
    fn = args.indexOf('--functional') !== -1 || args.indexOf('-fn') !== -1,
    redux = args.indexOf('--redux') !== -1,
    stylClean = args.indexOf('--scss') !== -1 || args.indexOf('--styl') !== -1,
    stylNormal = args.indexOf('--css') !== -1 || args.indexOf('--less') !== -1; // Make variables accessible globally

exports.stylNormal = stylNormal;
exports.stylClean = stylClean;
exports.redux = redux;
exports.fn = fn;
exports.controlled = controlled;
exports.withPkg = withPkg;
exports.withJSX = withJSX;
exports.withFolder = withFolder;