var args = process.argv.slice(2);
var component = args[1];
var options = require('../constants/env_vars');

module.exports = '{\n\u0020\u0020"name": "' + component + '",\n\u0020\u0020"version": "0.0.0",\n\u0020\u0020"private": true,\n\u0020\u0020"main": "./' + component + (options.withJSX ? '.jsx' : '.js') + '"\n}';