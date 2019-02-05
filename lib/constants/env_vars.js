'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var args = process.argv.slice(2),


// Component arguments
withFolder = args.indexOf('--dir') !== -1 || args.indexOf('-d') !== -1,
    withJSX = args.indexOf('--jsx') !== -1,
    withPkg = args.indexOf('--pkg') !== -1 || args.indexOf('-p') !== -1,
    fn = args.indexOf('--fn') !== -1,
    redux = args.indexOf('--redux') !== -1,
    isEntry = args.indexOf('--entry') !== -1;

// Make variables accessible globally
exports.withFolder = withFolder;
exports.withJSX = withJSX;
exports.withPkg = withPkg;
exports.fn = fn;
exports.redux = redux;
exports.isEntry = isEntry;