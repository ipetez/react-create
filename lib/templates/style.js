"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var args = process.argv.slice(2),
    component = args[1];

var template = "\n\t." + component.toLowerCase() + " {\n\t\t\n\t}\n";

exports.default = template;