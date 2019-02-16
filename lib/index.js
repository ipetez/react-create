#! /usr/bin/env node
"use strict";

var _package = _interopRequireDefault(require("../package.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = process.argv.slice(2),
    action = args[0],
    // options passed in as arguments
version = args.indexOf('-v') !== -1 || args.indexOf('--version') !== -1,
    help = args.indexOf('-h') !== -1 || args.indexOf('--help') !== -1; // if (version) {
// 	process.exit();
// }

console.log("react-create" + _package.default.version);
var helpMsg = ['Usage: react-create component <filename> [options]', 'Usage: react-create redux <filename> [action] [options]', '', 'actions:', '  comp, component            Component creation', '  rdx,	redux                 Action and Reducer creation', '', 'options:', '  -h, --help                 Prints out usage options', '  -d, --dir                  Creates a [componen name] directory with component file inside', '', 'component options:', '  -c, --controlled           Creates the component with controlled methods', '  -fn, --functional          Creates the component with React\'s functional <unstate> syntax. ', '  --jsx                      Creates the component with `.jsx` extenstion. (Default is `.js`)', '', '--css,--styl,--less,--scss   Create and choose your css preprocessor'];

if (help || args.length == 0) {
  console.log(helpMsg.join('\n'));
  process.exit();
}

switch (action) {
  case 'component':
  case 'comp':
    require('./scripts/component');

    break;

  case 'rdx':
  case 'redux':
    require('./scripts/redux');

    break;

  default:
    console.error("Action ".concat(action, " is not supported"));
    console.log(helpMsg[0]);
    process.exit();
}