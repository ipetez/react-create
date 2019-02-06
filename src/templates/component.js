import fs from 'fs';
import { fn, controlled, redux, isEntry } from '../constants/env_vars';
import * as deps from '../constants/npm-imports';

const
args = process.argv.slice(2),
component = args[1];

let template,reactImports, compBody, compEnd = '';


// Generate fn Component
if (fn) {
	if(controlled){
		console.log('Controlled component not suppot with functional syntax')
		process.exit();
	}

	if(redux) 
		compBody = fs.readFileSync(__dirname+'../../../templates/js/redux.fn.js', "utf8");
	else
		compBody = fs.readFileSync(__dirname+'../../../templates/js/functional.js', "utf8");

}else {
	if(redux) {
		if(controlled)
			compBody = fs.readFileSync(__dirname+'../../../templates/js/redux-controlled.js', "utf8");
		else
			compBody = fs.readFileSync(__dirname+'../../../templates/js/redux.js', "utf8");		

	}else{
		if(controlled)
			compBody = fs.readFileSync(__dirname+'../../../templates/js/component-controlled.js', "utf8");
		else
			compBody = fs.readFileSync(__dirname+'../../../templates/js/component.js', "utf8");
	}
}

compBody = (compBody.replace(new RegExp('COMPONENT_NAME', 'g'), component).replace(new RegExp('component_name', 'g'), component.toLocaleLowerCase()));

// Mounts component to the DOM
if (isEntry) {
	console.error('Entry not available, under construction!');
	process.exit();
}

template = compBody + compEnd;


// Export component
export default template;