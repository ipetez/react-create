var args = process.argv.slice(2);
var component = args[0];
var es5 = args.indexOf('--es5') > -1;
var withPkg = (args.indexOf('--pkg') > -1) || (args.indexOf('-p') > -1);
var withJSX = args.indexOf('--jsx') > -1;
var reactImport, compBegin, compEnd, compBody;

// Generate ES5 Component
if (es5) {
  reactImport = 'var React = require(\'react\');\n\n';
  compBegin = 'var ' + component + ' = React.createClass({\n';
  compBody = '\u00A0\u00A0render: function() {\n\u00A0\u00A0\u00A0\u00A0return (\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0<div className="' + component.toLowerCase() + '">\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0{ this.props.children }\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0</div>\n\u00A0\u00A0\u00A0\u00A0)\n\u00A0\u00A0}\n';
  compEnd = '})';
}

// Or ES6 Component
else {
  reactImport = 'import React, { Component } from \'react\';\n\n';
  compBegin = 'export default class ' + component + ' extends Component {\n';
  compBody = '\u00A0\u00A0render() {\n\u00A0\u00A0\u00A0\u00A0return (\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0<div className="' + component.toLowerCase() + '">\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0{ this.props.children }\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0</div>\n\u00A0\u00A0\u00A0\u00A0)\n\u00A0\u00A0}\n';
  compEnd = '}';
}

// Export component
exports.cmpt = reactImport + compBegin + compBody + compEnd;

// Exporting package.json if flag exists
if (withPkg) {
  exports.pkg = '{\n\u00A0\u00A0"name": "' + component + '",\n\u00A0\u00A0"version": "0.0.0",\n\u00A0\u00A0"private": true,\n\u00A0\u00A0"main": "./' + component + (withJSX ? '.jsx' : '.js') + '"\n}';
}