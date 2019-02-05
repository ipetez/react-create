import { fn, redux, isEntry } from '../constants/env_vars';
import * as deps from '../constants/npm-imports';

const
args = process.argv.slice(2),
component = args[1];

let template,reactImports, compBody, compEnd = ``;


// Generate fn Component
if (fn) {
	if(redux) {
		reactImports = deps.Redux[0];
		compBody =`
const ${component} = () => (
	<div className="${component.toLowerCase()}"></div>
)

const mapStateToProps = state => {
	//state.theReducer
}

export default connect(mapStateToProps)(${component});`;

	}else{
		reactImports = deps.React[0]
		compBody =`

const ${component} = () => (
	<div className="${component.toLowerCase()}"></div>
)

export default  ${component};`;
	}	
}
	


// Or ES6 Component
else {
	if(redux) {
		reactImports = deps.Redux[1];
		
		compBody = `
class ${component} extends Component {
	render() {
		return (
			<div className="${component.toLowerCase()}">
				{ this.props.children }
			</div>
		)
	}
}

const mapStateToProps = state => {
	//state.theReducer
}

export default connect(mapStateToProps)(${component});`
	
	}else{
		reactImports = deps.React[1];
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
}`;
	}
	
}


// Mounts component to the DOM
if (isEntry) {
	if (fn) {
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
// else {
// 	if (fn) {
// 		compEnd +=
// 		`
// 		module.exports = ${component};
// 		`
// 	}
// }

template = reactImports + compBody + compEnd;



// Export component
export default template;