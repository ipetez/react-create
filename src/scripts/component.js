#! /usr/bin/env node

var args = process.argv.slice(2);
var component = args[1];
var createFile, subDir = '';

var options = require('../constants/env_vars');

// Used for reading and writing component files
var fs = require('fs');
var exec = require('child_process').exec;

// Loading in appropriate templates
var compTmpl = require('../templates/component');
var pjTmpl = require('../templates/pjson');

// Adding extensions for component
var extensions = [];
options.withJSX ? extensions.push('.jsx') : extensions.push('.js');
if (options.withFolder) { extensions.push('.css') };

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
if (options.withFolder) {
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
fs.writeFile(subDir + component + extensions[0], compTmpl, function(err) {
  if (err) { throw err };
})

// Creating package.json pointing to component (via main) if needed
if (options.withPkg) {
  exec(createFile + subDir + 'package.json');
  fs.writeFile(subDir + 'package.json', pjTmpl, function(err) {
    if (err) { throw err };
  })
}