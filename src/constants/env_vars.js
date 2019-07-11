const
  args = process.argv.slice(2),

  // Component arguments
  withFolder = (args.includes('--dir')) || (args.includes('-d')),
  withJSX = args.includes('--jsx'),
  withPkg = (args.includes('--pkg')) || (args.includes('-p')),
  
  controlled = (args.includes('--controlled')) || (args.includes('-c')),
  fn = (args.includes('--functional')) || (args.includes('-fn')),
  redux = args.includes('--redux'),

  stylClean = (args.includes('--scss')) || (args.includes('--styl')),
  stylNormal = (args.includes('--css')) || (args.includes('--less'))
;
// Make variables accessible globally
export {
  withFolder,
  withJSX,
  withPkg,
  controlled,
  fn,
  redux,
  stylClean,
  stylNormal
}