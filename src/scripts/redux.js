import path from 'path';
import fs from 'fs';

// Used for reading and writing files

import { createDirectory, createFiles, writeToFile } from '../utils/file';
import { withFolder } from '../constants/env_vars';



const currentDir = (process.cwd().split(path.sep)).slice(-1)[0];


if(currentDir != 'src'){
	console.log('/src');
	
	if(fs.existsSync('src')){
		process.chdir('src');
	}else if(!withFolder){
		console.error("Run this command from src/ or parent /src")
		process.exit();
	}

}else{
	withFolder = false;
}



const
	args = process.argv.slice(2),
	
	name = args[1].toLowerCase(),
	nEvent = args[2]
;

const type = name.toUpperCase()+'_'+nEvent.toUpperCase();

let subDirs = {
	actions: './actions/',
	reducers: './reducers/'
}

if (withFolder) {
	createDirectory('src');
	subDirs.actions = 'src/'+subDirs.actions;
	subDirs.reducers = 'src/'+subDirs.reducers;
}

createDirectory(subDirs.actions);
createDirectory(subDirs.reducers);


const template = getTemplate();

try{
	createFiles(['.js'], subDirs.actions, `${name}.actions`, template.actionTemplate, writeToFile)
}catch(e){
	console.error(e);
}

try{
	createFiles(['.js'], subDirs.reducers, `${name}.reducer`, template.reducerTemplate, writeToFile)
}catch(e){
	console.error(e);
}

function getTemplate (){
	

	let actionTemplate = fs.readFileSync(__dirname+'../../../templates/redux/action.template.js', "utf8");
	let reducerTemplate = fs.readFileSync(__dirname+'../../../templates/redux/reducer.template.js', "utf8");
	
	actionTemplate = actionTemplate
		.replace(/COMPONENT_NAME/g, name)
		.replace(/ACTION_EVENT/g,  nEvent)
		.replace(/ACTION_TYPE/g, type)
	;
	
	
	reducerTemplate = reducerTemplate
		.replace(/COMPONENT_NAME/g, name)
		.replace(/ACTION_EVENT/g,  nEvent)
		.replace(/ACTION_TYPE/g, type)
	;

	return {
		actionTemplate, reducerTemplate
	}
}
