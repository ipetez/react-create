'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _env_vars = require('../constants/env_vars');

var args = process.argv.slice(2),
    component = args[1],
    extension = _env_vars.withJSX ? '.jsx' : '.js',
    template = '{\n  "name": "' + component + '",\n  "version": "0.0.0",\n  "private": true,\n  "main": "./' + component + extension + '"\n}';

exports.default = template;