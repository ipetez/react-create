import { es5, isEntry } from '../constants/env_vars';
import * as deps from '../constants/npm-imports';

const
  args = process.argv.slice(2),
  component = args[1];

let template,reactImports, compBody, compEnd = ``;

// Generate ES5 Component
if (es5) {
  reactImports = deps.React[1]
  compBody =
`

var ${component} = React.createClass({
  render: function() {
    return (
      <div className="${component.toLowerCase()}">
        { this.props.children }
      </div>
    )
  }
})
`
}

// Or ES6 Component
else {
  reactImports = deps.React[0];
  compBody =
`

export default class ${component} extends Component {
  render() {
    return (
      <div className="${component.toLowerCase()}">
        { this.props.children }
      </div>
    )
  }
}
`
}


// Mounts component to the DOM
if (isEntry) {
  if (es5) {
    reactImports +=
`
${deps.ReactDOM[1]}`
  }
  else {
    reactImports +=
`
${deps.ReactDOM[0]}`
  }

  compEnd +=
`
ReactDOM.render(<${component}/>, document.getElementById('app'));
`
}
else {
  if (es5) {
    compEnd +=
  `
module.exports = ${component};
  `
  }
}

template = reactImports + compBody + compEnd;



// Export component
export default template;