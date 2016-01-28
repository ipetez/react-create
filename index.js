#! /usr/bin/env node

var exec = require('child_process').exec;
var fs = require('fs');
var pjson = require('./package.json');

var args = process.argv.slice(2);
var component = args[0];
var createFile, subDir = '';

// options passed in as arguments
var withFolder = (args.indexOf('--dir') > -1) || (args.indexOf('-d') > -1);
var withJSX = args.indexOf('--jsx') > -1;
var withPkg = (args.indexOf('--pkg') > -1) || (args.indexOf('-p') > -1);
var version = (args.indexOf('-v') > -1) || (args.indexOf('--version') > -1);
var help = (args.indexOf('-h') > -1) || (args.indexOf('--help') > -1);


// Loading in appropriate templates
var tmpl = require('./constants/templates');

if (version) {
  console.log(pjson.version);
  return;
}

if (help) {
  console.log([
    'usage: react-create [component name] [options]',
    '',
    'options:',
    '  -v, --version    Output\'s the version number (e.g react-create -v)',
    '  -d, --dir        Creates a [componen name] directory with component file inside',
    '  -p, --pkg        Includes a package.json file with component',
    '  --es5            Generates the compoenent with React\'s ES5 syntax. (Default is ES6)',
    '  --jsx            Creates the component with `.jsx` extenstion. (Default is `.js`)',
    '  --entry          Bootstraps the component with the \'ReactDOM.render\' function.'
  ].join('\n'));
  process.exit();
}

// Adding extensions for component
var extensions = [];
withJSX ? extensions.push('.jsx') : extensions.push('.js');
if (withFolder) { extensions.push('.css') };

// Detecting if platform is Windows, OSX, or Linux
switch (process.platform) {
  case 'darwin':
    createFile = 'touch ';
    break;
  case 'win32':
    createFile = 'echo > ';
    break;
  case 'linux':
    createFile = 'touch ';
    break;
  default:
    throw new Error('Unsupported platform: ' + process.platform);
}

// Creating component folder
if (withFolder) {
  exec('mkdir ' + component, function(err, stdout) {
    if (err) { throw err };
  });
  subDir = component + '/';
}

// Loop through to create necessary files
extensions.forEach(function(ext) {
  exec(createFile + subDir + component + ext, function(err, stdout) {
    if (err) { throw err };
  });
})

// Writing up markup to component (.js or jsx) file
fs.writeFile(subDir + component + extensions[0], tmpl.cmpt, function(err) {
  if (err) { throw err };
})

// Creating package.json pointing to component (via main) if needed
if (withPkg) {
  exec(createFile + subDir + 'package.json');
  fs.writeFile(subDir + 'package.json', tmpl.pkg, function(err) {
    if (err) { throw err };
  })
}