#! /usr/bin/env node
import pjson from '../package.json';

const
args = process.argv.slice(2),
action = args[0],

// options passed in as arguments
help = (args.includes('-h')) || (args.includes('--help'));

console.log("react-create"+ pjson.version);

const helpMsg = [
	'Usage: react-create component <filename> [options]',
	'Usage: react-create redux <filename> <action> [options]',

	'',
	'actions:',
	'  comp, component            Component creation', 
	'  rdx,	redux                 Action and Reducer creation',
	'',
	'options:',
	'  -h, --help                 Prints out usage options',
	'  -d, --dir                  Creates a [componen name] directory with component file inside',
	'',
	'component options:',
	'  -c, --controlled           Creates the component with controlled methods',
	'  -fn, --functional          Creates the component with React\'s functional <unstate> syntax. ',
	'  --jsx                      Creates the component with `.jsx` extenstion. (Default is `.js`)',
	'',
	'--css,--styl,--less,--scss   Create and choose your css preprocessor',

];

if (help || args.length == 0) {
	console.log(helpMsg.join('\n'));
	process.exit();
}

switch(action){
	case 'component':
	case 'comp':
		if (args.length < 2){
			console.error('Invalid arguments')
			console.log(helpMsg[0]);
			process.exit();
		}

		require('./scripts/component');
		break;
	case 'rdx':
	case 'redux':
		if (args.length < 3){
			console.error('Invalid arguments')
			console.log(helpMsg[1]);
			process.exit();
		}

		require('./scripts/redux')
		break;
	default:
		console.error(`Action ${action} is not supported`);
		console.log(helpMsg[0]);
		console.log(helpMsg[1]);
		process.exit();
}


