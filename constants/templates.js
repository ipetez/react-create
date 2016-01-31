var args = process.argv.slice(2);
var component = args[0];
var es5 = args.indexOf('--es5') > -1;
var withPkg = (args.indexOf('--pkg') > -1) || (args.indexOf('-p') > -1);
var withJSX = args.indexOf('--jsx') > -1;
var isEntry = args.indexOf('--entry') > -1;
var reactImport, compBegin, compEnd, compBody;

// Generate ES5 Component
if (es5) {
  reactImport = 'var React = require(\'react\');';
  compBegin = '\n\nvar ' + component + ' = React.createClass({\n';
  compBody = '\u0020\u0020render: function() {\n\u0020\u0020\u0020\u0020return (\n\u0020\u0020\u0020\u0020\u0020\u0020<div className="' + component.toLowerCase() + '">\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020{ this.props.children }\n\u0020\u0020\u0020\u0020\u0020\u0020</div>\n\u0020\u0020\u0020\u0020)\n\u0020\u0020}\n';
  compEnd = '});';
}

// Or ES6 Component
else {
  reactImport = 'import React, { Component } from \'react\';';
  compBegin = '\n\nexport default class ' + component + ' extends Component {\n';
  compBody = '\u0020\u0020render() {\n\u0020\u0020\u0020\u0020return (\n\u0020\u0020\u0020\u0020\u0020\u0020<div className="' + component.toLowerCase() + '">\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020{ this.props.children }\n\u0020\u0020\u0020\u0020\u0020\u0020</div>\n\u0020\u0020\u0020\u0020)\n\u0020\u0020}\n';
  compEnd = '};';
}

// Mounts component to the DOM
if (isEntry) {
  if (es5) {
    reactImport += '\nvar ReactDOM = require(\'react-dom\');';
  }
  else {
    reactImport += '\nimport ReactDOM from \'react-dom\';';
  }
  compEnd += '\n\nReactDOM.render(<' + component + '/>, document.getElementById(\'app\'));';
}

// Export component
exports.cmpt = reactImport + compBegin + compBody + compEnd;

// Exporting package.json if flag exists
if (withPkg) {
  exports.pkg = '{\n\u0020\u0020"name": "' + component + '",\n\u0020\u0020"version": "0.0.0",\n\u0020\u0020"private": true,\n\u0020\u0020"main": "./' + component + (withJSX ? '.jsx' : '.js') + '"\n}';
}