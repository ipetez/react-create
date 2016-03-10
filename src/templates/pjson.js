import { withJSX } from '../constants/env_vars';

const
  args = process.argv.slice(2),
  component = args[1],
  extension = withJSX ? '.jsx' : '.js',

  template =
`{
  "name": "${component}",
  "version": "0.0.0",
  "private": true,
  "main": "./${component}${extension}"
}`;

export default template;