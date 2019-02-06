#! /usr/bin/env node
"use strict";

var _package = _interopRequireDefault(require("../package.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = process.argv.slice(2),
    action = args[0],
    // options passed in as arguments
version = args.indexOf('-v') !== -1 || args.indexOf('--version') !== -1,
    help = args.indexOf('-h') !== -1 || args.indexOf('--help') !== -1;

if (version) {
  console.log(_package.default.version);
  process.exit();
}

var helpMsg = ['usage: react-create <action> <filename> [options]', '', 'actions:', '  comp, component            Passed in as first argument to signify component creation', '', 'options:', '  -v, --version              Output\'s the version number (e.g react-create -v)', '  -d, --dir                  Creates a [componen name] directory with component file inside', '  -p, --pkg                  Includes a package.json file with component', '  -c, --controlled           Generates the compoenent with controlled methods', '  -fn, --functional          Generates the compoenent with React\'s functional syntax. (Default is ES6)', '  --jsx                      Creates the component with `.jsx` extenstion. (Default is `.js`)', '  --entry                    Bootstraps the component with the \'ReactDOM.render\' function.', '--css,--styl,--less,--scss   Create and choose your css preprocessor to generate'];

if (help || args.length == 0) {
  console.log(helpMsg.join('\n'));
  process.exit();
}

switch (action) {
  case 'component':
  case 'comp':
    require('./scripts/component');

    break;

  default:
    console.error("Action ".concat(action, " is not supported"));
    console.log(helpMsg[0]);
    process.exit();
}