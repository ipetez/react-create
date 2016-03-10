#! /usr/bin/env node

import pjson from '../package.json';

const
  args = process.argv.slice(2),
  action = args[0],

  // options passed in as arguments
  version = (args.includes('-v')) || (args.includes('--version')),
  help = (args.includes('-h')) || (args.includes('--help'));

if (version) {
  console.log(pjson.version);
  process.exit();
}

if (help) {
  console.log([
    'usage: react-create <action> <filename> [options]',
    'NOTE: \'rc\' is a shorthand alias for the \'react-create\' command',
    '',
    'actions:',
    '  comp, component          Passed in as first argument to signify component creation', 
    '',
    'options:',
    '  -v, --version            Output\'s the version number (e.g react-create -v)',
    '  -d, --dir                Creates a [componen name] directory with component file inside',
    '  -p, --pkg                Includes a package.json file with component',
    '  --es5                    Generates the compoenent with React\'s ES5 syntax. (Default is ES6)',
    '  --jsx                    Creates the component with `.jsx` extenstion. (Default is `.js`)',
    '  --entry                  Bootstraps the component with the \'ReactDOM.render\' function.',
    '--css,--styl,--less, -scss Create and choose your css preprocessor to generate'
  ].join('\n'));
  process.exit();
}

if (action === 'component' || action === 'comp') {
  require('./scripts/component');
}