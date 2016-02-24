var args = process.argv.slice(2);

// Component creation
var withFolder = (args.indexOf('--dir') > -1) || (args.indexOf('-d') > -1);
var withJSX = args.indexOf('--jsx') > -1;
var withPkg = (args.indexOf('--pkg') > -1) || (args.indexOf('-p') > -1);
var es5 = args.indexOf('--es5') > -1;
var isEntry = args.indexOf('--entry') > -1;


// Make variables accessible globally
module.exports = {
	withFolder: withFolder,
	withJSX: withJSX,
	withPkg: withPkg,
	es5: es5,
	isEntry: isEntry
}