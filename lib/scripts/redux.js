"use strict";

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _file = require("../utils/file");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Used for reading and writing files
// import { withFolder } from '../constants/env_vars';
var currentDir = process.cwd().split(_path["default"].sep).slice(-1)[0]; // if(currentDir != 'src'){
// 	console.log('/src');
// 	if(fs.existsSync('src')){
// 		process.chdir('src');
// 	}
// }else{
// 	withFolder = false;
// }

var args = process.argv.slice(2),
    name = args[1].toLowerCase(),
    nEvent = args[2];
var type = name.toUpperCase() + '_' + nEvent.toUpperCase();
var subDirs = {
  actions: './actions/',
  reducers: './reducers/' // if (withFolder) {
  // 	createDirectory('src');
  // 	subDirs.actions = 'src/'+subDirs.actions;
  // 	subDirs.reducers = 'src/'+subDirs.reducers;
  // }

};
if (!_fs["default"].existsSync(subDirs.actions)) (0, _file.createDirectory)(subDirs.actions);
if (!_fs["default"].existsSync(subDirs.reducers)) (0, _file.createDirectory)(subDirs.reducers);
var template = getTemplate();

try {
  (0, _file.createFiles)(['.js'], subDirs.actions, "".concat(name, ".actions"), template.actionTemplate, _file.writeToFile);
} catch (e) {
  console.error(e);
}

try {
  (0, _file.createFiles)(['.js'], subDirs.reducers, "".concat(name, ".reducer"), template.reducerTemplate, _file.writeToFile);
} catch (e) {
  console.error(e);
}

function getTemplate() {
  var actionTemplate = _fs["default"].readFileSync(__dirname + '../../../templates/redux/action.template.js', "utf8");

  var reducerTemplate = _fs["default"].readFileSync(__dirname + '../../../templates/redux/reducer.template.js', "utf8");

  actionTemplate = actionTemplate.replace(/COMPONENT_NAME/g, name).replace(/ACTION_EVENT/g, nEvent).replace(/ACTION_TYPE/g, type);
  reducerTemplate = reducerTemplate.replace(/COMPONENT_NAME/g, name).replace(/ACTION_EVENT/g, nEvent).replace(/ACTION_TYPE/g, type);
  return {
    actionTemplate: actionTemplate,
    reducerTemplate: reducerTemplate
  };
}