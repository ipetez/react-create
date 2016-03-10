const
  args = process.argv.slice(2),

  // Component arguments
  withFolder = (args.includes('--dir')) || (args.includes('-d')),
  withJSX = args.includes('--jsx'),
  withPkg = (args.includes('--pkg')) || (args.includes('-p')),
  es5 = args.includes('--es5'),
  isEntry = args.includes('--entry');


// Make variables accessible globally
export {
  withFolder,
  withJSX,
  withPkg,
  es5,
  isEntry
}