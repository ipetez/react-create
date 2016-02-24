#! /usr/bin/env node

var pjson = require('../package.json');

var args = process.argv.slice(2);
var action = args[0];

// options passed in as arguments
var version = (args.indexOf('-v') > -1) || (args.indexOf('--version') > -1);
var help = (args.indexOf('-h') > -1) || (args.indexOf('--help') > -1);

if (version) {
  console.log(pjson.version);
  return;
}

if (help) {
  console.log([
    'usage: react <fileType> <filename> [options]',
    '',
    'options:',
    '  -v, --version    Output\'s the version number (e.g react-create -v)',
    '  -d, --dir        Creates a [componen name] directory with component file inside',
    '  -p, --pkg        Includes a package.json file with component',
    '  comp, component  Passed in as first argument to signify component creation', 
    '  --es5            Generates the compoenent with React\'s ES5 syntax. (Default is ES6)',
    '  --jsx            Creates the component with `.jsx` extenstion. (Default is `.js`)',
    '  --entry          Bootstraps the component with the \'ReactDOM.render\' function.'
  ].join('\n'));
  process.exit();
}

if (action === 'component' || action === 'comp') {
  require('./scripts/component');
}