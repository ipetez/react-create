import fs from 'fs';
// Used for reading and writing component files
import { createDirectory, createFiles, writeToFile } from '../utils/file';
import {capitalizeFirst} from '../utils';

// Constants
import { withJSX, withFolder, stylClean, stylNormal } from '../constants/env_vars';
import { styleExts } from '../constants';

import { fn, controlled, redux, isEntry } from '../constants/env_vars';


const
  args = process.argv.slice(2),
  component = args[1]
;

const compName = fn ? component : capitalizeFirst(component);
const fileName = withFolder ? 'index' : compName;

let subDir = '';

// Loading in appropriate templates
const template = getTemplate();

/**
  Grabbing style extension from arguments and adding to
  full list of extensions
*/
function getCssExtension(args, styleExts) {
  for (let x = 0, len = args.length; x < len; x++) {
    if (styleExts.includes(args[x])) {
		return '.' + args[x].slice(2)
    }
  }
}


// Creating component folder
if (withFolder) {
  createDirectory(compName);
  subDir = compName + '/';
}

// Loop through to create necessary files
createFiles([withJSX ? '.jsx' : '.js'], subDir, fileName, template.component, writeToFile);

if(template.style){
	let extension = getCssExtension(args, styleExts);
	console.log(extension)
	createFiles([extension], subDir, fileName, template.style, writeToFile);
}

function getTemplate (){
	let compBody, style, compEnd = '';

	// Generate fn Component
	if (fn) {
		if(controlled) {
			console.info('Controlled component not suppot with functional syntax');
			process.exit();
		}

		if(redux) 
			compBody = fs.readFileSync(__dirname+'../../../templates/component/redux.fn.js', "utf8");
		else
			compBody = fs.readFileSync(__dirname+'../../../templates/component/functional.js', "utf8");

	}else {
		if(redux) {
			if(controlled)
				compBody = fs.readFileSync(__dirname+'../../../templates/component/redux-controlled.js', "utf8");
			else
				compBody = fs.readFileSync(__dirname+'../../../templates/component/redux.js', "utf8");		

		}else{
			if(controlled)
				compBody = fs.readFileSync(__dirname+'../../../templates/component/component-controlled.js', "utf8");
			else
				compBody = fs.readFileSync(__dirname+'../../../templates/component/component.js', "utf8");
		}
	}

	if(stylClean){
		style = fs.readFileSync(__dirname+'../../../templates/style/style.styl', "utf8");
	}else if(stylNormal){
		style = fs.readFileSync(__dirname+'../../../templates/style/style.css', "utf8");
	}

	compBody = compBody
		.replace(/COMPONENT_NAME/g, compName)
		.replace(/component_name/g, compName.toLowerCase())
	;

	if(stylClean || stylNormal){
		style = style
			.replace(/component_name/g, compName.toLowerCase())
		;
	}

	// Mounts component to the DOM
	if (isEntry) {
		console.error('Entry not available, under construction!');
		process.exit();
	}

	return {
		component: compBody + compEnd,
		style
	}
}
