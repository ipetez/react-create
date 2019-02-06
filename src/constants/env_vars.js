const
  args = process.argv.slice(2),

  // Component arguments
  withFolder = (args.includes('--dir')) || (args.includes('-d')),
  withJSX = args.includes('--jsx'),
  withPkg = (args.includes('--pkg')) || (args.includes('-p')),
  
  controlled = (args.includes('--controlled')) || (args.includes('-c')),
  fn = (args.includes('--functional')) || (args.includes('-fn')),
  redux = args.includes('--redux'),
  isEntry = args.includes('--entry');


// Make variables accessible globally
export {
  withFolder,
  withJSX,
  withPkg,
  controlled,
  fn,
  redux,
  isEntry
}