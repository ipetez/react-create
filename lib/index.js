#! /usr/bin/env node
'use strict';

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = process.argv.slice(2),
    action = args[0],


// options passed in as arguments
version = args.indexOf('-v') !== -1 || args.indexOf('--version') !== -1,
    help = args.indexOf('-h') !== -1 || args.indexOf('--help') !== -1;

if (version) {
  console.log(_package2.default.version);
  process.exit();
}

if (help) {
  console.log(['usage: react-create <action> <filename> [options]', '', 'actions:', '  comp, component          Passed in as first argument to signify component creation', '', 'options:', '  -v, --version            Output\'s the version number (e.g react-create -v)', '  -d, --dir                Creates a [componen name] directory with component file inside', '  -p, --pkg                Includes a package.json file with component', '  --fn                    Generates the compoenent with React\'s fn syntax. (Default is ES6)', '  --jsx                    Creates the component with `.jsx` extenstion. (Default is `.js`)', '  --entry                  Bootstraps the component with the \'ReactDOM.render\' function.', '--css,--styl,--less,--scss Create and choose your css preprocessor to generate'].join('\n'));
  process.exit();
}

if (action === 'component' || action === 'comp') {
  require('./scripts/component');
}