'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _env_vars = require('../constants/env_vars');

var _npmImports = require('../constants/npm-imports');

var deps = _interopRequireWildcard(_npmImports);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var args = process.argv.slice(2),
    component = args[1];

var template = void 0,
    reactImports = void 0,
    compBody = void 0,
    compEnd = '';

// Generate fn Component
if (_env_vars.fn) {
	if (_env_vars.redux) {
		reactImports = deps.Redux[0];
		compBody = '\nconst ' + component + ' = () => (\n\t<div className="' + component.toLowerCase() + '"></div>\n)\n\nconst mapStateToProps = state => {\n\t//state.theReducer\n}\n\nexport default connect(mapStateToProps)(' + component + ');';
	} else {
		reactImports = deps.React[0];
		compBody = '\n\nconst ' + component + ' = () => (\n\t<div className="' + component.toLowerCase() + '"></div>\n)\n\nexport default  ' + component + ';';
	}
}

// Or ES6 Component
else {
		if (_env_vars.redux) {
			reactImports = deps.Redux[1];

			compBody = '\nclass ' + component + ' extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<div className="' + component.toLowerCase() + '">\n\t\t\t\t{ this.props.children }\n\t\t\t</div>\n\t\t)\n\t}\n}\n\nconst mapStateToProps = state => {\n\t//state.theReducer\n}\n\nexport default connect(mapStateToProps)(' + component + ');';
		} else {
			reactImports = deps.React[1];
			compBody = '\n\nexport default class ' + component + ' extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<div className="' + component.toLowerCase() + '">\n\t\t\t\t{ this.props.children }\n\t\t\t</div>\n\t\t)\n\t}\n}';
		}
	}

// Mounts component to the DOM
if (_env_vars.isEntry) {
	if (_env_vars.fn) {
		reactImports += '\n\t\t' + deps.ReactDOM[1];
	} else {
		reactImports += '\n\t\t' + deps.ReactDOM[0];
	}

	compEnd += '\n\tReactDOM.render(<' + component + '/>, document.getElementById(\'app\'));\n\t';
}
// else {
// 	if (fn) {
// 		compEnd +=
// 		`
// 		module.exports = ${component};
// 		`
// 	}
// }

template = reactImports + compBody + compEnd;

// Export component
exports.default = template;