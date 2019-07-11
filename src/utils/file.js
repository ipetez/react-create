import fs from 'fs';
import { exec } from 'child_process';

function createDirectory(directory) {
	if(!fs.existsSync(directory)){
		fs.mkdirSync(directory);
	}
}

function createFiles(extensions, subDir, component, template, cb) {
	extensions.forEach((ext) => {
		cb(subDir, component, ext, template);
	});
}
function writeToFile(subDir, component, ext, compTmpl) {
	fs.writeFile(subDir + component + ext, compTmpl, { flag: 'wx' }, (err) => {
		if (err) { throw err };
	})
}

function createPjson(action, subDir, template) {
	exec(action + subDir + 'package.json', () => { 
		fs.writeFile(subDir + 'package.json', template, (err) => {
			if (err) { throw err };
		})
	});
}

export {
	createDirectory,
	createFiles,
	writeToFile,
	createPjson
};