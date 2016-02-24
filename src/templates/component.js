var args = process.argv.slice(2);
var component = args[1];
var options = require('../constants/env_vars');
var reactImport, compBegin, compEnd, compBody;

// Generate ES5 Component
if (options.es5) {
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
if (options.isEntry) {
  if (options.es5) {
    reactImport += '\nvar ReactDOM = require(\'react-dom\');';
  }
  else {
    reactImport += '\nimport ReactDOM from \'react-dom\';';
  }
  compEnd += '\n\nReactDOM.render(<' + component + '/>, document.getElementById(\'app\'));';
}

// Export component
module.exports = reactImport + compBegin + compBody + compEnd;