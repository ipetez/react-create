"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEntry = exports.redux = exports.fn = exports.controlled = exports.withPkg = exports.withJSX = exports.withFolder = void 0;
var args = process.argv.slice(2),
    // Component arguments
withFolder = args.indexOf('--dir') !== -1 || args.indexOf('-d') !== -1,
    withJSX = args.indexOf('--jsx') !== -1,
    withPkg = args.indexOf('--pkg') !== -1 || args.indexOf('-p') !== -1,
    controlled = args.indexOf('--controlled') !== -1 || args.indexOf('-c') !== -1,
    fn = args.indexOf('--functional') !== -1 || args.indexOf('-fn') !== -1,
    redux = args.indexOf('--redux') !== -1,
    isEntry = args.indexOf('--entry') !== -1; // Make variables accessible globally

exports.isEntry = isEntry;
exports.redux = redux;
exports.fn = fn;
exports.controlled = controlled;
exports.withPkg = withPkg;
exports.withJSX = withJSX;
exports.withFolder = withFolder;